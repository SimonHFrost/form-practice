var Entropizer = require( 'entropizer' )
var entropizer = new Entropizer()

function passwordStrength( options ) {
  var passwordElement = document.querySelector( options.passwordElement )
  passwordElement.addEventListener( 'input', function() {
    console.log( entropizer.evaluate( passwordElement.value ) )
  })
}

module.exports = passwordStrength
