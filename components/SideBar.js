import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
// import { useCollection } from 'react-firebase-hooks/firestore';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import AddIcon from '@material-ui/icons/Add';
import SideBarOption from './SideBarOption';
import SideBarChannel from './SideBarChannel';
import { useAuth } from '../utils/context/authContext';
// import { clientCredentials } from '../utils/client';
import { getChannels } from '../api/channelData';

function SideBar() {
  const [channels, setChannels] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    getChannels().then(setChannels);
  }, []);

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>

      <SideBarOption Icon={InsertCommentIcon} title="Threads" />
      <SideBarOption Icon={InboxIcon} title="Mentions & Reactions" />
      <SideBarOption Icon={DraftsIcon} title="Saved Items" />
      <SideBarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
      <SideBarOption Icon={PeopleAltIcon} title="People & User Groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={FileCopyIcon} title="File Browser" />
      <SideBarOption Icon={ExpandLessIcon} title="Show Less" />
      <hr />
      <SideBarOption Icon={ExpandMoreIcon} title="Show More" />
      <hr />
      <SideBarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.map((channel) => (
        <SideBarChannel key={channel.firebaseKey} channelData={channel} />
      ))}
    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: #611f69;
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 400px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;  

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
flex: 1;

> h2 {
  font-size:15px;
  font-weight: 900;
  margin-bottom: 5px;
}

> h3 {
  display: flex;
  font-size: 13px;
  font-weight: 400;
  align-items: center;
}
> h3 > .MuiSvgIcon-root {
  font-size: 14px;
  margin-top: 1px;
  margin-right: 2px;
  color: green;
}
`;
