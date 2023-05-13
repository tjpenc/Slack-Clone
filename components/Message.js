import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import {
  updateMessageLikes, deleteMessage, getSingleMessage, updateMessage,
} from '../api/messageData';

export default function Message({
  text, image, userName, time, likes, firebaseKey, onUpdate, edited,
}) {
  const initialState = {
    text,
  };

  const [likeCount, setLikeCount] = useState(likes);
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState(initialState);
  const [showMenu, setShowMenu] = useState(false);

  const handleLike = () => {
    updateMessageLikes({
      firebaseKey,
      likes: likeCount + 1,
    });
    setLikeCount((prevState) => prevState + 1);
    getSingleMessage(firebaseKey).then((message) => setLikeCount(message.likes));
  };

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  const deleteThisMessage = () => {
    deleteMessage(firebaseKey).then(() => onUpdate());
  };

  const toggleEditing = () => {
    setEditing((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...input,
      firebaseKey,
      edited: true,
    };
    updateMessage(payload).then(() => onUpdate());
    setEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MessageContainer>
      <Card.Img variant="top" src={image} alt="image" style={{ height: '50px', width: '50px' }} />
      <MessageInfo>
        <h4>
          {userName}<span> {time}</span>
        </h4>
        {!editing ? <p>{!edited ? text : `${text} (edited)`}</p> : (
          <form>
            <input
              type="text"
              value={input.text}
              onChange={handleChange}
              name="text"
              required
            />
            <Button hidden type="submit" onClick={handleSubmit}>
              SEND
            </Button>
          </form>
        )}
        <button type="button" onClick={handleLike}>Like</button>
        <p>{likeCount}</p>
      </MessageInfo>
      <MenuButton onClick={toggleMenu}>⋮</MenuButton>
      {showMenu ? (
        <OptionsMenu>
          <ul>
            <OptionItem onClick={deleteThisMessage}>Delete</OptionItem>
            <OptionItem onClick={toggleEditing}>
              Edit
            </OptionItem>
          </ul>
        </OptionsMenu>
      ) : ''}
    </MessageContainer>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  userName: PropTypes.string,
  time: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  likes: PropTypes.number,
  firebaseKey: PropTypes.string.isRequired,
  edited: PropTypes.bool,
};

Message.defaultProps = {
  text: 'This is default text',
  image: 'image',
  userName: 'userName',
  time: 'time',
  likes: 0,
  edited: false,
};

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  font-size: 15px;

  > h4 {
    font-size: 20px;
  }

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
`;

const OptionsMenu = styled.div`
  position: relative;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 3px;
`;

const OptionItem = styled.h6`
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  padding-right: 10px;
  padding-bottom: 3px;

  &:last-child {
    border-bottom: none;
  }
`;
