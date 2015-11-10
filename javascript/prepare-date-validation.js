var DATE_REGEX = "[0-9]{1,2}\/[0-1]?[0-9]\/[0-9]{4}"

function prepareDateValidation( options ) {
  var dateElement = document.querySelector( options.query )
  var formElement = document.querySelector( options.form )

  formElement.addEventListener( 'submit', function( event ) {
    if ( !dateElement.value.match( DATE_REGEX ) ) {
      event.preventDefault()
      alert( "Place use a format like '01/01/2001'" )
    }
  })

}

module.exports = prepareDateValidation
