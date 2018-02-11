import React, { Component } from 'react';
import {
  ExternalLink,
  EthereumWrapper,
  EtherscanAddressLink,
  WithPendingTransaction,
  uploadFileToIpfs,
  ipfsURL
} from "./common";
import contractABI from "./abi";
import styled from "styled-components";

import Menu from './components/Menu';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import Description from './components/Description';

const CONTRACT_ADDRESSES = {
  ropsten: "0x165d9e99f23ab2ab039e92eb536f9a191663182d"
};

const GAS_LIMIT = 300000;

const Flex = styled.div `

  display: flex;

`

class App extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      image: "",
      imageFile: null,
      pendingTx: null
    };
  }

  async setupContract() {
    const contractInstance = new this.props.web3.eth.Contract(
      contractABI,
      CONTRACT_ADDRESSES[this.props.network]
    );
    this.setState({ contractInstance });
  }

  async refreshDapp() {
    const { contractInstance } = this.state;
    const { address } = this.props;
    // const info = await contractInstance.methods.getInfo(address).call();
    // const ipfsHash = info[1];
    // this.setState({
    //   name: info[0],
    //   image: ipfsHash ? ipfsURL(ipfsHash) : ""
    // });
  }

  async componentDidMount() {
    await this.setupContract();
    await this.refreshDapp();
  }

  async onDrop(files) {
    if (files.length === 0) return;
    this.setState({
      image: URL.createObjectURL(files[0]),
      imageFile: files[0]
    });
  }

  async save() {
    const { address } = this.props;
    const { contractInstance, nickname, imageFile } = this.state;
    let tx;
    if (imageFile) {
      const hash = await uploadFileToIpfs(imageFile);
      tx = contractInstance.methods.setInfo(nickname, hash);
    } else {
      tx = contractInstance.methods.setNickname(nickname);
    }
    tx.send({ from: address, gas: GAS_LIMIT }).on("transactionHash", hash => {
      this.setState({ pendingTx: hash });
    });
  }

  render() {
    const { nickname, image, pendingTx } = this.state;
    const { hasWeb3, isNetworkSupported } = this.props;

    console.log({hasWeb3, isNetworkSupported});

    return <div>
       <Menu
         hasWeb3={hasWeb3}
         isNetworkSupported={isNetworkSupported}
         />

      <Flex>
        <Description />
        <Profile
          nickname={nickname}
          image={image}
          onNicknameChange={(evt) => this.setState({ nickname: evt.target.value })}
          onDrop={this.onDrop.bind(this)} />
      </Flex>


    </div>
  }
}

const Wrapped = () => (
  <EthereumWrapper
    mainNetwork="mainnet"
    supportedNetworks={['ropsten', 'mainnet']}
  >
    <App />
  </EthereumWrapper>
);
export default Wrapped;
