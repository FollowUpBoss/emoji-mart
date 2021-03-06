var fs = require('fs'),
    emojiData = require('emoji-datasource'),
    emojiLib = require('emojilib'),
    inflection = require('inflection'),
    mkdirp = require('mkdirp'),
    buildSearch = require('../src/utils/build-search')

var categories = ['People', 'Nature', 'Foods', 'Activity', 'Places', 'Objects', 'Symbols', 'Flags'],
    data = { categories: [], emojis: {}, skins: {}, short_names: {} },
    categoriesIndex = {}

categories.forEach((category, i) => {
  data.categories[i] = { name: category, emojis: [] }
  categoriesIndex[category] = i
})

emojiData.sort((a, b) => {
  var aTest = a.sort_order || a.short_name,
      bTest = b.sort_order || b.short_name

  return aTest - bTest
})

let skippedCount = 0;
const unicodeVersions = ['1.1', '3.0', '3.2', '4.0', '4.1', '5.1', '5.2', '6.0', '6.1']

emojiData.forEach((datum) => {
  var category = datum.category,
      keywords = [],
      categoryIndex

  if (datum.category === 'Flags' || unicodeVersions.indexOf(datum.added_in) === -1) {
    skippedCount++;
    return;
  }

  if (!datum.category) {
    throw new Error('“' + datum.short_name + '” doesn’t have a category')
  }

  datum.name || (datum.name = datum.short_name.replace(/\-/g, ' '))
  datum.name = inflection.titleize(datum.name || '')

  if (datum.category == 'Flags') {
    datum.name = datum.name.replace(/\s(\w+)$/, (letters) => letters.toUpperCase())
  }

  if (!datum.name) {
    throw new Error('“' + datum.short_name + '” doesn’t have a name')
  }

  datum.emoticons = datum.texts || []
  datum.text = datum.text || ''
  delete datum.texts

  if (emojiLib.lib[datum.short_name]) {
    keywords = emojiLib.lib[datum.short_name].keywords
  }

  datum.search = buildSearch({
    short_names: datum.short_names,
    name: datum.name,
    keywords,
    emoticons: datum.emoticons
  })

  datum.search = datum.search.join(',')

  if (datum.category == 'Skin Tones') {
    data.skins[datum.short_name] = datum
  } else {
    categoryIndex = categoriesIndex[category]
    data.categories[categoryIndex].emojis.push(datum.short_name)
    data.emojis[datum.short_name] = datum
  }

  datum.short_names.forEach((short_name, i) => {
    if (i == 0) { return }
    data.short_names[short_name] = datum.short_name
  })

  delete datum.docomo
  delete datum.au
  delete datum.softbank
  delete datum.google
  delete datum.image
  delete datum.has_img_apple
  delete datum.has_img_google
  delete datum.has_img_twitter
  delete datum.has_img_emojione
  delete datum.has_img_facebook
  delete datum.has_img_messenger
  delete datum.sheet_x
  delete datum.sheet_y
  delete datum.category
  delete datum.sort_order
  delete datum.skin_variations

  for (let key in datum) {
    let value = datum[key]

    if (Array.isArray(value) && !value.length) {
      delete datum[key]
    }
  }
})

var flags = data.categories[categoriesIndex['Flags']]
flags.emojis.sort()

mkdirp('data', (err) => {
  if (err) throw err

  const stringifiedData = JSON.stringify(data).replace(/\"([A-Za-z_]+)\":/g, '$1:')
  fs.writeFile('data/index.js', `export default ${stringifiedData}`, (err) => {
    if (err) throw err
  })
})
