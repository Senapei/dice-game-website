function randomNumber() {
  let randomNumber = Math.random() * 6 + 1;
  randomNumber = Math.floor(randomNumber);
  console.log(randomNumber);
  return randomNumber;
}

function setDiceImage() {
  let dice1 = document.querySelector(".dice-1");
  let dice2 = document.querySelector(".dice-2");

  let diceValue1 = randomNumber();
  dice1.setAttribute("src", "./img/dice" + diceValue1 + ".png");

  let diceValue2 = randomNumber();
  dice2.setAttribute("src", "./img/dice" + diceValue2 + ".png");
}

function winner() {}

setDiceImage();
