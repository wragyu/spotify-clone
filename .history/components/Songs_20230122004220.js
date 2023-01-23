import { useSession } from "next-auth/react"
import { useRecoilState, useRecoilValue } from "recoil"
import { playlistIdState } from "../atoms/playlistAtom"
import useSpotify from "../hooks/useSpotify"

function Songs() {
  // grab playlist from recoil
  const playlist = useRecoilValue

  return (
    <div>
      <p></p>
    </div>
  )
}

export default Songs
