import { getSession } from 'next-auth/react';
import Center from '../components/Center';
import Player from '../components/Player';
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className='flex'>
        <Sidebar />
        <Center />
      </main>

      <div className='sticky bottom-0 text'>
        <Player />
      </div>
    </div>
  );
}

export default Home

// Fixes glitch to server render the user right away
// initial render doesn't have the session
// this pre-renders the server
export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
}
