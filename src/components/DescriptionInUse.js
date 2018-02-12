import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle } from './Styles';

const DescriptionContainer = styled.div `
  flex : 1;
  padding: 40px;
`;

const DescriptionTexts = styled.p `
  font-size: 2rem;
  width: 85%;
  padding-top: 2rem;
`;

class DescriptionInUse extends Component {
  render() {
    return <DescriptionContainer>
        <PageTitle>For Users</PageTitle>
        <DescriptionTexts>
          Set your profile once, use it everywhere.
        </DescriptionTexts>
        <DescriptionTexts>
          You're in control of your data, not the applications you use.
        </DescriptionTexts>
      </DescriptionContainer>;
  }
}

export default DescriptionInUse;
