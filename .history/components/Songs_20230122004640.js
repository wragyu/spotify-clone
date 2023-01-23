import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"

function Songs() {
  // grab playlist from recoil
  // set playlistState as playlist
  const playlist = useRecoilValue(playlistState)
  console.log("playlist -->", playlist)

  return (
    <div className="text-white">
      {playlist?.tracks.items.map((track) => (
          <div>{track.track.name}</div>
      ))
      }
    </div>
  )
}

export default Songs
