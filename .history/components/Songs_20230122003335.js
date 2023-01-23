import { useSession } from "next-auth/react"
import { useRecoilState } from "recoil"
import { playlistIdState } from "../atoms/playlistAtom"
import useSpotify from "../hooks/useSpotify"

function Songs() {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()

  const [ playlistId, setPlaylistId ] = useRecoilState(playlistIdState)
  console.log("playlistId state:", playlistId)

  return (
    <div className="text-white">Songs</div>
  )
}

export default Songs
