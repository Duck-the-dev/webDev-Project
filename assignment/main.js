"use strict";

// declare container
var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// declare elements inside container
let user = document.createElement("h1");
user.className = "user";
let newColor = document.createElement("button");
let newName = document.createElement("button");

// functions
let shuffledColors;
function shuffleColor(color) {
  let dict = {
    backgroundColors: [
      "E5ECE9",
      "D6D1CD",
      "F7ECE1",
      "CAC4CE",
      "D1BCE3",
      "DBCDC6",
      "EAD7D1",
      "F0F4EF",
      "pink",
      "white",
    ],
    colors: [
      "969A97",
      "C1AAC0",
      "504B43",
      "5B6C5D",
      "676F54",
      "242038",
      "75485E",
      "585481",
      "1F1A38",
      "0D1821",
      "344966",
      "BFCC94",
    ],
  };
  let shuffledBackgroundColors = dict.backgroundColors.sort(
    () => Math.random() - 0.5
  );
  let shuffledColors = dict.colors.sort(() => Math.random() - 0.5);

  user.style = `border-radius: 10px ; margin: 10px 20px; padding: 20px; background-color: #${shuffledBackgroundColors[0]}; color: #${shuffledColors[0]}; font-size: 50px; font-weight: bold; text-align: center; font-family: Arial ; `; // style;
  user.style.transition = "transition:all 0.3s ease;";

  return newColor;
}
function shuffleUserName(user) {
  let names = ["Mahmoud", "ahmed", "mohamed"];
  let shuffledNames = names.sort(() => Math.random() - 0.5);
  user.innerHTML = `user name is ${shuffledNames[0]}`;
  return user;
}

// return user
let nIntervId;

user = shuffleUserName(user);
newColor = shuffleColor(newColor);
newColor.innerHTML = "New Color";

newColor.onclick = function () {
  if (!nIntervId) {
    let nIntervId = setInterval(
      function () {
        shuffleColor(newColor);
      },
      200,
      setTimeout(function () {
        clearInterval(nIntervId);
        nIntervId = null;
      }, 1000)
    );
  }
};
newName.innerHTML = "New Name";
newName.onclick = function () {
  clearInterval(nIntervId);
  nIntervId = null;

  shuffleUserName(user);
  return 0;
};

// append elements to container

document.querySelector(".container").appendChild(user);
document.querySelector(".container").appendChild(newName);

document.querySelector(".container").appendChild(newColor);
