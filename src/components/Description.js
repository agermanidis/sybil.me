import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { DescriptionText } from './Styles';

const DescriptionContainer = styled.div `
  flex : 1;
  padding: 40px;
  padding-top: 20vh;
`;

const HeaderText = styled.h1 `
  font-size: 4rem;
`;

class Description extends Component {
  render() {
    return  <DescriptionContainer>
        <HeaderText>Sybil is your minimal decentralized <u>identity</u>.</HeaderText>
        <DescriptionText>
        It's a nickname, avatar, and other profile information attached to your Ethereum address that can be used across Ðapps.
        </DescriptionText>
        <DescriptionText>
        <a href='#users'>Learn More</a>
        </DescriptionText>
      </DescriptionContainer>;
  }
}

export default Description;
