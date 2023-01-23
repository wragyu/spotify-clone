import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";


function Player() {
  // ne
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();


  return (
    <div>
      {/* left */}
      <div>
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default Player
