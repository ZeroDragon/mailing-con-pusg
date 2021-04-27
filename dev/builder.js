const { readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const pug = require('pug')

const [,, type, template] = process.argv

if (!template) {
  console.log('must invoke with `-- templateName`')
  process.exit(1)
}

const input = readFileSync(join(__dirname, '../src/', `${template}.pug`))
const output = pug.render(input, {
  filename: 'Pug',
  basedir: __dirname,
  type,
  pretty: type === 'dev'
})

writeFileSync(join(__dirname, '../dist/', `${template}.html`), output)
