import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle, DescriptionText } from './Styles';

const DescriptionContainer = styled.div `
  flex : 1;
  // background-color: lightgrey;
  padding: 40px;
`;

class DescriptionCode extends Component {
  render() {
    return <DescriptionContainer>
        <PageTitle>For Dapp Developers</PageTitle>
        <DescriptionText>
          Integrate Sybil into your dapp in a few lines of code.
        </DescriptionText>
        <DescriptionText>
          No need to write custom code to maintain user profiles.
        </DescriptionText>
      </DescriptionContainer>;
  }
}

export default DescriptionCode;
