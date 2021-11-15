import Vimeo from "@vimeo/player";
// import throttle from "lodash.throttle";

const LOCAL_STORAGE = "videoplayer-current-time";

const iframe = document.querySelector("#vimeo-player");
console.log(iframe);
const player = new Vimeo.Player(iframe);
