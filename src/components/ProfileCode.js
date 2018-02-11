import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';

const ProfileCodeContainer = styled.div `
  flex : 1;
  padding: 20px;
  background-color: #000000;
  text-align: center;
  color: white;
  font-size: 1rem;
  height: 100vh;

`

class ProfileCode extends Component {

  render() {


    return  <ProfileCodeContainer>

      <p>
        import Sybil from 'sybil';

// initialize Sybil using the default contract address
const S = new Sybil(web3);

// get the nickname associated with an address
S.nickname.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

// get the avatar URL associated with an address
S.avatar.of('0x02f807d30DcA3bAb5C5b010F5D9a05e4876dcaB8');

      </p>

    </ProfileCodeContainer>;

  }

}

export default ProfileCode;
