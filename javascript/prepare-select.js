// NOTE: window.jQuery needed by drmonty-chosen
window.jQuery = $ = require( 'jquery' )
require( 'drmonty-chosen' )

function prepareSelect( options ) {
  $( options.query ).chosen( this.options )
}

module.exports = prepareSelect
