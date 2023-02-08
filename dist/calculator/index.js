let num1 = document.getElementById('a');
let num2 = document.getElementById('b');






function add(){


    let result =  parseInt(num1.value, 10) + parseInt(num2.value, 10);
    result = result.toString();

    document.getElementById("result-el").textContent = 'Addition = ' + result ;
}
function sub(){
    let result = parseInt(num1.value, 10) - parseInt(num2.value, 10);
    result = result.toString();

    document.getElementById("result-el").textContent = 'Subtraction = '  + result;
}
function mul(){
    let result = parseInt(num1.value, 10) * parseInt(num2.value, 10);
    result = result.toString();

    document.getElementById("result-el").textContent = 'Multiplication = ' + result;
}
function div(){
    let result = parseInt(num1.value, 10) / parseInt(num2.value, 10);;
    result = result.toString();
    document.getElementById("result-el").textContent = 'Division = '  + result;
}
