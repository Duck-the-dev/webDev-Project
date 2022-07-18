"use strict";
let hexColor = null;
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  hexColor = rgbToHex(r, g, b);

  return rgb;
}

// declare container
let container = document.createElement("div");

container.style = `display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: space-between;`;
container.classList.add("container");
document.body.appendChild(container);

// declare elements inside container
let users = [];
for (let i = 0; i < 200; i++) {
  let user = document.createElement("div");
  user.classList.add("user");
  container.appendChild(user);
  users.push(user);
}
let newColor = document.createElement("button");
let newName = document.createElement("button");

// functions
let shuffledColors;
function shuffleColor(color) {
  users.forEach((user) => {
    user.style = ` border-radius: 10px ; margin: 10px 20px; padding: 20px; background-color: ${getRandomColor()}; color: ${getRandomColor()}; font-size: 50px; font-weight: bold; text-align: center; font-family: Arial ; `; // style;
    user.style.transition = "transition:all 0.3s ease;";
  });
  return newColor;
}

// return user
let nIntervId;

newColor = shuffleColor(newColor);
newColor.innerHTML = "New Colors";
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
// append elements to container

document.addEventListener("click", function (e) {
  if (e.target.classList == "user") {
    hexColor = e.target.style.backgroundColor.slice(
      e.target.style.backgroundColor.indexOf("(") + 1,

      e.target.style.backgroundColor.indexOf(")")
    );
    hexColor = hexColor.split(",");
    hexColor = rgbToHex(
      parseInt(hexColor[0]),
      parseInt(hexColor[1]),
      parseInt(hexColor[2])
    );
    document.querySelector(".color").style.animation =
      "2s anim-lineUp ease-out 1";
    const css = window.document.styleSheets[0];
    css.insertRule(
      `@keyframes anim-lineUp {
    0% {
      opacity: 0;
      transform: translateY(80%);
    }
    20% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateY(0%);
    }
    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }`,
      css.cssRules.length
    );
    document.querySelector(
      ".color"
    ).innerHTML = `${e.target.style.backgroundColor}\n
    hex: ${hexColor}`;
  }
});

users.forEach((user) => {
  document.querySelector(".container").appendChild(user);
});
document.querySelector(".new").appendChild(newColor);
document.querySelector(
  ".new"
).style = `display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-around;`;
