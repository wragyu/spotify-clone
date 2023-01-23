// this is a helper function for converting milliseconds to minutes and seconds


// takes in milliseconds. In this case, the track has "duration_ms"
export function millisToMinutesAndSeconds(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return seconds == 60
  ? minutes + 1 + ":00"
  : minutes + ":" 
}
