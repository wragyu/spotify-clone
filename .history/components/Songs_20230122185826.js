import { useRecoilValue } from "recoil"
import { playlistState } from "../atoms/playlistAtom"
import Song from "./Song"

function Songs() {
  // grab playlist from recoil
  // set playlistState as playlist
  const playlist = useRecoilValue(playlistState)
  // console.log("playlist -->", playlist)

  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks.items.map((track, i) => (
          <Song key={track.track.id} track={track} order={i}/>
        <p>Song</p>
      ))}
    </div>
  )
}

export default Songs
