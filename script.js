let monitor = document.querySelector("#monitor");
let countdown = document.querySelector("#countdown");
let counter = 0;
let time = 5;

// Ana function oyun burada dönecek
function game() {}

// monitör'de 3'ün 5'in ve 15'in katlarında ? çıkıyor bu function sayesinde
setInterval(questionMonitor, 1000);

function questionMonitor() {
  counter++;
  monitor.innerHTML = counter;

  if (counter % 3 == 0) {
    monitor.innerHTML = "?";
  } else if (counter % 5 == 0) {
    monitor.innerHTML = "?";
  } else if (counter % 3 == 0 && counter % 5 == 0) {
    monitor.innerHTML = "?";
  }
}

// Timer yaptık ve 0 olduğunda fonction duruyor ve game over yazıyor

setInterval(timer, 1000);
function timer() {
  countdown.innerHTML = time;
  if (time <= 0) {
    countdown.innerHTML = "Game Over";
    return;
  }
  time--;
}
