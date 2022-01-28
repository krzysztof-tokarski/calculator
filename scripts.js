let operator = null
let operand1 = null
let operand2 = null
let displayValue = ""
let buttonValue = null
let displayFlag = 0
let afterCalculationFlag = 0

const b0 = document.querySelector('#b0');
const b1 = document.querySelector('#b1');
const b2 = document.querySelector('#b2');
const b3 = document.querySelector('#b3');
const b4 = document.querySelector('#b4');
const b5 = document.querySelector('#b5');
const b6 = document.querySelector('#b6');
const b7 = document.querySelector('#b7');
const b8 = document.querySelector('#b8');
const b9 = document.querySelector('#b9');
const digitButtons = document.querySelectorAll('.digit');
const displayScreen = document.querySelector('#displayScreen');

const decimalButton = document.querySelector('#decimalButton');

const divideButton = document.querySelector('#divideButton');
const multiplyButton = document.querySelector('#multiplyButton');
const subtractButton = document.querySelector('#subtractButton');
const addButton = document.querySelector('#addButton');
const equalsButton = document.querySelector('#equalsButton');
const allClearButton = document.querySelector('#allClearButton');
const clearEntryButton = document.querySelector('#clearEntryButton');
const createNegativeButton = document.querySelector('#createNegativeButton');
const calculationButtons = document.querySelectorAll('.calculate')

createNegativeButton.addEventListener('click',createNegative)


allClearButton.addEventListener('click', allClear)
clearEntryButton.addEventListener('click', clearEntry)

digitButtons.forEach ((digitButton) => {
     digitButton.addEventListener('click', changeDisplayValue)
})

function changeDisplayValue () {
     if (displayValue.length == 11) {
          displayScreen.textContent = "TOO MUCH!";
          return
     }
     if (afterCalculationFlag == 1) {
          allClear()
     }
     if (operand1 == null) {
          if (displayValue == "0") {
               displayValue =""
          }
          buttonValue = this.textContent;
          displayValue += buttonValue;
          displayScreen.textContent = displayValue; 
     } else if (operand1 != null) {
          if  (displayValue == operand1 && displayFlag != 1) {
               displayValue = ""
               displayFlag = 1 
          }
          if (operand1 != null && displayValue=="0" && this.textContent == "0") {
               return
          }
          if (operand1 != null && displayValue=="0") {
               return
          }
          buttonValue = this.textContent;
          displayValue += buttonValue;
          displayScreen.textContent = displayValue;
     } 
}

calculationButtons.forEach((calculationButton) => {
     calculationButton.addEventListener('click', establishOperator)
     calculationButton.addEventListener('click', operate)
})

function establishOperator () {
     if (displayValue != "" && operator == null) {
     operator = this.dataset.value
     establishOperand1 ()
     afterCalculationFlag = 0
     }    
}

function establishOperand1 () {
     operand1 = parseFloat(displayValue);
     buttonValue = null
}

function establishOperand2 () {
     operand2 = parseFloat(displayValue);
     buttonValue = null
}

function operate () {
     let result
     if (displayFlag == 1) {
          establishOperand2 ()
     if (operator === "add") {
          result = add (operand1,operand2)
     } else if (operator === "subtract") {
          result = subtract (operand1,operand2)
     } else if (operator === "multiply") {
          result = multiply (operand1,operand2)
     } else if (operator === "divide") {
          result = divide (operand1,operand2)
          if (operand1 == 0 || operand2 == 0) {
               result = "ERROR"}
     }
     if (typeof result == "number"){
          let shorter = result.toString().slice(0,10)
          result = parseFloat(shorter)
     }
     let check =  result.toString()
     if (check.length > 10) {
          displayScreen.textContent = "TOO MUCH!";
          return
     }
     displayScreen.textContent = result;
     displayValue = result
     operand1 = result
     operator = null
     operand2 = null 
     displayFlag = 0
     afterCalculationFlag = 1
     }    
}

function createNegative () {
     let num = parseFloat(displayValue)
     if (num > 0) {
          displayValue = -Math.abs(num);
          displayScreen.textContent = displayValue;
     } else if (num < 0 ) {
          displayValue = Math.abs(num);
          displayScreen.textContent = displayValue;
     }
}


function allClear () {
     displayScreen.textContent = "0"; 
     displayValue = ""
     buttonValue = null
     operator = null
     operand1 = null
     operand2 = null
     displayFlag = 0
     afterCalculationFlag = 0
}

function add (operand1,operand2) {
     return operand1+operand2
}

function subtract (operand1,operand2) {
     return operand1-operand2
}

function multiply (operand1,operand2) {
     return operand1*operand2 
}

function divide (operand1,operand2) {
     return operand1/operand2 
}

function clearEntry () {
     let stringed = displayValue.toString()
     displayValue = stringed.substring(0, stringed.length - 1)
     buttonValue = stringed.substring(stringed.length - 1);
     displayScreen.textContent = displayValue

     if (displayScreen.textContent.length == 0) {
          displayScreen.textContent = "0"
     }
}























// const gridInputButton = document.querySelector('.gridInputButton')
// const gridInput = document.querySelector('.gridInput');
// const resetButton = document.querySelector('.resetButton');
// const buttons = document.querySelectorAll('.button');
// let gridCells = null
// let gridContainer = null
// let gridColumns = null
// let input = null
// let toggle = false

// function createGrid (num) {
//      if (gridContainer != null) {
//           main.removeChild(gridContainer)
//      }
//      if (num >= 10 && num <= 100) {
//           gridContainer = document.createElement('div');
//           gridContainer.classList.add('gridContainer');
//           main.appendChild(gridContainer);
//           const cellsAmountCheckpoint = num
//           let cellsAmountWorker = cellsAmountCheckpoint
//           for (num; num > 0; num--) {
//                const gridColumn = document.createElement('div');
//                gridColumn.classList.add('gridColumn');
//                gridContainer.appendChild(gridColumn);
//                for (cellsAmountWorker; cellsAmountWorker > 0; cellsAmountWorker--) {
//                     const gridCell = document.createElement('div');
//                     gridCell.classList.add('gridCell');
//                     gridColumn.appendChild(gridCell);
//                }
//                cellsAmountWorker = cellsAmountCheckpoint
//           }
//           gridColumns = document.querySelectorAll('.gridColumns');
//           gridCells = document.querySelectorAll('.gridCell');
//           gridContainer.addEventListener('click',colorBlack)
//      } else {
//           gridContainer = null
//      }
// }

// function generateGrid () { 
//      input = document.getElementById("gridInput").value;
//      createGrid(input)
// }

// function colorBlack () {

//      if (toggle === false) {
//           gridCells.forEach ((gridCell) => {
//                gridCell.addEventListener('mouseover', handlerColor)
//           toggle = true
//      })} else if (toggle === true) { 
//           gridCells.forEach ((gridCell) => {
//                gridCell.removeEventListener('mouseover', handlerColor)
//           toggle = false
//      })     
//      }
// }

// function handlerColor() {
//      this.classList.add("black")
// }


// // buttons
// gridInputButton.addEventListener('click',generateGrid)


// buttons.forEach ((button) => {
//      button.addEventListener('mouseover', handlerHover)
//      button.addEventListener('mouseleave',handlerUnhover)
//      }
// )

// resetButton.addEventListener('click',reset)

// function handlerHover() {
//      this.classList.add("hover")
// }

// function handlerUnhover() {
//      this.classList.remove("hover")
// }

// function reset () {
//      gridCells.forEach ((gridCell) => {
//           gridCell.classList.remove("black")
//           gridCell.removeEventListener('mouseover', handlerColor)
//      })
// }
