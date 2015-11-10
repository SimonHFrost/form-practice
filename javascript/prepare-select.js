// NOTE: window.jQuery needed by drmonty-chosen
window.jQuery = $ = require( 'jquery' )
require( 'drmonty-chosen' )

function prepareSelect( options ) {
  $( options.selectSelectorQuery ).chosen( this.options )
}

module.exports = prepareSelect
