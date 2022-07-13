let counter = 0;

function increment() {
  counter++;
  document.getElementById("counter").innerText = counter;
}

function decrement() {
  counter--;
  document.getElementById("counter").innerText = counter;
}

function reset() {
  counter = 0;
  document.getElementById("save").innerText = "";
  document.getElementById("counter").innerText = counter;
}

function save() {
  if (counter > 0) {
    document.getElementById("error").innerText = '';
    if (document.getElementById("save").innerText == "") {
      let counterStr = counter.toString();
      document.getElementById("save").innerText += counterStr;
<<<<<<< HEAD:counter/index.js
    } else {
      let counterStr = " - " + counter;
=======
    }else
    {   
      let counterStr =  ' - '+ counter
>>>>>>> main:index.js
      document.getElementById("save").innerText += counterStr;
    }
  }else {
    document.getElementById("error").innerText = 'enter a number greater than 0';
    // alert("Please add a number to the counter");
  }
}
