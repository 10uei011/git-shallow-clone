var spawn = require('child_process').spawn

module.exports = gitShallowClone

var _noops = function () {}

function gitShallowClone (gitUrl, clonePath, cb) {

  if (!gitUrl) {
    throw new Error('Please provide the github url to clone');
    process.exit(1)
  }

  if (clonePath instanceof Function) {
    cb = clonePath
    clonePath = ''
  }

  cb = cb || _noops

  var args = ['clone', '--depth', '1', gitUrl]

  if (clonePath) {
    args.push(clonePath)
  }

  var process = spawn('git', args)

  process.on('close', function (status) {
    if (status === 0) {
      cb()
    } else {
      cb(new Error("'git clone' failed with status " + status))
    }
  })
}
