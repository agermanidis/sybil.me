import React, { Component } from 'react';
import styled from 'styled-components';
import S from '../sybil';
import { ChatAvatar } from './Styles';

const MessagesBox = styled.div `
  max-height: 10%;
  padding: 10px;
  word-break: keep-all;
  display: flex;
`;

const Message = styled.p `
  font-size: 20px;
  flex: 9;
  margin: 0 0 0 21px;
`;

const User = styled.span `
  font-size: 20px;
  font-weight:bold;
  margin-right: 5px;
`;

const SybilDiv = styled.div `
  flex: 1;
`;

class ChatMessage extends Component {
  state = {
    avatar: null,
    nickname: null,
    hasAddress: false
  };

  async componentDidMount () {
    const { address } = this.props;
    if (address) {
      const user = S.of(this.props.address);
      try {
        const avatar = await user.avatar();
        const nickname = await user.nickname();
        this.setState({avatar, nickname, address});
      } catch (e) {
      }
    }
  }

  render() {
    const { address, content } = this.props;
    const { avatar } = this.state;
    return <MessagesBox>
        <SybilDiv>
          <ChatAvatar src={avatar} />
        </SybilDiv>
        <Message>
          <User>{this.state.nickname}:</User>
          {content}
        </Message>
      </MessagesBox>;
  }

}

export default ChatMessage;
