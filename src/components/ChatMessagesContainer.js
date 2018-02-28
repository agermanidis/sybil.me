import React, { Component } from 'react';
import styled from 'styled-components';
import ChatMessages from './ChatMessages';

const Container = styled.div `
  height: 84%;
  width: 100%;
  background-color: #f9f9f9;
  overflow-y: scroll

`

class ChatMessagesContainer extends Component {
  componentDidUpdate () {
    // this.scrollToBottom();
  }

  componentDidMount () {
    this.scrollToBottom();
  }

  scrollToBottom () {
    if (this._el) {
      this._el.scrollTop = this._el.scrollHeight;
    }
  }

  render() {

    return  (
      <Container innerRef={(el) => this._el = el}>
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >
        <ChatMessages / >

      </Container>
    )
  }

}

export default ChatMessagesContainer;
