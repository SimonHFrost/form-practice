var avatarLookup = require( './avatar-lookup' )
var enhancedSelectComponent = require( './enhanced-select-component' )
var dateValidation = require( './date-validation' )
var passwordStrength = require( './password-strength' )
var overEighteenCheck = require( './over-eighteen-check' )
var passwordConfirmationCheck = require( './password-confirmation-check' )
var passwordConsecutiveCheck = require( './password-consecutive-check' )
var cookiePrompt = require( './cookie-prompt' )

avatarLookup({
  imageElement: '#avatar',
  emailElement: '[name="email"]'
})

enhancedSelectComponent({
  nationalityElement: '[name="nationality"]'
})

dateValidation({
  dateElement: '[name="birthdate"]',
  formElement: 'form'
})

passwordStrength({
  passwordElement: '[name="password"]',
  passwordStrengthElement: '#password-strength'
})

overEighteenCheck({
  dateElement: '[name="birthdate"]',
  formElement: 'form'
})

passwordConfirmationCheck({
  passwordElement: '[name="password"]',
  passwordConfirmationElement: '[name="password-confirm"]',
  formElement: 'form'
})

passwordConsecutiveCheck({
  passwordElement: '[name="password"]',
  formElement: 'form'
})

cookiePrompt({
  acceptCookiesElement: '#accept-cookies'
})
