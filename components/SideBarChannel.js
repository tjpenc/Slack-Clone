import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

function SideBarChannel({ channelData }) {
  return (
    <SideBarChannelContainer>
      <SideBarChannelChannel>
        <Link href={`/channels/${channelData.firebaseKey}`} passHref>
          <p># {channelData.name}</p>
        </Link>
      </SideBarChannelChannel>
    </SideBarChannelContainer>
  );
}

export default SideBarChannel;

const SideBarChannelContainer = styled.div`
display: flex;
font-size: 12px;
align-items: center;
padding-left: 2px;
cursor: pointer;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SideBarChannelChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;

`;

SideBarChannel.propTypes = {
  channelData: PropTypes.shape({
    name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
}.isRequired;
