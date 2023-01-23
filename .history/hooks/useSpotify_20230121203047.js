import { signIn, useSession } from "next-auth/react"
import { useEffect } from "react"
import SpotifyWebApi from "spotify-web-api-node";
import spotifyApi from "../lib/spotify"

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID
})

function useSpotify() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (session) {
      // If refresh access token attemp fails, direct user to login...
      if (session.error === "RefreshAccessTokenError") {
        signIn();
      }

      spotifyApi.setAccessToken(session.user.setAccessToken);
    }
  }, [session]);

  return spotifyApi;
}

export default useSpotify
