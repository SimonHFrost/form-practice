// NOTE: window.jQuery needed by drmonty-chosen
window.jQuery = $ = require( 'jquery' )
require( 'drmonty-chosen' )

function prepareSelect( options ) {
  $( options.nationalityElement ).chosen()
}

module.exports = prepareSelect
