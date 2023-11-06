import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframeVideoElem = document.querySelector('.js-iframe-video');

const player = new Player(iframeVideoElem, {
  id: 19231868,
  width: 640,
});

// player.on('play', function () {
//   console.log('played the video!');
// });
// player.setMuted(false);
// player.setColor('#ff0000');

player.on('timeupdate', throttle(onTimeUpdate, 250));

function onTimeUpdate(data) {
  console.log(data.seconds);
}
