import React, { Component } from 'react';
import styled from 'styled-components';
import S from '../sybil';
import { ChatAvatar } from './Styles';

const InputBox = styled.div `
  display: flex;
  border-top: 1px solid #FF7A7A;
`

const InputField = styled.input `
  font-size: 16px;
  flex: 9;
  height: 25px;
  border: none;
  padding: 15px;
`

const MessageComposerIconContainer = styled.div `
  flex: 1;
  padding: 15px 0 15px 33px;
`


class InputChat extends Component {
  state = {
    textInput: '',
    avatar: null
  };

  async componentDidMount () {
    const { address } = this.props;
    if (address) {
      const user = S.of(address);
      const avatar = await user.avatar();
      this.setState({avatar});
    }
  }

  render() {
    const { textInput, avatar } = this.state;
    const { onSubmit, connected, address } = this.props;
    let prompt = !address 
      ? 'You need a Sybil profile to participate' 
      : (!connected 
        ? 'Connecting...'
        : 'Say something!');
    return  (
      <InputBox >
        {avatar && <MessageComposerIconContainer>
          <ChatAvatar src={avatar}  />
        </MessageComposerIconContainer>}
        <InputField 
          type="text" 
          placeholder={prompt}
          disabled={!connected || !address}
          value={textInput}
          onChange={(evt) => {
            this.setState({textInput: evt.target.value})
          }}
          onKeyPress={(evt) => {
            if (evt.key === 'Enter') {
              onSubmit(evt.target.value);
              this.setState({textInput: ''});
            }
          }} />
      </InputBox>
    )
  }

}

export default InputChat;
