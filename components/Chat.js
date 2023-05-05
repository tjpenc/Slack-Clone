import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';
import { useAuth } from '../utils/context/authContext';
import { clientCredentials } from '../utils/client';

const axios = require('axios');

const url = clientCredentials.databaseURL;

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const getMessages = () => new Promise((resolve, reject) => {
    axios.get(`${url}/messages.json`)
      .then((response) => (response.data))
      .then((data) => resolve(Object.values(data)))
      .catch(reject);
  });

  useEffect(() => {
    getMessages().then(setMessages);
  }, []);

  const { user } = useAuth();

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>#Channel Name</h4>
        </HeaderLeft>
        <HeaderRight>
          <p>Details</p>
        </HeaderRight>
      </Header>
      {messages.map((message) => <Message key={message.firebaseKey} text={message.text} image={user.photoURL} name={user.displayName} time={message.time} />)}

    </ChatContainer>
  );
}

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  margin-top: 60px;
  overflow-y: scroll;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const HeaderLeft = styled.div`
display: flex;
  
> h4 {
  display: flex;
  text-transform: lowercase;
}
`;

const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;
