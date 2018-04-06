import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { DescriptionText } from './Styles';
import media from '../media';

const DescriptionContainer = styled.div `
  flex : 1;
  padding: 40px;
  padding-top: 10vh;
  ${ media.handheld`
    padding-top: 0;
  ` }
`;

const HeaderText = styled.h1 `
  font-size: 3.2rem;
  max-width: 80%;
  ${ media.handheld`
    font-size: 2.8em;
  ` }
`;

class Description extends Component {
  render() {
    return <DescriptionContainer>
        <HeaderText>
          Sybil is a minimalist decentralized <u>identity</u> protocol.
        </HeaderText>
        <DescriptionText>
          A nickname, avatar, and other profile information attached to
          your Ethereum address that can be shared across decentralized
          applications.
        </DescriptionText>
        <DescriptionText>
          <a href="#users">Learn More</a>
        </DescriptionText>
      </DescriptionContainer>;
  }
}

export default Description;
