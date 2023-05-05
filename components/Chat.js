import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Message from './Message';
import ChatInput from './ChatInput';
import { getMessages } from '../api/messageData';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then(setMessages);
  }, []);

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
      <ChatMessages>
        {messages.map((message) => <Message key={message.firebaseKey} text={message.text} image={message.image} name={message.username} time={message.time} />)}
      </ChatMessages>
      <ChatInputContainer>
        <ChatInput setMessages={setMessages} />
      </ChatInputContainer>

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

const ChatMessages = styled.div``;

const ChatInputContainer = styled.div`
margin-top: 10px;
`;
