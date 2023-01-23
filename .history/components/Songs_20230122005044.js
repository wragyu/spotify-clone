import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"
import Song from "./Song"

function Songs() {
  // grab playlist from recoil
  // set playlistState as playlist
  const playlist = useRecoilValue(playlistState)
  console.log("playlist -->", playlist)

  return (
    <div className="text-white">
      {playlist?.tracks.items.map((track) => (
          <Song />

      ))}
    </div>
  )
}

export default Songs
