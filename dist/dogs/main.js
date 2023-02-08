// https://dog.ceo/api/breeds/image/random

let nIntervId;

function start() {
  nIntervId = setInterval(function () {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let img = document.createElement("img");
        img.alt = "some dog";
        img.src = data.message;
        document.querySelector(".container").appendChild(img);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 6000);
}
function stop() {
  clearInterval(nIntervId);
  nIntervId = null;
}
// fetch("https://dog.ceo/api/breeds/image/random").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//     document.getElementById("dog-img").src = data.message;
//   });
// });
