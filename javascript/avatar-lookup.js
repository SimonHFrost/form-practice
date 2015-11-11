var md5 = require( 'md5' )
var debounce = require( 'debounce' )

var GRAVATAR_URL = 'http://www.gravatar.com/avatar/'
var DEBOUNCE_DELAY = 1000

function avatarLookup( options ) {
  var imageElement = document.querySelector( options.imageElement )
  var emailElement = document.querySelector( options.emailElement )

  // NOTE: Debounce to reduce number of image requests from gravatar
  var updateImage = debounce( function() {
    // NOTE: Md5 email is required for Gravatar url format
    var emailHash = md5( emailElement.value.toLowerCase() )
    imageElement.src = GRAVATAR_URL + emailHash
  }, DEBOUNCE_DELAY )

  emailElement.addEventListener( 'input', function() {
    if ( emailElement.value ) {
      imageElement.src = './images/loading.gif'
    }
    updateImage()
  })
}

module.exports = avatarLookup
