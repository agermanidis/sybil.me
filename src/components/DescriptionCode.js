import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle, DescriptionText } from './Styles';
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/styles/hljs";
import CodeSnippet from '../images/codesnippet.png';

const DescriptionContainer = styled.div `
  flex : 1;
  // background-color: lightgrey;
  padding: 40px;
`;

class DescriptionCode extends Component {
  render() {
    return <DescriptionContainer>
        <DescriptionText>
          Add Sybil to your dapp in a few lines of code. 
        </DescriptionText>

        <img src={CodeSnippet} style={{width: '45vw', margin: '1em -1em'}} />
        {/* <SyntaxHighlighter style={hybrid} customStyle={{background: 'black', fontSize: '18px', padding: '0.5em'}} language='javascript'>
        {`import Sybil from 'sybil';

// initialize Sybil
const S = new Sybil();

// get an account's nickname
await S.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8').nickname();

// get an account's avatar URL
await S.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8').avatar();
`
      }

        </SyntaxHighlighter> */}
        <a href="https://github.com/agermanidis/sybil"> Github </a>
      </DescriptionContainer>;
  }
}

export default DescriptionCode;
