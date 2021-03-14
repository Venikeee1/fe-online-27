export default class Timer {
  constructor(selector, time) {
    this.element = document.querySelector(selector);
    // milliseconds
    this.timeLeft = time;
    this.interval = null;
  }

  getDays() {
    return String(Math.floor(this.timeLeft / (1000 * 60 * 60 * 24))).padStart(
      2,
      '0',
    );
  }

  getHours() {
    return String(
      Math.floor((this.timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    ).padStart(2, '0');
  }

  getMinutes() {
    return String(
      Math.floor((this.timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
    ).padStart(2, '0');
  }

  getSeconds() {
    return String(Math.floor((this.timeLeft % (1000 * 60)) / 1000)).padStart(
      2,
      '0',
    );
  }

  timerMarkup() {
    return `
    <div className="timer">
      <span class="timer-days">${this.getDays()}</span> : 
      <span class="timer-hours">${this.getHours()}</span> :
      <span class="timer-minutes">${this.getMinutes()}</span> :
      <span class="timer-seconds">${this.getSeconds()}</span>
    </div>
    `;
  }

  render() {
    this.element.innerHTML = this.timerMarkup();
  }

  timerTick() {
    this.timeLeft = this.timeLeft - 1000;
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      clearInterval(this.interval);
    }

    this.render();
  }

  createInterval() {
    return setInterval(() => {
      this.timerTick();
    }, 1000);
  }

  pause() {
    clearInterval(this.interval);
  }

  resume() {
    this.interval = this.createInterval();
  }

  init() {
    this.interval = this.createInterval();
  }
}
