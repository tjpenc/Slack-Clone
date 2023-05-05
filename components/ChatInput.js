import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createMessage } from '../api/messageData';
import { useAuth } from '../utils/context/authContext';

const initialState = {
  channelId: '',
  firebaseKey: '',
  image: '',
  text: '',
  time: '',
  uid: '',
};

function ChatInput() {
  const [input, setInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...input,
      uid: user.uid,
      time: Date().toString(),
      channelId: 'channelId',
      firebaseKey: '',
      image: user.photoURL,
    };
    createMessage(payload).then(() => {
      router.push('/');
    });
    input.text = '';
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          type="text"
          value={input.text}
          onChange={handleChange}
          placeholder="Message #ROOM"
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
