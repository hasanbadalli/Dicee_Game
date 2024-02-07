function game() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;

  const randomDiceImage1 = "dice" + randomNumber1 + ".png";

  const randomImageSource1 = "images/" + randomDiceImage1;

  const image1 = document.querySelector(".img1");

  image1.setAttribute("src", randomImageSource1);

  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  const randomDiceImage2 = "dice" + randomNumber2 + ".png";

  const randomImageSource2 = "images/" + randomDiceImage2;

  const image2 = document.querySelector(".img2");

  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Play 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "🚩 Play 2 Wins!";
  } else {
    document.querySelector("h1").innerText = "Draw";
  }
}
