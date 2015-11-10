var md5 = require( 'md5' )
var debounce = require( 'debounce' )

var GRAVATAR_URL = 'http://www.gravatar.com/avatar/'
var DEBOUNCE_DELAY = 1000

function fetchAvatar( options ) {
  var avatarElement = document.querySelector( options.emailSelectorQuery )
  var emailElement = document.querySelector( options.avatarSelectorQuery )

  // NOTE: Debounce to reduce number of image requests from gravatar
  var updateImage = debounce( function() {
    // NOTE: Md5 email is required for Gravatar url format
    var emailHash = md5( emailElement.value.toLowerCase() )
    avatarElement.src = GRAVATAR_URL + emailHash
  }, DEBOUNCE_DELAY )

  emailElement.addEventListener( 'input', function() {
    updateImage()
  })
}

module.exports = fetchAvatar
