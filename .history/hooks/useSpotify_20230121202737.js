import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"
import SpotifyApi from "../lib/spotify";


function useSpotify() {
  const { data: session, status } =useSession

  useEffect(() => {
    if (session) {
      // If refresh access token attemp fails, direct user to login...
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      SpotifyApi
    }
  }, [session]);

  return null;
}

export default useSpotify
