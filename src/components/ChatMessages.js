import React, { Component } from 'react';
import styled from 'styled-components';
import SybilIcon from '../images/sybil.png';

const MessagesBox = styled.div `
  max-height: 10%;
  padding: 25px;
  word-break: keep-all;
  display: flex;
`

const Message = styled.p `
  font-size: 20px;
  flex: 9;
  margin: 0 0 0 21px;
`

const SybilDiv = styled.div `
  flex: 1;

`

const Sybil = styled.img `
  height: 35px;
  width: 35px;
`

class ChatMessages extends Component {

  render() {

    return  (

    <MessagesBox>
      <SybilDiv>
        <Sybil src={SybilIcon}  />
      </SybilDiv>

      <Message>
        Integrate Sybil into your Ðapp in a few lines of code. No need to write custom code to maintain user profiles.
      </Message>
    </MessagesBox>
    )
  }

}

export default ChatMessages;
