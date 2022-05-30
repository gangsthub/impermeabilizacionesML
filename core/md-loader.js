const snarkdown = require('snarkdown')

// eslint-disable-next-line require-await
module.exports = function loader(content) {
  this.cacheable()
  const result = snarkdown(content).replace(
    // eslint-disable-next-line
    new RegExp('<br />', 'g'),
    '<br /><br />'
  )
  return `export default \`${result}\``
}
