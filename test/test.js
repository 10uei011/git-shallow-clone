var gitShallowClone = require('../index')

gitShallowClone('git@github.com:10uei011/hapi-cli.git', function (err) {
  if (err) {
    console.log('Error:', err)
  } else {
    console.log('clone complete')
  }
})
