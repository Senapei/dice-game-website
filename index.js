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

  if (diceValue1 > diceValue2) {
    return 0;
  } else if (diceValue1 < diceValue2) {
    return 1;
  } else if (diceValue1 === diceValue2) {
    return 2;
  } else {
    console.log("error");
  }
}

function winner() {
  let diceWinner = setDiceImage();
  let heading = document.querySelector(".heading");
  if (diceWinner === 0) {
    heading.textContent = "Player 1 Wins";
  } else if (diceWinner === 1) {
    heading.textContent = "Player 2 Wins";
  } else if (diceWinner === 2) {
    heading.textContent = "It's a Draw";
  }
}

winner();
