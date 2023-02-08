let table = document.getElementById("heros");
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((jsondata) => {
    jsondata.forEach((element) => {
      table.innerHTML += `<tr><td>${element.id}</td><td>${element.name}</td></tr>`;
    });
  });
