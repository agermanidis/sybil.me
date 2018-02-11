import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import DappsImage from '../images/dapps.png';

const DescriptionContainer = styled.div `
  flex : 1;
  // background-color: lightgrey;
  padding: 20px;

`
const DescriptionTexts = styled.p `
  font-size: 2rem;
`

const HeaderText = styled.h1 `

  font-size: 2.5rem;

`

class Description extends Component {

  render() {
    return  <DescriptionContainer>
        <HeaderText> Minimum Viable Decentralized <u>Identity.</u> </HeaderText>
        <DescriptionTexts>
          Sybil lets you attach a basic social identity, consisting of a nickname and an avatar, to your Ethereum address that can be used easily used by any other dapp. The obvious candidates are social dapps (decentralized messaging, messageboards, microblogging, etc.), but many dapps in other domains would also benefit from the presence of nicknames and avatars to humanize their user's experience.
        </DescriptionTexts>
        <img src={DappsImage} />

      </DescriptionContainer>;
  }

}

export default Description;
