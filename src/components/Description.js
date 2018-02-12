import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';

const DescriptionContainer = styled.div `
  flex : 1;
  // background-color: lightgrey;
  padding: 40px;

`
const DescriptionText = styled.p `
  font-size: 2rem;
  width: 90%;
  padding-top: 2rem;
`

const HeaderText = styled.h1 `
  font-size: 4rem;
`

class Description extends Component {

  render() {
    return  <DescriptionContainer>
        <HeaderText> Sybil is the minimal decentralized <u>identity</u>.</HeaderText>
        <DescriptionText>
        A nickname and an avatar attached to your Ethereum address that can be used across dapps.
        </DescriptionText>
        <DescriptionText>
        <a href='#users'>Learn More</a>
        </DescriptionText>
      </DescriptionContainer>;
  }

}

export default Description;
