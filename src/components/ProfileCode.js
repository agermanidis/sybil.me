import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import SyntaxHighlighter from "react-syntax-highlighter";
import { hybrid } from "react-syntax-highlighter/styles/hljs";

const ProfileCodeContainer = styled.div `
  flex : 1;
  background-color: #000000;
  color: white;
  font-size: 1.2rem;
  height: 100vh;
`;

class ProfileCode extends Component {

  render() {


    return  <ProfileCodeContainer>
        <SyntaxHighlighter style={hybrid} customStyle={{background: 'none', padding: '10vh'}} language='javascript'>
{`import Sybil from 'sybil';

// initialize Sybil using the default contract address
const S = new Sybil(web3);

// get the nickname associated with an address
S.nickname.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

// get the avatar URL associated with an address
S.avatar.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');`}

      </SyntaxHighlighter>

    </ProfileCodeContainer>;

  }

}

export default ProfileCode;
