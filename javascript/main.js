var avatarLookup = require( './fetch-avatar' )
var styledSelectComponent = require( './styled-select-component' )
var dateValidation = require( './prepare-date-validation' )

avatarLookup({
  imageElement: '#avatar',
  emailElement: '[name="email"]'
})

styledSelectComponent({
  nationalityElement: '[name="nationality"]'
})

dateValidation({
  dateElement: '[name="birthdate"]',
  formElement: 'form'
})
