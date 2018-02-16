import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import styled from 'styled-components';
import FaFileImageO from "react-icons/lib/fa/file-image-o";
import FaEdit from 'react-icons/lib/fa/edit';
import MdFileDownload from 'react-icons/lib/md/file-download';

const AvatarDropzone = styled(Dropzone)`
  width: 400px;
  height: 400px;
  margin: 2em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-size: contain;
  color: gray;
  background-image: ${props => props.dragOver || `url(${props.image})`};
  // border: ${props => props.dragOver ? '1px dashed gray' : '0px solid transparent'};
  padding: ${props => !props.dragOver && '1px'}
  background-repeat: no-repeat;


  &:hover {
    // opacity: ${props => props.hasImage ? 0.8 : 1};
    opacity: 0.7;
  }
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
    const { dragOver } = this.state;
    const { image, onChange, onDrop } = this.props;
    return <div>
      <AvatarDropzone 
        image={image}
        dragOver={dragOver}
        accept="image/*" 
        onDrop={onDrop}
        onMouseOver={this.onDragOver.bind(this)}
        onMouseLeave={this.onDragLeave.bind(this)}
        onDragOver={this.onDragOver.bind(this)}
        onDragLeave={this.onDragLeave.bind(this)}
        >
          {dragOver && <h1><MdFileDownload/> Drop here</h1>}
          {!image && !dragOver &&  <div>
              <FaFileImageO /> Upload picture
            </div>}
      </AvatarDropzone>
    </div>;
  }
}

export default Avatar;
