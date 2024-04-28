
# multiselect-blockly-example 

[![Built on Blockly](https://tinyurl.com/built-on-blockly)](https://github.com/google/blockly)

A sample node project demonstrating usage of the [multiselect-blockly plugin](https://www.npmjs.com/package/@rshaker/multiselect-blockly).

To activate multiselect mode, either shift-click on a block *or* use the rectangular selection tool (shift-click-drag). Clicking on the background or any unselected block will exit multiselect mode.

Click [here](https://rshaker.github.io/multiselect-blockly-example/) for a live demo.

## Installation

If you're planning on doing development, download the complete project including source code from github. Otherwise, the package from npm is capable of deployment, but lacks the typescript and build scripts.

### From github
```bash
git clone git@github.com:rshaker/multiselect-blockly-example.git
cd ./multiselect-blockly-example

npm install
npm run build
npm run serve
```

### From npm
```bash
npm pack @rshaker/multiselect-blockly-example
tar xzf rshaker-multiselect-blockly-example-x.x.x.tgz
cd ./package

npm install
npm run serve
```

Then browse to http://localhost:8080/

## License
MIT


