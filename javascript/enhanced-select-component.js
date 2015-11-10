// NOTE: window.jQuery needed by drmonty-chosen
window.jQuery = $ = require( 'jquery' )
require( 'drmonty-chosen' )

function enhancedSelectComponent( options ) {
  $( options.nationalityElement ).chosen()
}

module.exports = enhancedSelectComponent
