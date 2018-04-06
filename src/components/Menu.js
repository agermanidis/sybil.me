import React, { Component } from 'react';
import styled from 'styled-components';
import WalletMessage from './WalletMessage';
import { ExternalLink } from '../common';
import { Flex1 } from './Styles';

const MenuContainer = styled.div `
  padding: 1rem;
  height: 20px;
  display: flex;
  position: absolute;
  z-index: 1;
  width: 100vw;
  box-sizing: border-box;
`;

class Menu extends Component {

  render(){
    const {hasWeb3, isNetworkSupported} = this.props;

    return <MenuContainer>
      <Flex1 style={{paddingLeft: '20px'}} >
        🎭 sybil.me – minimalist decentralized identity protocol
      </Flex1>
      {/* <Flex1 style={{textAlign: 'center'}}>
        <WalletMessage
          hasWeb3={hasWeb3}
          isNetworkSupported={isNetworkSupported}
          />
      </Flex1> */}
      <Flex1 style={{textAlign: 'right', paddingRight: '40px'}}>
        <ExternalLink href="#">Github</ExternalLink>
        {' – '}
        <ExternalLink href="#">Smart Contract</ExternalLink>
      </Flex1>
    </MenuContainer>
  }

}

export default Menu
