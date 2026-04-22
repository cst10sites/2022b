var buttons = document.getElementsByClassName("simon-button"),
  reset = document.getElementById("link-reset"),
  steps = document.getElementById("score"),
  play = document.getElementById("play"),
  isLose = true,
  audio = [],
  round,
  game;

winAudio = new Audio("soundEffects/Ta Da-SoundBible.com-1884170640.mp3");
loseAudio = new Audio("soundEffects/fail-trombone-01.mp3");
audio[0] = new Audio("soundEffects/simonSound1.mp3");
audio[1] = new Audio("soundEffects/simonSound2.mp3");
audio[2] = new Audio("soundEffects/simonSound3.mp3");
audio[3] = new Audio("soundEffects/simonSound4.mp3");

for (var button = 0; button < buttons.length; button++) {
  buttons[button].style.opacity = 0.3;
}

function Game() {
  this.playerTurn = false;
  this.pattern = [];
  this.steps = 1;
}

function newGame() {
  game = new Game();
  steps.innerHTML = "01";
  setTimeout(fadeIntro, 250);
  setTimeout(newRound, 2500);
}

function Round() {
  game.pattern.push(Math.floor(Math.random() * 4));
  this.patternLength = game.steps;
  this.pattern = game.pattern;
  this.playerPattern = [];
  this.counter = 0;
  this.speed = 1200 - this.patternLength * 20;
}

function newRound() {
  round = new Round();
  showPattern();
  console.log(round.pattern); // Cheats
}

function showPattern() {
  game.playerTurn = false;
  for (var x = 0; x < round.patternLength; x++) {
    setTimeout(buttonGlow.bind(null, round.pattern[x], 500), round.speed * x);
  }
  setTimeout(function () {
    game.playerTurn = true;
  }, round.speed * round.patternLength);
}

function buttonClick(button) {
  if (game.playerTurn) {
    var buttonIndex = button.target.id;
    round.playerPattern.push(parseInt(buttonIndex));
    buttonGlow(button);
    check();
  }
}

function check() {
  if (round.playerPattern[round.counter] === round.pattern[round.counter]) {
    round.counter++;
    if (round.counter === round.patternLength) {
      game.playerTurn = false;
      game.steps++;
      if (game.steps === 16) {
        steps.innerHTML = '<span class="fa fa-trophy">YOU &#x1F3C6; WON</span>';
        winAudio.play();
        setTimeout(newGame, 6000);
        console.log("WINNER");
      } else {
        steps.innerHTML = game.steps < 10 ? "0" + game.steps : game.steps;
        setTimeout(newRound, 1500);
      }
    }
  } else if (isLose) {
    steps.innerHTML =
      '<span class="fa fa-exclamation-triangle">YOU &#9760; LOST</span>';
    loseAudio.play();
    setTimeout(newGame, 6000);
    console.log("LOSER");
  }
}

function buttonGlow(button, delay, fadeSpeed) {
  var pressed = button.target === undefined ? button : button.target.id;
  buttons[pressed].style.opacity = 1;
  audio[pressed].play();
  setTimeout(
    fade.bind(null, pressed, fadeSpeed !== undefined ? fadeSpeed : 100),
    delay !== undefined ? delay : 100
  );
}

function fade(buttonIndex, fadeSpeed) {
  buttons[buttonIndex].style.opacity -= 0.1;
  if (buttons[buttonIndex].style.opacity > 0.2) {
    setTimeout(fade.bind(null, buttonIndex), fadeSpeed);
  }
}

function fadeIntro() {
  for (var button = 0; button < buttons.length; button++) {
    setTimeout(buttonGlow.bind(null, button), 400 * button);
  }
}

(function () {
  newGame();
  reset.onclick = newGame;
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].onmousedown = buttonClick;
  }
})();
