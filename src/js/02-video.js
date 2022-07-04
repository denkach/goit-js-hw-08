import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(vimeoPlayer);
const PLAYER_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlayerUpdate, 1000));

function onPlayerUpdate({ seconds }) {
  localStorage.setItem(PLAYER_CURRENT_TIME, seconds);
}

if (localStorage.getItem(PLAYER_CURRENT_TIME)) {
  player.setCurrentTime(localStorage.getItem(PLAYER_CURRENT_TIME));
}
