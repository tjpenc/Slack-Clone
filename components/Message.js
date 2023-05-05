import { PropTypes } from 'prop-types';
import styled from 'styled-components';
// import Image from 'next/image';

export default function Message({
  text, image, name, time,
}) {
  return (
    <MessageContainer>
      {/* <Image src={image} alt="">Image</Image> */}{image}
      <MessageInfo>
        <h4>
          {name}<span> {time}</span>
        </h4>
        <p>{text}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

Message.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  time: PropTypes.string,
};

Message.defaultProps = {
  text: 'This is default text',
  image: 'image',
  name: 'name',
  time: 'time',
};

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  font-size: 15px;

  > h4 {
    font-size: 20px;
  }

  > h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
