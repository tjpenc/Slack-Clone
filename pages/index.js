import styled from 'styled-components';
import Header from '../components/Header';
import User from '../components/User';
import Chat from '../components/Chat';
import SideBar from '../components/SideBar';

function Home() {
  return (
    <>
      <HeaderContainer>
        <Header userObject={User} />
      </HeaderContainer>
      <ContentContainer>
        <SideBar />
        <Chat />
      </ContentContainer>
    </>
  );
}

export default Home;

const HeaderContainer = styled.div`
display: flex;
position: fixed;
top: 20px;
left: 0;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: white;
`;

const ContentContainer = styled.div`
display: flex;
height: 100vh;
`;
