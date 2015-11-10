function prepareDateValidation( options ) {

  var dateElement = document.querySelector( options.query )
  var formElement = document.querySelector( options.form )

  var dateRegex = "[0-9]{1,2}\/[0-1]?[0-9]\/[0-9]{4}"

  formElement.addEventListener( 'submit', function( event ) {
    event.preventDefault()

    if ( dateElement.value.match( dateRegex ) ) {
      alert( 'date regex is right' )
    } else {
      alert( 'date regex is wrong' )
    }
  })

}

module.exports = prepareDateValidation
