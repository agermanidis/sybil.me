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
import ScrollableAnchor from 'react-scrollable-anchor';
import { StickyContainer, Sticky } from 'react-sticky';


import Menu from './components/Menu';
import Avatar from './components/Avatar';
import Profile from './components/Profile';
import ProfileChat from './components/ProfileChat';
import ProfileInUse from './components/ProfileInUse';
import Description from './components/Description';
import DescriptionInUse from './components/DescriptionInUse';
import DescriptionCode from './components/DescriptionCode';
import { Flex1 } from './components/Styles';
import easingFunctions from './helpers/easingFunctions';

const CONTRACT_ADDRESSES = {
  ropsten: "0x165d9e99f23ab2ab039e92eb536f9a191663182d"
};

const GAS_LIMIT = 300000;

const Flex = styled.div `
  display: flex;
`;

const PageContainer = styled.div`
  display: flex;
  height: '100vh',
  position: 'fixed',
  overflow: 'scroll'
`;

const Page = styled.div`
  height: 100vh;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      nickname: "",
      image: "" ,
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
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll (evt) {
    let scrollTop = window.document.documentElement.scrollTop;
    console.log({scrollTop});
    this.setState({scrollTop});
  }

  async onDrop(files) {
    console.log('just dropped', files);
    if (files.length === 0) return;
    this.setState({
      image: URL.createObjectURL(files[0]),
      // imageFile: files[0]
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
    const { scrollTop, nickname, image, pendingTx } = this.state;
    const { address, hasWeb3, isNetworkSupported } = this.props;
    return <div>
      <Menu
        hasWeb3={hasWeb3}
        isNetworkSupported={isNetworkSupported} />
      <PageContainer>
        <Flex1>
            <Page><Description /></Page>
          <ScrollableAnchor id={'users'}>
            <Page><DescriptionInUse /></Page>
          </ScrollableAnchor>
          <ScrollableAnchor id={'developers'}>
            <Page><DescriptionCode /></Page>
          </ScrollableAnchor>
        </Flex1>
        <Flex1>
        <Page>
          <Profile
            address={address}
            nickname={nickname}
            image={image}
            onNicknameChange={(evt) => this.setState({ nickname: evt.target.value })}
            onDrop={this.onDrop.bind(this)} />
        </Page>
        <Page><ProfileInUse /></Page>
        <Page><ProfileChat /></Page>
        </Flex1>
      </PageContainer>
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
