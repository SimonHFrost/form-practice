function passwordConfirmationCheck( options ) {
  var passwordElement = document.querySelector( options.passwordElement )
  var passwordConfirmationElement = document.querySelector( options.passwordConfirmationElement )
  var formElement = document.querySelector( options.formElement )

  formElement.addEventListener( 'submit', function( event ) {
    if ( passwordElement.value !== passwordConfirmationElement.value ) {
      event.preventDefault()
      alert( 'Passwords must match!' )
    }
  })
}

module.exports = passwordConfirmationCheck
