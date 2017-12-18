var Score = 0;
var Attempted = 0;
function main() {
  let randomLetter = getRandomLetter(65, 90);
  document.getElementById("display").innerText = randomLetter;
  document.getElementById("score").innerText = Score;
  document.getElementById("attempt").innerText = Attempted;
}

function keyPressed(event) {
  let randomLetter = document.getElementById("display").innerText;
  let userInput = event.key.toUpperCase();
  Score += (userInput == randomLetter) ? 10 :-10;
  Attempted++;
  gameOver();
  main();
}

function gameOver() {
  let time = document.getElementById('timer').innerText;
  if (time == 0) {
    document.getElementById('body').onkeypress='';
    document.getElementById("over").style="visibility:visible";
    document.getElementById("accuracy").innerText = getAccuracy();
  }
}

function getAccuracy() {
  return Math.floor(Score/Attempted*10);
}

function getRandomLetter(min, max) {
  return String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min));
}

function timer(time) {
  setInterval(function(){
    if (time > 0) {
      time--;
      document.getElementById("timer").innerText = time;
    }
  },1000)
}

window.onload = timer(20);
