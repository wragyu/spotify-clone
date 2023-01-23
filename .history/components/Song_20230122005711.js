import useSpotify from "../hooks/useSpotify"

function Song({ order, track }) {
  const spotifyApi = useSpotify
  return (
    <div>
      <div>
        <p>{order + 1}</p>
        <img className="" src={track.track.album.images[0].url} alt=""
        />
        div>p*2
        
      </div>
    </div>
  )
}

export default Song
