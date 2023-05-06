import styled from 'styled-components';
import { useState } from 'react';
import Header from '../components/Header';
import User from '../components/User';
import Chat from '../components/Chat';
import SideBar from '../components/SideBar';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <HeaderContainer>
        <Header setSearchTerm={setSearchTerm} userObject={User} />
      </HeaderContainer>
      <ContentContainer>
        <SideBar />
        <Chat searchTerm={searchTerm} />
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
