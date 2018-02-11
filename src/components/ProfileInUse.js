import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import Dwritter from '../images/dwritter.png';

const ProfileInUseContainer = styled.div `
  flex : 1;
  background-color: #838383;
  color: #414141;
  font-size: 0.8rem;
  height: 100vh;
  padding-top: 8vh;
  overflow-x: hidden;

`

const SocialImage = styled.img `

  right: -60px;
  position: relative;

`

class ProfileInUse extends Component {

  render() {


    return  <ProfileInUseContainer>

      <SocialImage src={Dwritter} />


    </ProfileInUseContainer>;

  }

}

export default ProfileInUse;
