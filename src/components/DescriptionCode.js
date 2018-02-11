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

class DescriptionCode extends Component {

  render() {
    return  <DescriptionContainer>
        <DescriptionTexts>
          Simple code
The smart contract powering Sybil is less than 100 lines of code. Simple contracts are more secure and easily auditable.
        </DescriptionTexts>

        <DescriptionTexts>
          	Simple integration
          Adding nicknames and pictures to the users of your dapp using the Sybil protocol can be done in a few minutes. We also provide various example dapps that use Sybil
        </DescriptionTexts>

      </DescriptionContainer>;
  }

}

export default DescriptionCode;
