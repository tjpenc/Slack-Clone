import { useRouter } from 'next/router';

export default function ViewChatroom() {
  const router = useRouter();
  const { firebaseKey } = router.query;

  return <h1>This is chatroom {firebaseKey}</h1>;
}
