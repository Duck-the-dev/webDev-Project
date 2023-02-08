let billTotalInput = document.getElementById("billTotalInput");
let tipInput = document.getElementById("tipInput");
let numberOfPeople = document.getElementById("numberOfPeople");
let perPersonTotal = document.getElementById("perPersonTotal");
let people = 1;

function calculateBill() {
  let tip = billTotalInput.value * (tipInput.value / 100);
  let bill = Math.ceil(billTotalInput.value);

  let total = bill + tip;
  total = total / people;
  perPersonTotal.innerHTML = `$${total.toFixed(2)}`;
}
function increasePeople() {
  people++;
  numberOfPeople.innerText = people;

  calculateBill();
}
function decreasePeople() {
  if (people > 1) {
    people--;
    numberOfPeople.innerText = people;
    calculateBill();
  }
}
