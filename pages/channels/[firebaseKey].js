import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Chat from '../../components/Chat';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import User from '../../components/User';
import { getSingleChannel } from '../../api/channelData';

export default function ViewChatroom() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const { firebaseKey } = router.query;

  const [channel, setChannel] = useState({});

  useEffect(() => {
    getSingleChannel(firebaseKey).then(setChannel);
  }, [firebaseKey]);

  return (
    <>
      <HeaderContainer>
        <Header setSearchTerm={setSearchTerm} userObject={User} />
      </HeaderContainer>
      <ContentContainer>
        <SideBar />
        {console.warn(channel)}
        <Chat key={firebaseKey} channelData={channel} searchTerm={searchTerm} />
      </ContentContainer>
    </>
  );
}

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
