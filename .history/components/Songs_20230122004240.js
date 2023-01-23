import { useRecoilValue } from "recoil"

function Songs() {
  // grab playlist from recoil
  const playlist = useRecoilValue()

  return (
    <div>
      <p></p>
    </div>
  )
}

export default Songs
