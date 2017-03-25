var spawn = require('child_process').spawn

module.exports = gitShallowClone

var _noops = function () {}

function gitShallowClone (gitUrl, clonePath, cb) {
  cb = cb || _noops

  var args = ['clone', '--depth', '1', gitUrl, clonePath]

  var process = spawn('git', args)

  process.on('close', function (status) {
    if (status === 0) {
      cb()
    } else {
      cb(new Error("'git clone' failed with status " + status))
    }
  })
}
