import {
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
} from "./const.js";

function handleInput() {
  if (this.checkValidity() && this.value < 60) {
    prevValue = this.value;
  } else {
    this.value = prevValue;
  }
}

function calculateTime() {
  if (+timerMinute.value === 0 && +timerSecond.value !== 0) {
    timerSecond.value = (timerSecond.value - 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  } else if (+timerMinute.value !== 0 && +timerSecond.value === 0) {
    timerMinute.value = (timerMinute.value - 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    timerSecond.value = 59;
  } else if (+timerMinute.value === 0 && +timerSecond.value === 0) {
    clearInterval(timer);

    localStorage.removeItem("timerIsOn");

    document.body.style.backgroundColor = "#b90e0a";

    audio.play();

    resetButton.disabled = false;
    stopButton.disabled = true;

    audioTimer = setInterval(() => audio.play(), 2000);
  } else {
    timerSecond.value = (timerSecond.value - 1).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  localStorage.setItem("currentTimerMinute", timerMinute.value);
  localStorage.setItem("currentTimerSecond", timerSecond.value);
}

function startTimer() {
  if (+timerMinute.value !== 0 || +timerSecond.value !== 0) {
    timerMinute.value = (+timerMinute.value).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    timerSecond.value = (+timerSecond.value).toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

    timer = setInterval(calculateTime, 1000);

    timerMinute.readOnly = true;
    timerSecond.readOnly = true;

    startButton.disabled = true;
    resetButton.disabled = true;
    stopButton.disabled = false;

    for (let timeButton of timeButtons) {
      timeButton.disabled = true;
    }

    const startTimerMinute = localStorage.getItem("startTimerMinute");
    const startTimerSecond = localStorage.getItem("startTimerSecond");

    const timerIsOn = localStorage.getItem("timerIsOn");

    if (
      (startTimerMinute === null && startTimerSecond === null) ||
      timerIsOn === null
    ) {
      localStorage.setItem("startTimerMinute", timerMinute.value);
      localStorage.setItem("startTimerSecond", timerSecond.value);
    }

    localStorage.setItem("timerIsOn", true);
  }
}

function stopTimer() {
  startButton.disabled = false;
  resetButton.disabled = false;
  stopButton.disabled = true;

  timerMinute.readOnly = true;
  timerSecond.readOnly = true;

  for (let timeButton of timeButtons) {
    timeButton.disabled = true;
  }

  localStorage.setItem("timerIsOn", false);

  clearInterval(timer);
}

function resetTimer() {
  clearInterval(audioTimer);

  clearInterval(timer);

  timerMinute.value = localStorage.getItem("startTimerMinute");
  timerSecond.value = localStorage.getItem("startTimerSecond");

  localStorage.setItem("currentTimerMinute", timerMinute.value);
  localStorage.setItem("currentTimerSecond", timerSecond.value);

  localStorage.removeItem("timerIsOn");

  timerMinute.readOnly = false;
  timerSecond.readOnly = false;

  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;

  for (let timeButton of timeButtons) {
    timeButton.disabled = false;
  }

  document.body.style.backgroundColor = "#fff";
}

function addTime(event) {
  const target = event.target;

  timerMinute.value = (+target.textContent.substring(
    0,
    target.textContent.indexOf(" ")
  )).toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  timerSecond.value = "00";
}

let prevValue = "";

let timer = 0;
let audioTimer = 0;

timerMinute.value = currentTimeMinute !== null ? currentTimeMinute : "00";
timerSecond.value = currentTimeSecond !== null ? currentTimeSecond : "00";

stopButton.disabled = true;
resetButton.disabled = true;

for (let timeButton of timeButtons) {
  timeButton.addEventListener("click", addTime);
}

timerSecond.addEventListener("input", handleInput);

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

if (timerIsOn === "true") {
  startTimer();
} else if (timerIsOn === "false") {
  stopTimer();
}
