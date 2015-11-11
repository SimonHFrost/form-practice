var Entropizer = require( 'entropizer' )
var entropizer = new Entropizer()

function passwordStrength( options ) {
  var passwordElement = document.querySelector( options.passwordElement )
  var passwordStrengthElement = document.querySelector( options.passwordStrengthElement )
  passwordElement.addEventListener( 'input', function() {
    passwordStrengthElement.innerHTML = 'Strength: ' + Math.floor( entropizer.evaluate( passwordElement.value ) )
  })
}

module.exports = passwordStrength
