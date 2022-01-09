// let num1 = 10
// let num2 = 41
// let result = num1 + num2
// console.log(`The answer is: ${result}`)

//getting element values
let inputNumber1 = document.getElementById('num1');
let inputNumber2 = document.getElementById('num2');
let inputTotal = document.getElementById('total');
let btnResult = document.getElementById('result');

console.log(inputNumber1);
// all inputs have the same property/atributes
console.log(btnResult)


//now lets click the button to get the value(what is typed in the inputbox)

btnResult.addEventListener('click', function () {

    let num1 = parseInt(inputNumber1.value);
    let num2 = parseInt(inputNumber2.value);

    // inputTotal.value = add(num1, num2);
    // inputTotal.value = subtract(num1, num2);
    inputTotal.value = num1 + num2;

});

// function add(a, b) {
//     return a + b;
// }

// function subtract(a, b) {
//     return a - b;
// }