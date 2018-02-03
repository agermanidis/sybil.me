# sybil.me - Minimum Viable Decentralized Identity

### Introduction

Sybil lets you attach a basic social identity on your Ethereum address that can be used easily used by any other dapp. The obvious candidates are social dapps (decentralized messaging, messageboards, microblogging, etc.), but many dapps in other domains would also benefit from the presence of nicknames and avatars.

### Principles

* **Simple code**

The smart contract powering Sybil is less than 100 lines of code. Simple contracts are more secure and easily auditable.

* **Simple integration**

Adding nicknames and pictures to the users of your dapp using the Sybil protocol can be done in a few minutes. We also provide various example dapps that use Sybil.

* **No unique nicknames**

You should be called by any name you wish to be called. That's why your Sybil nickname is not unique, meaning that any number of people can share the same nickname. After all, you already have a unique id that other people and services can use to verify you — your Ethereum address!

* **No real names**

By calling it "nickname" instead of "name," we encourage you not to use your legal name, as it more easily makes you subject to surveillance by states and corporations. Pseudonyms, i.e. non-legal names, give you the freedom you to safely manage and explore different facets of your identity. 

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
S.nickname.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

// get the avatar URL associated with an address
S.avatar.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');
```

### License

Apache 2.0
