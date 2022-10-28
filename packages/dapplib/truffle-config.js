require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad good problem outer success'; 
let testAccounts = [
"0xfad531e8155072df732b69fdb8cd64cf063a12673544ad7149c98c3c198d9568",
"0x4361ca6ef56d674cf7a24f0b50373cf39dcdf8188dc7a0c69af10a039a2bc343",
"0x36e0aec4ee569c864e5aa0c775380252012dafa9351cbcc5aaa255d99981f15b",
"0xbfb08a80e55512bf8e702913cf65edfddee992eec980c88fb93d86564f572778",
"0xe0f790f0c321ee2f81d18775a4e9cc5fe9cbf159193a6757f3a05a6a735dfdbf",
"0xc9f511c71fa19c4924a5d6f39889970b580f50725d2624e11eb6ed1f92fa36ad",
"0x59289049f2c38559c039881a9064884970bb3248de0e63b10cc0b0a42a06a986",
"0xeed78dd27c985cdef31b973e9d183556d5ce460f21ba04308754ae23a4d4bc4f",
"0x40dd241333c9904b0162d2c51f0eee898f8e083a4d62b4286bcc0460451e0931",
"0xf0ed197c6fff4909698ab2d42ae6a3a9cd27e5f3e3f72664adcf0cdfcb699f6e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

