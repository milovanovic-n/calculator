/* Starting Value */
/*let startValue = 0;*/
let displayNum = document.querySelector("#displayNum").textContent;
displayNum = parseFloat(displayNum);

function populateDisplay() {
  
}

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
  /* Check is an operator valid operator */
  if(operator !== "+" || operator !== "-" || operator !== "*" || operator !== "/") {
    return "Error: Please enter valid operator";
  }

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