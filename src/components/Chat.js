import React, { Component } from 'react';
import styled from 'styled-components';
import ChatMessagesContainer from "./ChatMessagesContainer";
import InputChat from './InputChat';
import IPFS from "ipfs";
import Room from "ipfs-pubsub-room";
import uuid from "uuid";
import moment from "moment";
import update from 'immutability-helper';

const ChatBox = styled.div `
  width: 70%;
  background-color: white;
  height: 70%;
  padding: 20px;
`;

const Header = styled.div `
  width: 100%;
  height: 8%;
  padding: 5px;
`
const TitleChat = styled.h1 `
  font-size: 18px;
  font-weight: 300;
`;

const TitleSmall = styled.span`
  font-size: 13px;
  color: gray;
`;

class Chat extends Component {
  state = {
    messages: [],
    nPeers: 0,
    room: null,
    connected: false
  };

  messageExists(msg) {
    return !!this.state.messages.find(m => m.id === msg.id);
  }

  setupChatroom() {
    const ipfs = new IPFS({
      repo: "/sybil.me" + Math.random(),
      EXPERIMENTAL: {
        pubsub: true
      },
      config: {
        Addresses: {
          Swarm: [
            "/dns4/wrtc-star.discovery.libp2p.io/tcp/443/wss/p2p-webrtc-star"
          ]
        }
      }
    });

    ipfs.on("ready", async () => {
      console.log('connected to ipfs');

      const room = Room(ipfs, "sybil.me-chatroom");
      this.setState({ room });

      room.on("peer joined", async (peer) => {
        this.setState({ nPeers: this.state.nPeers + 1 });
        room.broadcast(JSON.stringify(this.state.messages));
      });

      room.on("peer left", peer => {
        this.setState({ nPeers: this.state.nPeers - 1 });
      });

      room.on("subscribed", () => {
        this.setState({connected: true});
      });

      room.on("message", async (serialized) => {
        for (const msg of JSON.parse(serialized.data.toString())) {
          // check existing
          if (this.messageExists(msg)) return;
          // verify player
          const verified = await this.verifyMessage(msg);
          if (!verified) return;
          // push message to view
          this.addMessage(msg);
        }
      });
    });
  }

  addMessage (msg) {
    this.setState(update(this.state, { messages: { $push: [msg] } }));
  }

  async verifyMessage(msg) {
    const { web3 } = this.props;
    const { address } = msg;
    try {
      const recovered = await web3.eth.personal.ecRecover(msg.content, msg.signature);
      return address.toLowerCase() === recovered.toLowerCase();
    } catch(e) {
      return true;
    }
  }

  componentDidMount () {
    this.setupChatroom();
  }

  async submitMessage(content) {
    const { web3, address } = this.props;
    const { room } = this.state;
    const msg = {
      id: uuid(),
      content: content,
      signature: await web3.eth.personal.sign(content, address),
      time: new Date().toString(),
      address
    };
    this.addMessage(msg);
    room.broadcast(JSON.stringify([msg]));
  }

  render() {
    const { 
      messages,
      nPeers,
      connected
    } = this.state;
    const {
      address,
      isNetworkSupported
    } = this.props;
    return <ChatBox>
        <Header>
          <TitleChat>
            JOIN THE CONVERSATION 
            {' '}
            {
              connected
              ? <TitleSmall>({nPeers} peers online)</TitleSmall>
              : <TitleSmall>(connecting to IPFS...)</TitleSmall>
            }
          </TitleChat>
        </Header>
        <ChatMessagesContainer messages={messages} />
        <InputChat 
          address={address}
          connected={connected}
          onSubmit={this.submitMessage.bind(this)} />
      </ChatBox>;
  }
}

export default Chat;
