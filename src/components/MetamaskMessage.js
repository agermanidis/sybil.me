import React from 'react';
import { ExternalLink } from '../common';

const joinOr = (arr) => {
    if (arr.length === 1) return arr[0];
    return arr.slice(0, arr.length - 1).join(', ') + ' or ' + arr.slice(arr.length-1);
}

const MetamaskMessage = ({hasWeb3, isNetworkSupported}) => {
    if (hasWeb3 && isNetworkSupported) {
        return (
            <span>
                Metamask detected. Connected to mainnet.
            </span>
        )
    } else if (hasWeb3) {
        return <span>
            Metamask detected but current network is not supported. Switch to mainnet. Read-only.
          </span>;
    } else {
        return <span>
            No <ExternalLink href="https://metamask.io/">
              Metamask
            </ExternalLink> detected.{' '}
            <ExternalLink href="https://www.youtube.com/watch?v=6Gf_kRE4MJU">
              Install it here.
            </ExternalLink>{' '}
          </span>;
    }
}

export default MetamaskMessage;
