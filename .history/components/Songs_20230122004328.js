import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"

function Songs() {
  // grab playlist from recoil
  // set playlistState as playlist
  const playlist = useRecoilValue(playlistState)
  console.log("playlist -->")

  return (
    <div>
      {
        playlist?.tracks.items
      }
    </div>
  )
}

export default Songs
