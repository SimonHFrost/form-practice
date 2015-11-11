var KEY = 'missionToMarsAcceptCookies'

function cookiePrompt( options ) {
  if ( !window.localStorage[KEY] ) {
    var acceptCookiesElement = document.querySelector( options.acceptCookiesElement )
    acceptCookiesElement.classList.remove( 'hide' )

    acceptCookiesElement.addEventListener( 'click', function() {
      window.localStorage[KEY] = true
      acceptCookiesElement.classList.add( 'hide' )
    })
  }
}

module.exports = cookiePrompt
