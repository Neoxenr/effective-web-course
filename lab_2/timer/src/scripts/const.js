const audio = new Audio("https://bigsoundbank.com/UPLOAD/mp3/1111.mp3");

const timerMinute = document.querySelector(".timer__minute");
const timerSecond = document.querySelector(".timer__second");

const currentTimeMinute = localStorage.getItem("currentTimerMinute");
const currentTimeSecond = localStorage.getItem("currentTimerSecond");

const startButton = document.querySelector(".btn_start");
const stopButton = document.querySelector(".btn_stop");
const resetButton = document.querySelector(".btn_reset");

const timeButtons = document.querySelectorAll(".btn_time");

const timerIsOn = localStorage.getItem("timerIsOn");

export {
  audio,
  timerMinute,
  timerSecond,
  currentTimeMinute,
  currentTimeSecond,
  startButton,
  stopButton,
  resetButton,
  timeButtons,
  timerIsOn,
};
