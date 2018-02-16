import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle, DescriptionText } from './Styles';

const DescriptionContainer = styled.div `
  flex : 1;
  padding: 40px;
`;

class DescriptionInUse extends Component {
  render() {
    return <DescriptionContainer>
        <PageTitle>For Users</PageTitle>
        <DescriptionText>
          Set your profile once, use it everywhere.
        </DescriptionText>
        <DescriptionText>
          You're in control of your data, not the applications you use.
        </DescriptionText>
        <DescriptionText>
          You can only have one profile per Ethereum address—but you can create as many addresses you want.
        </DescriptionText>
      </DescriptionContainer>;
  }
}

export default DescriptionInUse;
