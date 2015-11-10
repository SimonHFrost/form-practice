var fetchAvatar = require( './fetch-gravatar' )
var prepareSelect = require( './prepare-select' )

fetchAvatar({
  emailSelectorQuery: '#avatar',
  avatarSelectorQuery: '[name="email"]'
})

prepareSelect({
  selectSelectorQuery: '[name="nationality"]'
})
