import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";


function Player() {
  // need to use spotify
  //
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState);
  const [ isPlaying, setIsPlaying ] = useRecoilState(isPlayingState);
  const [ volume, setVolume ] = useState(50);

  const songInfo = useSongInfo();

  const fetchCurrentSong = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then(data => {
        setCurrentTrackId(data.body?)
      })
    }
  }

  useEffect(() => {
    if (spotifyApi.getAccessToken() && !currentTrackId) {
      // fetch song info
    }

  }, [currentTrackIdState, spotifyApi, session])

  return (
    <div>
      {/* left */}
      <div>
        <img
        className="hidden md:inline h-10 w-10"
        src={songInfo?.album.images?.[0]?.url}
        alt=""/>
      </div>
    </div>
  );
}

export default Player;
