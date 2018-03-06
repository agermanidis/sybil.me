import React, { Component } from 'react';
import styled from 'styled-components';
import SybilIcon from '../images/sybil.png';


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

const SybilDiv = styled.div `
  flex: 1;
  padding: 15px 0 15px 33px;
`

const Sybil = styled.img `
  height: 20px;
  width: 20px;
`

class InputChat extends Component {
  state = {
    textInput: ''
  };

  render() {
    const { textInput } = this.state;
    const { onSubmit, connected, address } = this.props;
    let prompt = connected
      ? 'Say something!'
      : 'Connecting...';
    return  (
      <InputBox >
        <SybilDiv>
          <Sybil src={SybilIcon}  />
        </SybilDiv>
        <InputField 
          type="text" 
          placeholder={prompt}
          disabled={!connected}
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
