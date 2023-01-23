import { getSession } from 'next-auth/react';
import Center from '../components/Center';
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className='flex'>
        <Sidebar />
        <Center />

      </main>

      <div> {/* Player */} </div>
    </div>
  );
}

export default Home

// Fixes glitch to server render the user 
export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}
