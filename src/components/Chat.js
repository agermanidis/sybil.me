import React, { Component } from 'react';
import styled from 'styled-components';
import ChatMessagesContainer from "./ChatMessagesContainer";
import InputChat from './InputChat';

const ChatBox = styled.div `
  width: 70%;
  background-color: white;
  height: 80%;
  padding: 20px;
`;

const Header = styled.div `
  width: 100%;
  height: 8%;
  padding: 5px;
`
const TitleChat = styled.h1 `
  font-size: 18px;
  font-weight: 300;
`

class Chat extends Component {

  render() {

    return  (

    <ChatBox>
      <Header>
        <TitleChat> JOIN THE CONVERSATION </TitleChat>
      </Header>
      <ChatMessagesContainer />
      <InputChat />
    </ChatBox>
    )
  }

}

export default Chat;
