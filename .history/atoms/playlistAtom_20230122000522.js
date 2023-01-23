import { atom } from "recoil";

export const playlistAtom = atom({
  key: "playlistAtom"State,

})

export const playlistIdState = atom({
  //keys need to be unique
  key: "playlistIdState",
  default: "6XkFyawpQNynDbxxfxicWV"
});
