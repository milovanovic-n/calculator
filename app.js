/* Starting Value */
/*let startValue = 0;*/
let num1 = "";
let num2 = "";
let sum = 0;
let currentOperator = "";
let nextOperator = "";

const inputValue = document.querySelector("#displayNum");
const displaySum = document.querySelector("#displaySum");
const decimalNum = document.querySelector("#decimalNum");

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
    if(num2 === 0) {
      return sum = 0;
    }
    return divide(num1, num2);
  }
}

/* Select all Number Buttons */
const numberBtns = document.querySelectorAll(".numBtn");
numberBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    inputValue.textContent += btn.textContent;
    if(e.target.innerText === ".") {
      e.target.setAttribute("disabled", "");
    }
  })
})

/* Operate Buttons */
const operatorBtns = document.querySelectorAll(".operatorBtn");
operatorBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    /* Remove disabled attribute on decimal point button */
    decimalNum.removeAttribute("disabled", "");

    /* Check if the user entered value */
    if(inputValue.textContent === "") {
      currentOperator = btn.textContent;
      displaySum.textContent = `${num1} ${currentOperator}`
      return;
    }
    /* 
      -First time we need to assing a value to currentOperator
      -and num1 
    */
    if(currentOperator === "" || num1 === "") {
      currentOperator = btn.textContent;

      /* When the user hits equal button we have num1 */
      if(num1 === "") {
        num1 = parseFloat(inputValue.textContent);
      }
      displaySum.textContent = `${num1} ${currentOperator}`;
      inputValue.textContent = "";
    }
    /* 
      -Every other time we need to assign a value to num2
      -num1 becomes sum
      -store the value of the nextOperator and assign that value to currentOperator but after the calculation
    */
    else {
      num2 = parseFloat(inputValue.textContent);
      nextOperator = btn.textContent;
      sum = operate(currentOperator, num1, num2);
      num1 = sum;
      currentOperator = nextOperator;
      displaySum.textContent = `${num1} ${currentOperator}`;
      inputValue.textContent = "";
    }
  })
});

/* Equal Button */
const equalBtn = document.querySelector("#equalBtn");
equalBtn.addEventListener("click", (e) => {
  if(num1 || num1 === 0 && currentOperator) {
    if(inputValue.textContent === "") {
      return;
    }
    decimalNum.removeAttribute("disabled", "");
    num2 = parseFloat(inputValue.textContent);
    sum = operate(currentOperator, num1, num2);
    num1 = sum;
    displaySum.textContent = num1;
    currentOperator = "";
    num2 = "";
    inputValue.textContent = "";
  }
});

/* Clear Button */
const clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", () => {
  num1 = "";
  num2 = "";
  sum = 0;
  currentOperator = "";
  nextOperator = "";
  inputValue.textContent = "";
  displaySum.textContent = "";
  decimalNum.removeAttribute("disabled", "");
});

/* Delete Button */
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", (e) => {
  /* 
    Remove last entered digit from input field 
    Get the removed digit  
  */
  const getRevomedChar = inputValue.textContent[inputValue.textContent.length - 1];
  if(inputValue.textContent.length > 0) {
    inputValue.textContent = inputValue.textContent.slice(0, -1);
    /* If removed digit is === "." enable that button */
    if(getRevomedChar === ".") {
      decimalNum.removeAttribute("disabled", "");
    }
  } else {
    decimalNum.removeAttribute("disabled", "");
  }
});
