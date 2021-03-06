var DATE_REGEX = '[0-9]{1,2}\/[0-1]?[0-9]\/[0-9]{4}'

function dateValidation( options ) {
  var dateElement = document.querySelector( options.dateElement )
  var formElement = document.querySelector( options.formElement )

  formElement.addEventListener( 'submit', function( event ) {
    if ( !dateElement.value.match( DATE_REGEX ) ) {
      event.preventDefault()
      alert( "Please use a format like '08/10/1970'" )
    }
  })

}

module.exports = dateValidation
