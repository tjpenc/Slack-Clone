import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';
import { createMessage } from '../api/messageData';
import { useAuth } from '../utils/context/authContext';
import getMessagesByChannel from '../api/mergedData';

const initialState = {
  channelId: '',
  firebaseKey: '',
  image: '',
  username: '',
  text: '',
  time: '',
  uid: '',
  likes: 0,
};

function ChatInput({ setMessages, channelData }) {
  const [input, setInput] = useState(initialState);
  // const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateMessages = () => {
    getMessagesByChannel(channelData.firebaseKey).then((messages) => {
      setMessages(messages);
    });
  };

  useEffect(() => {
    updateMessages();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...input,
      uid: user.uid,
      time: Date().toString(),
      channelId: channelData.firebaseKey,
      firebaseKey: '',
      image: user.photoURL,
      username: user.displayName,
    };
    createMessage(payload).then(updateMessages);
    setInput((prevState) => ({
      ...prevState,
      text: '',
    }));
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          value={input.text}
          onChange={handleChange}
          placeholder={`Message # ${channelData.name}`}
          name="text"
          required
        />
        <Button hidden type="submit" onClick={handleSubmit}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

ChatInput.propTypes = {
  setMessages: PropTypes.func.isRequired,
  channelData: PropTypes.shape({
    firebaseKey: PropTypes.string,
    name: PropTypes.string,
    uid: PropTypes.string,
  }).isRequired,
};

const ChatInputContainer = styled.div`
border-radius: 20px;

> form {
    position: relative;
    display: flex;
    justify-content: center;
}

> form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}

> form > button {
    display: none !important;
}
`;
