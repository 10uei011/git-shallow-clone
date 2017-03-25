# git-shallow-clone

Shallow clone a git repository. The module will copy only the latest revision of the repository. Shallow cloning saves considerable amount of time compared to deep cloning.

## Installation

Install:

	$ npm install git-shallow-clone

Require:

	var clone = require('git-shallow-clone')

## Usage

#### `clone(repo, targetPath, cb)`

Clone `repo` to `targetPath`, calling `cb` on completion.

## License

Released under the MIT license.
