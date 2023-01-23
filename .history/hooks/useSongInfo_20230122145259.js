import { useRecoilState } from "recoil";
import useSpotify from "./useSpotify"


function useSongInfo() {
  const spotifyApi = useSpotify();
  const [ currentTrackId, setCurrentTrackId ] = useRecoilState

  return (
    <div>useSongInfo</div>
  )
}

export default useSongInfo
