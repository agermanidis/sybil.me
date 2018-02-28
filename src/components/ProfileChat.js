import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { hybrid } from "react-syntax-highlighter/styles/hljs";
import Chat from './Chat';

const ProfileChatBox = styled.div `
  display: flex;
  flex : 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  height: 100vh;
`;

class ProfileChat extends Component {

  render() {


    return  (

    <ProfileChatBox>
    <Chat/>
    </ProfileChatBox>
    )
  }

}

export default ProfileChat;
