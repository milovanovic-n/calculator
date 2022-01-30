/* Starting Value */
/*let startValue = 0;*/
let num1 = "";
let num2 = "";
let sum = 0;
let currentOperator = "";
let nextOperator = "";

const inputValue = document.querySelector("#displayNum");
const displaySum = document.querySelector("#displaySum");

/* Add function */
const add = (num1, num2) => num1 + num2;

/* Subtract function */
const subtract = (num1, num2) => num1 - num2;

/* Multiply function */
const multiply = (num1, num2) => num1 * num2;

/* Divide function */
const divide = (num1, num2) => num1 / num2;

/* OPERATE Function 
this function takes operator and 2 numbers
*/  
const operate = (operator, num1, num2) => {
  /* Check is there an operator */
  if(!operator) return "Error: No Operator Found";

  /* Addition */
  if(operator == "+") {
    return add(num1, num2);
  }

  /* Subtraction */
  if(operator == "-") {
    return subtract(num1, num2);
  }

  /* Multyplication */
  if(operator == "*") {
    return multiply(num1, num2);
  }

  /* Division */
  if(operator == "/") {
    return divide(num1, num2);
  }
}

/* Select all Number Buttons */
const numberBtns = document.querySelectorAll(".numBtn");
numberBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    inputValue.value += btn.textContent;
  })
})

/* Operate Buttons */
const operatorBtns = document.querySelectorAll(".operatorBtn");
operatorBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    /* 
      -First time we need to assing a value to currentOperator
      -and num1 
    */
    if(currentOperator === "" && num1 === "") {
      currentOperator = btn.textContent;
      num1 = parseFloat(inputValue.value);
      inputValue.value = "";
      return;
    }
    /* 
      -Every other time we need to assign a value to num2
      -num1 becomes sum
      -store the value of the nextOperator and assign that value to currentOperator but after the calculation
    */
    else {
      num2 = parseFloat(inputValue.value);
      nextOperator = btn.textContent;
      sum = operate(currentOperator, num1, num2);
      num1 = sum;
      currentOperator = nextOperator;
      inputValue.value = "";
    }
    console.log(sum)
  })
});