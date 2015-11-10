function overEighteenCheck( options ) {
  var dateElement = document.querySelector( options.dateElement )
  var formElement = document.querySelector( options.formElement )

  formElement.addEventListener( 'submit', function( event ) {
    var dateComponents = dateElement.value.split( '/' )

    var year = dateComponents[2]
    // NOTE: Months are 0 based, so we have to subtract 1
    var month = dateComponents[1] - 1
    var day = dateComponents[0]
    var birthdate = new Date( year, month, day )

    var MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24
    var days = ( new Date() - birthdate ) / MILLISECONDS_IN_DAY
    var years = days / 365

    if ( years < 18 ) {
      event.preventDefault()
      alert( 'You must be older than 18!' )
    }
  })
}

module.exports = overEighteenCheck
