function randomNumber() {
  let randomNumber = Math.random() * 6 + 1;
  randomNumber = Math.floor(randomNumber);
  console.log(randomNumber);
  return randomNumber;
}

function setDiceImage(diceNumber1, diceNumber2) {
  let dice1 = document.querySelector(".dice-1");
  let dice2 = document.querySelector(".dice-2");

  dice1.setAttribute("src", "./img/dice" + diceNumber1 + ".png");

  dice2.setAttribute("src", "./img/dice" + diceNumber2 + ".png");
}

function winner() {
  let firstNumber = randomNumber();
  let secondNumber = randomNumber();

  setDiceImage(firstNumber, secondNumber);
  let heading = document.querySelector(".heading");
  if (firstNumber > secondNumber) {
    heading.textContent = "Player 1 Wins";
  } else if (firstNumber < secondNumber) {
    heading.textContent = "Player 2 Wins";
  } else if (firstNumber === secondNumber) {
    heading.textContent = "It's a Draw";
  } else {
    console.log("Error");
  }
}

winner();
