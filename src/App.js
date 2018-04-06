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
import isMobile from 'is-mobile';

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
      imageFile: null,
      pendingTx: null
    };
  }

  async componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll (evt) {
    let scrollTop = window.document.documentElement.scrollTop;
    this.setState({scrollTop});
  }

  render() {
    const { scrollTop, pendingTx } = this.state;
    const { address, hasWeb3, isNetworkSupported, web3 } = this.props;

    if (isMobile()) {
      return <div>
          <Description />
          <Profile address={address}/>
          <DescriptionInUse />
        </div>
    }
    return <div>
      <Menu />
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
          <Profile address={address}/>
            
        </Page>
        <Page><ProfileInUse /></Page>
        <Page><ProfileChat web3={web3} address={address} isNetworkSupported={isNetworkSupported} /></Page>
        </Flex1>
      </PageContainer>
    </div>
  }
}

const Wrapped = () => (
  <EthereumWrapper
    mainNetwork="mainnet"
    supportedNetworks={['mainnet', 'ropsten']}
  >
    <App />
  </EthereumWrapper>
);
export default Wrapped;
