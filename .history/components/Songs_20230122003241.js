import { useSession } from "next-auth/react"
import useSpotify from "../hooks/useSpotify"

function Songs() {
  const { data: session } = useSession()
  const spotifyApi = useSpotify()

  return (
    <div className="text-white">Songs</div>
  )
}

export default Songs
