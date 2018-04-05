import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle, DescriptionText } from './Styles';
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/styles/hljs";

const DescriptionContainer = styled.div `
  flex : 1;
  // background-color: lightgrey;
  padding: 40px;
`;

class DescriptionCode extends Component {
  render() {
    return <DescriptionContainer>
        <PageTitle>For Developers</PageTitle>
        <DescriptionText>
          Integrate Sybil into your decentralized application in a few lines of code. <b> No need to write custom code to maintain user profiles.</b>
        </DescriptionText>

        <SyntaxHighlighter style={hybrid} customStyle={{background: 'none', fontSize: '18px'}} language='javascript'>
        {`

import Sybil from 'sybil';

// initialize Sybil
const S = new Sybil();

// get an account's nickname
await S.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8').nickname();

// get an account's avatar URL
await S.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8').avatar();

`
      }

        </SyntaxHighlighter>
        <a href="#"> Github </a>
      </DescriptionContainer>;
  }
}

export default DescriptionCode;
