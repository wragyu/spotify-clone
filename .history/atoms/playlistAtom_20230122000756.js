import { atom } from "recoil";

export const playlistState = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  //keys need to be unique
  key: "playlistIdState",
  default: "6XkFyawpQNynDbxxfxicWV"
});
