require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy response script minor include civil army gesture'; 
let testAccounts = [
"0x8ee30194cd9168a404801ab626ea55d1b637f3a91c4ecbd6a759c9ab111fc665",
"0x978ff064d8c91961b090df85d0426dc77f1534c5d14ab4a2a8d81a2078901e2c",
"0xb830f8e8a08309b6ffe89ee48b04d4dfefa2c65b0554b132ed2d9aae43aab303",
"0x119f0ce05ad31094ceae8ae415f1897633ec62de93dd0b8443908fee4e21459a",
"0xd234a56700e4986d4f3adca249f342ab0e17e7bd0fd34b6b613b511351170d2e",
"0x52c63f26091370b1998dea99ee173783007c0c4efd582a3c1a45113b3d9befe0",
"0x59b11422fb25d36e576a50c88712dd43a43be76287ff866ec5b174bfe4ed666c",
"0x3c552d81083677163bab1c7d78b5fafd23ae886d849db5e9831e04a1f8afe27e",
"0x0b5607d2c955139e15f72910c61cb6c3ccaeed0dfdb37fb1f1e46cfd652ca376",
"0x1ff84d403a352cc75579f798ba8caa0b47ff530d46d933f3db159dd86186ee39"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


