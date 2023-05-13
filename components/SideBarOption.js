import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { createChannel } from '../api/channelData';
import { useAuth } from '../utils/context/authContext';

function SideBarOption({
  Icon, title, addChannelOption, updateChannels,
}) {
  const { user } = useAuth();

  const addChannel = () => {
    const channelName = prompt('Please Enter Channel Name');
    const payload = { name: channelName, uid: user.uid };
    createChannel(payload).then(updateChannels);
  };

  const selectChannel = () => {

  };

  return (
    <SideBarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} /> }
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SideBarOptionChannel>
          <span>#</span> {title}
        </SideBarOptionChannel>
      )}
    </SideBarOptionContainer>
  );
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;
flex-grow: 1;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-size: 20px;
    font-weight: 500;
  }
  > h3 > span {
    font-size: 20px;
    padding: 15px;
  }
`;

const SideBarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;

`;

SideBarOption.propTypes = {
  Icon: PropTypes.string,
  title: PropTypes.string,
  addChannelOption: PropTypes.string,
  updateChannels: PropTypes.func,
}.isRequired;
