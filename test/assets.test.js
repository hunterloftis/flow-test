const fs = require('fs')
const path = require('path')
const assert = require('assert')

assert(file('static/main.css'), 'css has been generated')
assert(file('static/lang-logo.png'), 'images have been copied')

function file(name) {
  try {
    return fs.statSync(path.join(__dirname, name)).isFile()
  }
  catch (err) {
    return false
  }
}
