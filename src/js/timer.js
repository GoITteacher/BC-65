const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
function onStartBtnClick(event) {
  stopwatch.start();
}
function onStopBtnClick() {
  stopwatch.stop();
}
const stopwatch = {
  setIntervalId: null,
  isActive: false,
  initTime: null,

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.setIntervalId = setInterval(() => {
      this.tick();
    }, 1000);
    this.initTime = Date.now();
  },

  stop() {
    clearInterval(this.setIntervalId);
    this.isActive = false;
  },

  tick() {
    const currentTime = Date.now();
    const diff = currentTime - this.initTime;
    const time = this.getTimeComponents(diff);
    renderTime(time);
  },

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
  },
  pad(value) {
    return String(value).padStart(2, '0');
  },
};

function renderTime({ hours, mins, secs }) {
  const time = `${hours}:${mins}:${secs}`;
  refs.clockface.textContent = time;
}

// ===================

/* 


const clockface = {
  ...
  ...
  ..
  ....
  ...
  ..
  ..
  innerHTML: '',
  textContent: ''
}
*/
