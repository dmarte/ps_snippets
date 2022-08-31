import { PSDom } from "../PSDom.js";

/**
 * @interface ClockStateFormatted
 * @property {string} seconds
 * @property {string} minutes
 * @property {string} hours
 */

/**
 * @interface ClockState
 * @property {Date} now
 * @property {number} seconds
 * @property {number} minutes
 * @property {number} hours
 * @property {ClockStateFormatted} formatted
 */

/**
 * Clock component class to render a clock  into a given container.
 */
class Clock {

  constructor(container) {
    
    this.$listeners = { seconds: [], minutes: [], hours: [] };
    this.$container = PSDom.findOrFail(container);
    
    this.mount()
  }

  /**
   * Mount the required dome elements.
   * 
   * @returns {void}
   */
  mount() {

    this.$element = {
        clock: PSDom.draw( this.template() ),
      };
  
      this.$element.hours = this.$element.clock.querySelector(
        ".clock-hours .clock-number"
      );
      this.$element.minutes = this.$element.clock.querySelector(
        ".clock-minutes .clock-number"
      );
      this.$element.seconds = this.$element.clock.querySelector(
        ".clock-seconds .clock-number"
      );
  }

  /**
   * Get the main template to be used in the clock.
   * 
   * @returns {string}
   */
  template() {
    return `
    <div class="clock">
        <!-- HOURS -->
        <div class="clock-numeric clock-hours">
            <span class="clock-mask">88</span>
            <span class="clock-number">
                <span class="clock-char">0</span>
                <span class="clock-char">0</span>
            </span>
        </div>
        <div class="clock-divider">:</div>
        <!-- MINUTES -->
        <div class="clock-numeric clock-minutes">
            <span class="clock-mask">88</span>
            <span class="clock-number">
                <span class="clock-char">0</span>
                <span class="clock-char">0</span>
            </span>
        </div>
        <div class="clock-divider">:</div>
        <!-- SECONDS -->
        <div class="clock-numeric clock-seconds">
            <span class="clock-mask">88</span>
            <span class="clock-number">
                <span class="clock-char">0</span>
                <span class="clock-char">0</span>
            </span>
        </div>  
    </div>
    `
  }

  /**
   * Create a new instance of clock an render a container.
   * 
   * @param {string} container The query selector path to store the clock.
   * @param {boolean} withSeconds Turn off seconds from clock.
   * @returns {this}
   */
  static make(container, withSeconds = false) {
    const clock = new Clock(container);

    if (!withSeconds) {
      clock.withoutSeconds();
    }

    return clock.render();
  }

  /**
   * Remove seconds block from clock.
   * 
   * @returns {this}
   */
  withoutSeconds() {

    this.$element.seconds.parentElement.remove();
    this.$element.clock.querySelectorAll(".clock-divider")[1]?.remove();
    
    return this;
  }

  /**
   * Format the seconds to be string.
   * 
   * @param {number} seconds 
   * @param {number|string} prefix 
   * @returns {this}
   */
   formatSeconds(seconds, prefix = 0) {
    return this.formatMinutes(seconds, prefix);
  }

  /**
   * Format the minutes to be string.
   * @param {number} minutes 
   * @param {number|string} prefix 
   * @returns {string}
   */
  formatMinutes(minutes, prefix = 0) {
    if (minutes < 10) {
      return `${prefix}${minutes}`;
    }
    return minutes;
  }

  /**
   * Format the hours to be string.
   * 
   * @param {number} hours 
   * @param {number|string} prefix 
   * @returns {string}
   */
  formatHours(hours, prefix = 0) {
    switch (hours) {
      case 13:
        hours = 1;
        break;
      case 14:
        hours = 2;
        break;
      case 15:
        hours = 3;
        break;
      case 16:
        hours = 4;
        break;
      case 17:
        hours = 5;
        break;
      case 18:
        hours = 6;
        break;
      case 19:
        hours = 7;
        break;

      case 20:
        hours = 8;
        break;

      case 21:
        hours = 9;
        break;

      case 22:
        hours = 10;
        break;

      case 23:
        hours = 11;
        break;

      case 0:
        hours = 12;
        break;
    }

    if (hours < 10) {
      return `${prefix}${hours}`;
    }

    return hours.toString();
  }

  /**
   * Set the number in each character block.
   *
   * @param {string|number} number The hour/minute/seconds number.
   * @param {HTMLElement} element The container .clock-number that hold the number.
   * @returns {this}
   */
  renderStateCharacters(number, element) {
    const firstCharacter = String(number).charAt(0);
    const secondCharacter = String(number).charAt(1);

    element.children[0].innerText = firstCharacter;
    element.children[1].innerText = secondCharacter;

    return this;
  }

  /**
   * Render the state for seconds.
   *
   * @param {ClockState} state
   * @returns {this}
   */
  renderStateForSeconds(state) {
    return this.renderStateCharacters(state.formatted.seconds, this.$element.seconds);
  }

  /**
   * Render the state for minutes.
   *
   * @param {ClockState} state
   * @returns {this}
   */
  renderStateForMinutes(state) {
    return this.renderStateCharacters(state.formatted.minutes, this.$element.minutes);
  }

  /**
   * Render the state for hours.
   *
   * @param {ClockState} state
   * @returns {this}
   */
  renderStateForHours(state) {
    return this.renderStateCharacters(state.formatted.hours, this.$element.hours);
  }

  /**
   * Render the state in the clock.
   *
   * @param {ClockState} state
   * @return {this}
   */
  renderState(state) {

    this.renderStateForSeconds(state);
    this.renderStateForMinutes(state);
    this.renderStateForHours(state);

    return this;
  }

  /**
   * Draw or render the clock in the container.
   *
   * @returns {this}
   */
  renderClock() {

    this.renderState(this.getState());
    this.$container.appendChild(this.$element.clock);

    setInterval(() => {
        const state = this.getState();
  
        this.$listeners.seconds.forEach((callback) => callback(state));
  
        if (state.seconds > 59 || state.seconds === 0) {
          this.$listeners.minutes.forEach((callback) => callback(state));
        }
  
        if (state.minutes > 59 || state.seconds === 0) {
          this.$listeners.hours.forEach((callback) => callback(state));
        }
      }, 1000);

    return this;
  }

  /**
   * Initialize biding of events.
   *
   * @returns {this}
   */
  attachBindings() {
    this.onEachHour((state) => {
      this.renderState(state);
    });

    this.onEachMinute((state) => {
      this.renderState(state);
    });

    if (this.$element.clock.querySelector(".clock-seconds")) {
      this.onEachSecond((state) => {
        this.renderState(state);
      });
    }

    return this;
  }

  /**
   * Render the clock with all biding events.
   *
   * @return {this}
   */
  render() {
    return this.attachBindings().renderClock();
  }

  /**
   * Get the resolved options.
   *
   * @returns {{now: Date, seconds: number, minutes: number, hour: number}}
   */
  getState() {
    const now = this.now();
    const seconds = this.seconds(now);
    const minutes = this.minutes(now);
    const hours = this.hours(now);
    return {
      now,
      seconds,
      minutes,
      hours,
      formatted: {
        seconds: this.formatHours(seconds),
        minutes: this.formatMinutes(minutes),
        hours: this.formatHours(hours),
      },
    };
  }

  /**
   * Get the current time.
   *
   * @returns {Date}
   */
  now() {
    return new Date();
  }

  /**
   * Get the seconds on given date.
   *
   * @param {Date} date Date to get the seconds
   * @returns {number}
   */
  seconds(date) {
    const second = date.getSeconds();
    return second < 1 ? 60 : second;
  }

  /**
   * Get the minutes in a given date.
   *
   * @param {Date} date
   * @returns {number}
   */
  minutes(date) {
    return date.getMinutes();
  }

  /**
   * Get the hours in a given date.
   *
   * @param {Date} date
   * @returns {number}
   */
  hours(date) {
    return date.getHours();
  }

  /**
   * Listener for seconds.
   *
   * @param {Function(number)} callback
   * @returns {this}
   */
  onEachSecond(callback) {
    this.$listeners.seconds.push(callback);
    return this;
  }

  /**
   * Listener for minutes.
   *
   * @param {Function(number)} callback
   * @returns {this}
   */
  onEachMinute(callback) {
    this.$listeners.minutes.push(callback);
    return this;
  }
  /**
   * Listener for hours.
   *
   * @param {Function(number)} callback
   * @returns {this}
   */
  onEachHour(callback) {
    this.$listeners.hours.push(callback);
    return this;
  }
}

window.Clock = Clock

export default Clock