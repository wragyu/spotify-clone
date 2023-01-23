import { atom } from "recoil";

export const playlistm = atom({
  key: "playlistState",
  default: null,
});

export const playlistIdState = atom({
  //keys need to be unique
  key: "playlistIdState",
  default: "6XkFyawpQNynDbxxfxicWV"
});
