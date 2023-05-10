import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { deleteMessage } from '../api/messageData';

export default function Message({
  firebaseKey, text, image, name, time, onUpdate,
}) {
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
      </MessageInfo>
      <MenuButton>
        <button type="button" onClick={() => deleteThisMessage()}>⋮</button>
      </MenuButton>
    </MessageContainer>
  );
}

Message.propTypes = {
  firebaseKey: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
};

Message.defaultProps = {
  firebaseKey: '',
  text: 'This is default text',
  image: 'image',
  name: 'name',
  time: 'time',
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
