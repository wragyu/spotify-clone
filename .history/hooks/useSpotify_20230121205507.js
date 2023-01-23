import { signIn, useSession } from "next-auth/react"
import SpotifyWebApi from "spotify-web-api-node";

// 1. spotify initialized from the server
// import spotifyApi from "../lib/spotify"

// 2. spotify initialized locally
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

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
