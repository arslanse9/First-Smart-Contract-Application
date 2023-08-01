const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
  'inbox.sol'
].inbox;



// const path = require('path');
// const solc = require('solc');
// const fs = require('fs-extra');

// const buildPath = path.resolve(__dirname, 'build');
// fs.removeSync(buildPath);

// const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
// const source = fs.readFileSync(inboxPath, 'UTF-8');



// var input = {
//     language: 'Solidity',
//     sources: {
//         'inbox.sol' : {
//             content: source
//         }
//     },
//     settings: {
//         outputSelection: {
//             '*': {
//                 '*': [ '*' ]
//             }
//         }
//     }
// };

// var output = JSON.parse(solc.compile(JSON.stringify(input)));
// const interface = output.contracts['inbox.sol'].inbox.abi;
// const bytecode = output.contracts['inbox.sol'].inbox.evm.bytecode.object;

// module.exports = {
//     interface,
//     bytecode,
// };