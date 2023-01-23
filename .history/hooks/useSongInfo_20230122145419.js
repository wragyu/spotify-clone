import { useState } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify"


function useSongInfo() {
  const spotifyApi = useSpotify();
  const [ currentTrackId, setCurrentTrackId ] = useRecoilState(currentTrackIdState);
  const [ songInfo, setSongInfo ] = useState(null)

  

  return (
    <div>useSongInfo</div>
  )
}

export default useSongInfo;
