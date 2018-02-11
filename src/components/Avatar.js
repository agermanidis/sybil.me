import React, { Component } from 'react';
import Dropzone from "react-dropzone";
import styled from 'styled-components';
import FaFileImageO from "react-icons/lib/fa/file-image-o";
import FaEdit from 'react-icons/lib/fa/edit';

const AvatarDropzone = styled(Dropzone)`
  border-radius: 50%;
  border: 1px dashed gray;
  width: 200px;
  height: 200px;
  margin: 2em auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-size: contain;
  color: gray;

  &:hover {
    opacity: ${props => props.hasImage ? 0.8 : 1};
  }
`;


class Avatar extends Component {
  render () {
    const { image, onChange, onDrop } = this.props;
    return <div>
      <AvatarDropzone style={{ backgroundImage: `url(${image})` }} accept="image/*" onDrop={onDrop}>
          {!image && <div>
              <FaFileImageO /> Upload picture
            </div>}
      </AvatarDropzone>
    </div>;
  }
}

export default Avatar;
