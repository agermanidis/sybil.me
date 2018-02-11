import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';

const DescriptionContainer = styled.div `
  flex : 1;
  // background-color: lightgrey;
  padding: 40px;

`
const DescriptionTexts = styled.p `
  font-size: 2rem;
  width: 85%;
  padding-top: 2rem;

`

class DescriptionInUse extends Component {

  render() {
    return  <DescriptionContainer>
        <DescriptionTexts>
          No unique nicknames
        You should be called by any name you wish to be called. That's why your Sybil nickname is not unique, meaning that any number of people can share the same nickname.
        </DescriptionTexts>
        <DescriptionTexts>

          	No real names
          We call it it "nickname" instead of "name" and "avatar" instead of "profile picture" because we want to encourage you not to use your legal name or an actual photo, as it more easily makes you subject to surveillance by states and corporations.        </DescriptionTexts>

      </DescriptionContainer>;
  }

}

export default DescriptionInUse;
