import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import Header from '../components/Header';
import User from '../components/User';

function Home() {
  const { user } = useAuth();

  return (
    <>
      <Header userObject={User} />

      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >

        <h1>Hello {user.displayName}! </h1>
        <Button variant="danger" onClick={signOut}>Sign Out</Button>
      </div>
    </>
  );
}

export default Home;
