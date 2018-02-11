import React, { Component } from 'react';
import styled from 'styled-components';
import MetamaskMessage from './MetamaskMessage';
import { ExternalLink } from '../common';
import { Flex1 } from './Styles';

const MenuContainer = styled.div `

  width: 100vw;
  height: 20px;
  display: flex;

`;

class Menu extends Component {

  render(){
    const {hasWeb3, isNetworkSupported} = this.props;

    return <MenuContainer>
      <Flex1> 🎭 Sybil.me </Flex1>
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
