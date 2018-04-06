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
        <DescriptionText>
          Let's stop letting advertising walled gardens manage our personal data.
        </DescriptionText>

        <DescriptionText>
          Sybil stores your identity on the Ethereum blockchain, where it can be shared across applications.<b> You're in control of your data, not the applications you use.</b>
        </DescriptionText>
        
        <DescriptionText>
          You can only have one Sybil profile per Ethereum address but you can create as many addresses you want–each for a different facet of yourself.
        </DescriptionText>
      </DescriptionContainer>;
  }
}

export default DescriptionInUse;
