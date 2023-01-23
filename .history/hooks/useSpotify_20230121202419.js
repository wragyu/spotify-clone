import { useSession } from "next-auth/react"
import { useEffect } from "react"

function useSpotify() {
  const { data: session, status } =useSession

  useEffect(() => {

  })

  return null
}

export default useSpotify
