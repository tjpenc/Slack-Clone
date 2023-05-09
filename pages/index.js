import styled from 'styled-components';
import { useState } from 'react';
import Header from '../components/Header';
import User from '../components/User';
import SideBar from '../components/SideBar';
import LandingPage from '../components/LandingPage';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <HeaderContainer>
        <Header setSearchTerm={setSearchTerm} userObject={User} searchTerm={searchTerm} />
      </HeaderContainer>
      <ContentContainer>
        <SideBar />
        <LandingPage />
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
height: auto;
`;
