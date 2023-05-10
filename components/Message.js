import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { updateMessageLikes, deleteMessage } from '../api/messageData';

export default function Message({
  text, image, name, time, likes, firebaseKey, onUpdate,
}) {
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    updateMessageLikes({
      firebaseKey,
      likes: likeCount + 1,
    });
    setLikeCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    setLikeCount(likes);
  }, [likes]);

  const deleteThisMessage = () => {
    deleteMessage(firebaseKey).then(() => onUpdate());
  };

  return (
    <MessageContainer>
      <Card.Img variant="top" src={image} alt="image" style={{ height: '50px', width: '50px' }} />
      <MessageInfo>
        <h4>
          {name}<span> {time}</span>
        </h4>
        <p>{text}</p>
        <button type="button" onClick={handleLike}>Like</button>
        <p>{likeCount}</p>
      </MessageInfo>
      <MenuButton>
        <button type="button" onClick={() => deleteThisMessage()}>⋮</button>
      </MenuButton>
    </MessageContainer>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  likes: PropTypes.number,
  firebaseKey: PropTypes.string.isRequired,
};

Message.defaultProps = {
  text: 'This is default text',
  image: 'image',
  name: 'name',
  time: 'time',
  likes: 0,
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

const MenuButton = styled.div`
  background-color: transparent;
  border: none;
  color: #666;
  font-size: 24px;
  cursor: pointer;
`;
