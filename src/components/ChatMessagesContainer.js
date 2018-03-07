import React, { Component } from 'react';
import styled from 'styled-components';
import ChatMessage from './ChatMessage';

const Container = styled.div `
  height: 84%;
  width: 100%;
  background-color: #f9f9f9;
  overflow-y: scroll

`

class ChatMessagesContainer extends Component {

  componentDidUpdate() {
    this.scrollToBottom();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    if (this._el) {
      this._el.scrollTop = this._el.scrollHeight;
    }
  }

  render() {
    const { messages } = this.props;
    return (
      <Container innerRef={el => (this._el = el)}>
        {messages.map((msg, index) => (
          <ChatMessage 
            key={msg.id} 
            address={msg.address}
            content={msg.content} />
        ))}
      </Container>
    );
  }
}

export default ChatMessagesContainer;
