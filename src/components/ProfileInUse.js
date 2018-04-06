import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import Apps from './AppsImage';

const ProfileInUseContainer = styled.div `
  flex : 1;
  background-color: #838383;
  color: #414141;
  font-size: 0.8rem;
  height: 100vh;
  padding-top: 8vh;
  overflow-x: hidden;
`;

const SocialImage = styled.img `
  right: -70px;
  position: relative;
  height: 87vh;
`;

class ProfileInUse extends Component {
  render() {
    return <ProfileInUseContainer>
       {/* <SocialImage src={Apps} /> */}
       <Apps/>
     </ProfileInUseContainer>;
  }
}

export default ProfileInUse;
