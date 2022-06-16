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
    document.getElementById("save").innerText = '';
    document.getElementById("counter").innerText = counter;
  }

  function save() {
    if (document.getElementById("save").innerText == '') {
      let counterStr =  counter.toString();
      document.getElementById("save").innerText += counterStr;
    }else
    {   
      let counterStr =  ' - '+ counter
      document.getElementById("save").innerText += counterStr;

 
    }

  }
