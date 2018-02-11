import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Avatar from './Avatar';
import { ExternalLink } from '../common';
import AvatarImage from '../images/avatar.png';

const words = ['the first sentence', 'the second sentence'];

const ProfileContainer = styled.div `
  flex : 1;
  padding-top: 20vh;
  background-color: #F6F6F6;
  text-align: center;
  color: #414141;
  font-size: 0.8rem;
  height: 100vh;
`

const blink = keyframes`
  from, to {
    color: transparent;
  }

  50% {
    color: #808080;
  }
`;

const BlinkingSpan = styled.span `
  font-size: 24px;
  color: #808080;
  position: relative;
  right: 36px;
  -webkit-animation: 1s ${blink} step-end infinite;
  -moz-animation: 1s ${blink} step-end infinite;
  -ms-animation: 1s ${blink} step-end infinite;
  -o-animation: 1s ${blink} step-end infinite;
  animation: 1s ${blink} step-end infinite;
`

const NicknameInput = styled.input`
  border: none;
  background-color: #f6f6f6;
  font-size: 19px;
  text-align: center;
  text-transform: capitalize;
  caret-color: #808080;
`;

class Profile extends Component {

  render() {

    const { nickname, image, onNicknameChange, onDrop } = this.props;

    return  <ProfileContainer>
        <p>Drag and Drop your Image.</p>

        <img src={AvatarImage} />

        { /*  <Avatar
          image={image}
          onDrop={onDrop} /> */}
        <p>Add your Nickname</p>
        <p>

          <NicknameInput onChange={onNicknameChange}
            type="text"
            placeholder="Purple Elephant"
            onfocus="this.placeholder = ''"
            onblur="this.placeholder = 'enter your text'"
            value={nickname} />

          <BlinkingSpan > | </BlinkingSpan>
        </p>

        {/*<WithPendingTransaction web3={this.props.web3} successMsg={"Updated profile."} failMsg={"Failed to update profile"} transaction={pendingTx} onFinish={this.refreshDapp.bind(this)}>
          <button disabled={!this.props.isNetworkSupported || !name} onClick={this.save.bind(this)}>
            Save Information
          </button>
        </WithPendingTransaction>*/}
      </ProfileContainer>;

  }

}

export default Profile;
