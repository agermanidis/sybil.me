import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle } from './Styles';

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

class DescriptionCode extends Component {
  render() {
    return  <DescriptionContainer>
        <PageTitle>For Dapp Developers</PageTitle>
        <DescriptionTexts>
          Integrate Sybil to your app in a few lines of code.
        </DescriptionTexts>
      </DescriptionContainer>;
  }
}

export default DescriptionCode;
