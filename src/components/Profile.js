import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Avatar from './Avatar';
import { ExternalLink, getEtherscanAddressUrl } from '../common';
import { ScaleLoader } from 'react-spinners';
import ProfileExample from '../images/ProfileExample.png';
import S from '../sybil'
import FaExclamationTriangle from 'react-icons/lib/fa/exclamation-triangle';

const ProfileContainer = styled.div `
  flex : 1;
  padding-top: 10vh;
  background-color: #F6F6F6;
  text-align: center;
  color: #414141;
  font-size: 0.8rem;
  height: 100vh;
`;

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
`;

const NicknameInput = styled.input`
  border: none;
  background-color: #f6f6f6;
  font-size: 19px;
  text-align: center;
  caret-color: #808080;
  padding-bottom: 0.5em;
  border-bottom: 1px dashed black;
`;

const AddText = styled.p`
  font-size: 1.5em;
`;

const SaveButton = styled.button`
  background: none;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  margin: 1em;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  };
`;

const Space = ({size}) => <div style={{marginTop: size}} />

class Profile extends Component {
  state = {
    avatar: null,
    nickname: '',
    nicknameInput: '',
    avatarInput: null,
    loading: false,
    errored: false,
    completed: false
  };

  async componentDidMount () {
    await this.refresh();
  }

  async refresh () {
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

  setStateAsync(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  async onDrop(files) {
    if (files.length === 0) return;
    this.setState({
      completed: false,
      avatarInput: files[0],
    });
  }

  async saveNickname () {
    await this.setStateAsync({loading: true, errored: false});
    const account = S.of(this.props.address)
    try {
      if (this.state.nickname !== this.state.nicknameInput) {
        await account.set('nickname', this.state.nicknameInput);
      } 
      if (this.state.avatar !== this.state.avatarInput) {
        await account.setWithIPFS('avatar', this.state.avatarInput);
      } 
    } catch (e) {
      console.log(e.toString());
      await this.setStateAsync({errored: true});
    }
    await this.refresh();
    await this.setStateAsync({loading: false, avatarInput: null, completed: true});
  }

  render() {
    let { address } = this.props;
    const { loading, errored, avatarInput, avatar, completed } = this.state;
    
    return <ProfileContainer>
        {/* <p>Drag and Drop your Image.</p> */}
        {/* <img src={image} /> */}
        {/* <h2>Your Sybil profile:</h2> */}
        {avatar
        ? <div>
        <AddText>Your Ethereum address is</AddText>
        <p>
          <a target='_blank' style={{ color: "#09096d", textDecoration: "none" }} href={getEtherscanAddressUrl(address)}>
            {address}
          </a>
        </p>
        <AddText>
          Set your <b>Avatar</b>
        </AddText>
        <Avatar onDrop={this.onDrop.bind(this)} image={avatarInput ? URL.createObjectURL(avatarInput) : avatar} />
        {/* <Space size={'5em'} /> */}
        <AddText>
          Set your <b>Nickname</b>
        </AddText>
        <p>
          <NicknameInput onChange={(evt) => {
            this.setState({nicknameInput: evt.target.value, completed: false});
          }} 
            type="text" 
            placeholder='Enter a nickname' 
            value={this.state.nicknameInput} />
        </p>
        {
          loading
          ? <div style={{margin: '2em'}}><ScaleLoader color='gray' /></div>
          : <SaveButton 
              disabled={
                this.state.nickname === this.state.nicknameInput && 
                this.state.avatarInput === null
              }
              onClick={this.saveNickname.bind(this)}>Save</SaveButton>
        }
        {errored 
          && 
          <div style={{color: '#ff1f1f'}}>Error completing the transaction.</div>
        }
        {loading 
          && 
          <div>Waiting for transaction...</div>
        }
        {completed 
          && 
          <div>Transaction completed.</div>
        }

        </div>
        : <div style={{position: 'relative'}}>
          <div style={{position: 'absolute', top: '10vh', padding: '10vw'}}>
            <div style={{fontSize: '40px'}}><FaExclamationTriangle/></div>
            <h2>You need to use an Ethereum wallet (such as <a target='_blank' href='https://metamask.io/'>Metamask</a>) and connect to the Ropsten network to set your profile.</h2>
          </div>
          <img 
            style={{height: '80vh', filter: 'blur(2px)', opacity: 0.15}} 
            src={ProfileExample}/>
          </div>}

      </ProfileContainer>;
  }
}

export default Profile;
