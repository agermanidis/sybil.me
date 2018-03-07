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
        <PageTitle>For Ðapp Developers</PageTitle>
        <DescriptionText>
          Integrate Sybil into your Ðapp in a few lines of code. <b> No need to write custom code to maintain user profiles.</b>
        </DescriptionText>

        <SyntaxHighlighter style={hybrid} customStyle={{background: 'none', fontSize: '18px'}} language='javascript'>
        {`

import Sybil from 'sybil';

// initialize Sybil using the default contract address
const S = new Sybil(web3);

// get the nickname associated with an address
S.nickname.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

// get the avatar URL associated with an address
S.avatar.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');`

      }

        </SyntaxHighlighter>
        <a href="#"> Github </a>
      </DescriptionContainer>;
  }
}

export default DescriptionCode;
