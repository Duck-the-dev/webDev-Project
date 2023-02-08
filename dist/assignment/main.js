"use strict";

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  console.log(rgb);
  return rgb;
}

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
    backgroundColors: getRandomColor(),
    colors: getRandomColor(),
  };

  user.style = `border-radius: 10px ; margin: 10px 20px; padding: 20px; background-color: ${dict.backgroundColors}; color: ${dict.colors}; font-size: 50px; font-weight: bold; text-align: center; font-family: Arial ; `; // style;
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
