let search = document.querySelector("#search");
let search_button = document.querySelector("#search_button");

const heros = (id) => {
  fetch(`https://superheroapi.com/api.php/2295000450652077/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let name = document.createElement("h1");
      let powers = document.createElement("p");
      let image = document.createElement("img");
      let biography = document.createElement("p");
      let appearance = document.createElement("p");

      name.innerHTML = data.name;
      powers.innerHTML = `
      intelligence: ${data.powerstats.intelligence} <br>
        strength: ${data.powerstats.strength} <br>
        speed: ${data.powerstats.speed} <br>
        durability: ${data.powerstats.durability} <br>
        power: ${data.powerstats.power} <br>
        combat: ${data.powerstats.combat} <br>
        `;

      biography.innerHTML = `
        full-name: ${data.biography["full-name"]} <br>
        alter-ego: ${data.biography["alter-egos"]} <br>
        aliases: ${data.biography.aliases} <br>
        place-of-birth: ${data.biography["place-of-birth"]} <br>
        first-appearance: ${data.biography["first-appearance"]} <br>
        publisher: ${data.biography.publisher} <br>
        alignment: ${data.biography.alignment} <br>
        `;

      image.src = data.image.url;

      document.querySelector(".container").appendChild(name);
      document.querySelector(".container").appendChild(powers);
      document.querySelector(".container").appendChild(image);
      document.querySelector(".container").appendChild(biography);
      document.querySelector(".container").appendChild(appearance);
    });
};

search_button.addEventListener("click", (e) => {
  let id = search.value;
  document.querySelector(".container").innerHTML = "";
  heros(id);
});
