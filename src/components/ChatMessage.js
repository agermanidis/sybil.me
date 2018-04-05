import React, { Component } from 'react';
import styled from 'styled-components';
import SybilIcon from '../images/sybil.png';
import S from '../sybil';

const MessagesBox = styled.div `
  max-height: 10%;
  padding: 10px;
  word-break: keep-all;
  display: flex;
`

const Message = styled.p `
  font-size: 20px;
  flex: 9;
  margin: 0 0 0 21px;
`

const User = styled.span `
  font-size: 20px;
  font-weight:bold;
  margin-right: 5px;
`

const SybilDiv = styled.div `
  flex: 1;

`

const Sybil = styled.img `
  height: 35px;
  width: 35px;
`

class ChatMessage extends Component {
  state = {
    avatar: null,
    nickname: null
  };

  async componentDidMount () {
    const account = S.of(this.props.address);
    const avatar = await account.avatar();
    const nickname = await account.nickname();
    this.setState({avatar, nickname});
  }

  render() {
    const { address, content } = this.props;
    return <MessagesBox>
        <SybilDiv>
          <Sybil src={address} />
        </SybilDiv>
        <Message>
          <User>{this.state.nickname}:</User>
          {content}
        </Message>
      </MessagesBox>;
  }

}

export default ChatMessage;
