// COIN FLIP SIMULATOR

// HTML Vairables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let diceOutEl = document.getElementById("diceOut");
let dice1El = document.getElementById("dice1Out");
let dice2El = document.getElementById("dice2Out");
let dice3El = document.getElementById("dice3Out");
let dice4El = document.getElementById("dice4Out");
let dice5El = document.getElementById("dice5Out");
let dice6El = document.getElementById("dice6Out");

// Count Variables
let numHeads = 0;
let numTails = 0;
let dice1 = 0;
let dice2 = 0;
let dice3 = 0;
let dice4 = 0;
let dice5 = 0;
let dice6 = 0;

// Button Event Listenser
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Coin Flip
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img src='img/heads.png' />";
    numHeads += 1;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = "<img src='img/tails.png' />";
    numTails += 1;
    tailsEl.innerHTML = numTails;
  }
}

// Button Event Listenser
document.getElementById("diceBtn").addEventListener("click", diceClick);

function diceClick() {
  // Generate a Random Number
  let randNum1 = Math.round(Math.random() * 5 + 1);
  console.log(randNum1);
  //Simulate rolling die
  if (randNum1 == 1) {
    diceOutEl.innerHTML = "<img src='img/1.png' />";
    dice1 += 1;
    dice1El.innerHTML = dice1;
  } else if (randNum1 == 2) {
    diceOutEl.innerHTML = "<img src='img/2.png'/>";
    dice2 += 1;
    dice2El.innerHTML = dice2;
  } else if (randNum1 == 3) {
    diceOutEl.innerHTML = "<img src='img/3.png'/>";
    dice3 += 1;
    dice3El.innerHTML = dice3;
  } else if (randNum1 == 4) {
    diceOutEl.innerHTML = "<img src='img/4.png'/>";
    dice4 += 1;
    dice4El.innerHTML = dice4;
  } else if (randNum1 == 5) {
    diceOutEl.innerHTML = "<img src='img/5.png'/>";
    dice5 += 1;
    dice5El.innerHTML = dice5;
  } else {
    diceOutEl.innerHTML = "<img src='img/6.png'/>";
    dice6 += 1;
    dice6El.innerHTML = dice6;
  }
}
