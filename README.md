# sybil.me - Minimum Viable Decentralized Identity

### Introduction

Sybil is a common identity for an address in the Ethereum blockchain that can be used across a variety of dapps. The obvious candidates are decentarlized social apps (messaging, messageboards, microblogging, etc.), but many dapps in other domains would also benefit from the presence of nicknames and avatars.

### Integration

Install the sybil library through NPM:

```
npm install sybil --save
```

To be able to read from and write to the Ethereum blockchain, you will need to use the `web3` library and create a connection to an Ethereum provider.

```javascript
import Web3 from 'web3';

// initialize web3 via the injected web3 from Metamask
const web3 = new Web3(window.web3);

// initialize web3 via a local RPC
const web3 = new Web3("http://localhost:8545");

// initialize web3 via a remote provider
const web3 = new Web3("https://mainnet.infura.io/");
```

Now that you have initialized the `web3` provider, you can now create a `Sybil` instance to interact with the Sybil smart contract.

```javascript
import Sybil from 'sybil';

// initialize Sybil using the default contract address
const S = new Sybil(web3);

// initialize Sybil using a different contract address
const S = new Sybil(web3, '0x1234567890abcdef1234567890abcdef12345678');
```

To get information about an address:

```javascript
// get the nickname associated with an address
S.username.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

// get the avatar URL associated with an address
S.avatar.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');
```

### License

Apache 2.0
