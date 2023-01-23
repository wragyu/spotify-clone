import useSpotify from "../hooks/useSpotify"

function Song({ order, track }) {
  const spotifyApi = useSpotify
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img src=/>
      </div>
    </div>
  )
}

export default Song
