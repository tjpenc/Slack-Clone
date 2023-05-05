import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

export default function User({ userObject }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={userObject.photoURL} />
      <Card.Body>
        <Card.Title>{userObject.displayName}</Card.Title>
        <Card.Text>{userObject.email}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Last Sign In: {userObject.metadata.lastSignInTime}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

User.propTypes = {
  userObject: PropTypes.shape({
    displayName: PropTypes.string,
    email: PropTypes.string,
    photoURL: PropTypes.string,
    metadata: PropTypes.shape({
      lastSignInTime: PropTypes.string,
    }),
  }).isRequired,
};
