var fetchAvatar = require('./fetch-gravatar')

fetchAvatar({
  emailSelectorQuery: '#avatar',
  avatarSelectorQuery: '[name="email"]'
})
