import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import Apps from './AppsImage';
import dot from '../images/dot.png';

const ProfileInUseContainer = styled.div `
  flex : 1;
  background-image: url(${dot});
  background-color: #efe9e0;
  color: #414141;
  font-size: 0.8rem;
  height: 92vh;
  padding-top: 8vh;
  overflow-x: hidden;
  position: relative;
`;

const SocialImage = styled.img `
  right: 0px;
  position: absolute;
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
