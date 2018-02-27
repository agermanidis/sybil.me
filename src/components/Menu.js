import React, { Component } from 'react';
import styled from 'styled-components';
import MetamaskMessage from './MetamaskMessage';
import { ExternalLink } from '../common';
import { Flex1 } from './Styles';

const MenuContainer = styled.div `
  padding: 1rem;
  height: 20px;
  display: flex;

`;

class Menu extends Component {

  render(){
    const {hasWeb3, isNetworkSupported} = this.props;

    return <MenuContainer>
      <Flex1 style={{paddingLeft: '20px'}} >
        🎭 sybil.me – minimal decentralized identity
      </Flex1>
      <Flex1 style={{textAlign: 'center'}}>
        <MetamaskMessage
          hasWeb3={hasWeb3}
          isNetworkSupported={isNetworkSupported}
          />
      </Flex1>
      <Flex1 style={{textAlign: 'right', paddingRight: '40px'}}>
        <ExternalLink href="#">About</ExternalLink>
        {' – '}
        <ExternalLink href="#">Docs</ExternalLink>
        {' – '}
        <ExternalLink href="#">Contract</ExternalLink>
      </Flex1>
    </MenuContainer>
  }

}

export default Menu
