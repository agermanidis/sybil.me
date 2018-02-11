import React, { Component } from 'react';
import styled from 'styled-components';
import MetamaskMessage from './MetamaskMessage';
import { ExternalLink } from '../common';
import { Flex1 } from './Styles';

const MenuContainer = styled.div `
  padding: 1em;
  height: 20px;
  display: flex;

`;

class Menu extends Component {

  render(){
    const {hasWeb3, isNetworkSupported} = this.props;

    return <MenuContainer>
      <Flex1> 🎭 sybil.me – minimum viable decentralized identity </Flex1>
      <Flex1 style={{textAlign: 'center'}}>
        <MetamaskMessage
          hasWeb3={hasWeb3}
          isNetworkSupported={isNetworkSupported}
          />
      </Flex1>
      <Flex1 style={{textAlign: 'right'}}>
        <ExternalLink href="#"> Docs </ExternalLink>
      </Flex1>

    </MenuContainer>
  }

}

export default Menu
