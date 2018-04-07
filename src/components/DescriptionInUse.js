import React, { Component } from 'react';
import styled from 'styled-components';
import { ExternalLink } from '../common';
import { PageTitle, DescriptionText } from './Styles';

const DescriptionContainer = styled.div `
  flex : 1;
  padding: 40px;
`;

const SquareGreen = styled.div `
  height: 15px;
  width: 15px;
  background: #42E79D;
`;

const SquarePink = styled.div `
  height: 15px;
  width: 15px;
  background: #FF7A7A;
  margin-top: 7vw;
`;

class DescriptionInUse extends Component {
  render() {
    return <DescriptionContainer>
      <SquareGreen />

        <DescriptionText>

          Stop letting advertising walled gardens manage your personal data.
        </DescriptionText>

        <DescriptionText>
          Sybil stores your identity on the Ethereum blockchain, where it can be shared across applications.<b> You're in control of your data, not the applications you use.</b>
        </DescriptionText>

        <DescriptionText>
          You can only have one Sybil profile per Ethereum address but you can create as many addresses you want–each for a different facet of yourself.
        </DescriptionText>

      <SquarePink />

      </DescriptionContainer>;
  }
}

export default DescriptionInUse;
