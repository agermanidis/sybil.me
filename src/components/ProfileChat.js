import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import Chat from './Chat';
import { PageTitle } from './Styles';
import dot from '../images/dot.png';

const ProfileChatBox = styled.div `
  display: flex;
  flex-direction: column;
  background-image: url(${dot});
  background-color: #282a36;
  flex : 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

class ProfileChat extends Component {
  render() {
    const { web3, address, isNetworkSupported } = this.props;
    return  (
      <ProfileChatBox>
        <h3 style={{color: 'white'}}>Example Sybil App: Chatroom w/ IPFS PubSub</h3>
        <Chat
          address={address}
          isNetworkSupported={isNetworkSupported}
          web3={web3} />
      </ProfileChatBox>
    )
  }

}

export default ProfileChat;
