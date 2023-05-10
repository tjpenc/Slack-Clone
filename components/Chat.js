import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Proptypes from 'prop-types';
import Message from './Message';
import ChatInput from './ChatInput';
import getMessagesByChannel from '../api/mergedData';

export default function Chat({ searchTerm, channelData }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessagesByChannel(channelData.firebaseKey).then(setMessages);
  }, [channelData.firebaseKey]);

  const filteredMessages = useMemo(() => messages.filter((message) => {
    const messageContent = message.text.toLowerCase();
    return messageContent.includes(searchTerm.toLowerCase());
  }), [messages, searchTerm]);

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4># {channelData.name}</h4>
        </HeaderLeft>
        <HeaderRight>
          <p>Details</p>
        </HeaderRight>
      </Header>
      <ChatMessages>
        {filteredMessages?.map((message) => (
          <Message
            key={message.firebaseKey}
            text={message.text}
            image={message.image}
            name={message.username}
            time={message.time}
            likes={message.likes}
            firebaseKey={message.firebaseKey}
          />
        ))}
      </ChatMessages>
      <ChatInputContainer>
        <ChatInput setMessages={setMessages} channelData={channelData} />
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

Chat.propTypes = {
  searchTerm: Proptypes.string,
  channelData: Proptypes.shape({
    firebaseKey: Proptypes.string,
    name: Proptypes.string,
    uid: Proptypes.string,
  }),
};

Chat.defaultProps = {
  searchTerm: '',
  channelData: {
    firebaseKey: 'firebaseKey',
    name: 'channel name',
    uid: 'UID',
  },
};
