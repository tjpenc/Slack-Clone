// import { Button } from 'react-bootstrap'; // TODO: COMMENT IN FOR AUTH
// import { signOut } from '../utils/auth'; // TODO: COMMENT IN FOR AUTH
// import { useAuth } from '../utils/context/authContext'; // TODO: COMMENT IN FOR AUTH
// import Chat from '../components/Chat';
import ViewDirectorBasedOnUserAuthStatus from '../utils/ViewDirector';

function Home() {
  // const { user } = useAuth(); // TODO: COMMENT IN FOR AUTH

  return <ViewDirectorBasedOnUserAuthStatus />;
}

export default Home;
