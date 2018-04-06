import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import styled from 'styled-components';
import FaFileImageO from "react-icons/lib/fa/file-image-o";
import FaEdit from 'react-icons/lib/fa/edit';
import FaCloudUpload from "react-icons/lib/fa/cloud-upload";

const AvatarDropzone = styled(Dropzone)`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 2em auto;
  // display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-size: contain;
  color: gray;

  // background-image: ${props => `url(${props.image})`};
  // padding: ${props => !props.dragOver && "1px"}
  background-repeat: no-repeat;


  &:hover {
    // opacity: ${props => (props.hasImage ? 0.8 : 1)};
    // opacity: 0.7;
    // filter: blur(5px);
  }
`;

const AvatarImage = styled.img`
  ${props => props.dragOver && "opacity: 0.25; "};
`;

const DropText = styled.h2`
  position: absolute;
  width: 100%;
  top: 100px;
`;

class Avatar extends Component {
  state = {
    dragOver: false
  };

  async onDragOver () {
    this.setState({dragOver: true});
  }

  async onDragLeave () {
    this.setState({dragOver: false});
  }

  render () {
    const { dragOver, imageInput } = this.state;
    const { image, onChange, onDrop } = this.props;
    return <div>
      <AvatarDropzone 
        dragOver={dragOver}
        accept="image/*" 
        onDrop={onDrop}
        onMouseOver={this.onDragOver.bind(this)}
        onMouseLeave={this.onDragLeave.bind(this)}
        onDragOver={this.onDragOver.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
        >
          <AvatarImage dragOver={dragOver} src={imageInput||image} width={300} height={300} />
          {dragOver && <DropText><FaCloudUpload/> Upload Image to IPFS</DropText>}
      </AvatarDropzone>
    </div>;
  }
}

export default Avatar;
