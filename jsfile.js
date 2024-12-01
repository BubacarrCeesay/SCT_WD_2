let display = document.querySelector(".time");

let timer;
let elapsedTime = 0;
let startTime = 0;

let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;

    timer = setInterval(update, 10);

    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);

    elapsedTime = Date.now() - startTime;

    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  startTime = 0;

  isRunning = false;

  display.textContent = "00:00:00:00";
}

function update() {
  const current = Date.now();
  elapsedTime = current - startTime;

  let hr = Math.floor(elapsedTime / (1000 * 60 * 60));

  let mm = Math.floor((elapsedTime / (1000 * 60)) % 60);

  let sec = Math.floor((elapsedTime / 1000) % 60);

  let ms = Math.floor((elapsedTime % 1000) / 10);

  hr = String(hr).padStart(2, "0");
  mm = String(mm).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  ms = String(ms).padStart(2, "0");

  display.textContent = `${hr}:${mm}:${sec}:${ms}`;
}
