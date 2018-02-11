import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import { ExternalLink } from '../common';

const ProfileContainer = styled.div `
  flex : 1;
  padding: 20px;

`

class Profile extends Component {

  render() {

    const { nickname, image, onNicknameChange, onDrop } = this.props;

    return  <ProfileContainer>
        <h1>Create your Sybil</h1>
        <p>Attach a nickname and picture to your Ethereum address.</p>
        <p>
          The picture will be stored on <ExternalLink href="https://ipfs.io/">
            IPFS
          </ExternalLink>, a decentralized storage network.
        </p>

        <Avatar
          image={image}
          onDrop={onDrop} />

        <p>
          <input onChange={onNicknameChange} type="text" placeholder="nickname" value={nickname} />
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
