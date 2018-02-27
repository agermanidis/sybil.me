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
        <PageTitle>For Dapp Developers</PageTitle>
        <DescriptionText>
          Integrate Sybil into your dapp in a few lines of code.
        </DescriptionText>
        <DescriptionText>
          No need to write custom code to maintain user profiles.
        </DescriptionText>
        <SyntaxHighlighter style={hybrid} customStyle={{background: 'none', padding: '10vh'}} language='javascript'>
{`import Sybil from 'sybil';

// initialize Sybil using the default contract address
const S = new Sybil(web3);

// get the nickname associated with an address
S.nickname.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

// get the avatar URL associated with an address
S.avatar.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');`}

      </SyntaxHighlighter>
      </DescriptionContainer>;
  }
}

export default DescriptionCode;
