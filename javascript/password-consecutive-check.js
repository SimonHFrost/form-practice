var CONSECUTIVE_REGEX = '[0-9]{3,}'

function passwordConsecutiveCheck( options ) {
  var passwordElement = document.querySelector( options.passwordElement )
  var formElement = document.querySelector( options.formElement )

  formElement.addEventListener( 'submit', function( event ) {
    if ( passwordElement.value.match( CONSECUTIVE_REGEX ) ) {
      event.preventDefault()
      alert( 'Please do not include consecutive numbers in your password' )
    }
  })

}

module.exports = passwordConsecutiveCheck
