import React from 'react';
import { ExternalLink } from '../common';

const joinOr = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr.slice(0, arr.length - 1).join(', ') + ' or ' + arr.slice(arr.length-1);
}

const WalletMessage = ({hasWeb3, hasWallet}) => {
    if (hasWeb3 && hasWallet) {
        return (
            <span>
              🦊 Ethereum wallet detected. Connected to mainnet.
            </span>
        )
    } else if (hasWeb3) {
        return <span>
            ⚠️ Ethereum wallet detected but current network is not supported. Switch to mainnet. Read-only.
          </span>;
    } else {
        return <span>
            ⚠️ No Ethereum wallet detected.
            {' '}
            <ExternalLink href="https://metamask.io">
              Install Metamask.
            </ExternalLink>{' '}
          </span>;
    }
}

export default WalletMessage;
