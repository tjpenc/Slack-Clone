import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useAuth } from '../utils/context/authContext';

function Header() {
  const { user } = useAuth();
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar src={user.photoURL} />
      </HeaderLeft>

      <HeaderSearch><input placeholder="Search Messages" /></HeaderSearch>

      <HeaderRight>
        <HeaderStatus />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  background-color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  align-items: center;
  padding: 0 50px;
  border-radius: 999px;
  background-color: whitesmoke;
  border: 1px solid gray;
  > input {
    border: none;
    width: 100%;
    background-color: transparent;
    outline: 0;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const HeaderAvatar = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
`;

const HeaderStatus = styled.div``;

Header.propTypes = {
  userObject: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }).isRequired,
};
