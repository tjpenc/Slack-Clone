import styled from 'styled-components';

export default function LandingPage() {
  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>Welcome to #Slack Clone!</h4>
        </HeaderLeft>
      </Header>
      <LandingPageContainer>
        <h1>Please Select a Chatroom</h1>
      </LandingPageContainer>
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

const LandingPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25vh;
`;
