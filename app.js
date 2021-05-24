const Calculator = require('./models/calculator');

const initCalculator = () => {
    const numberBtns = document.querySelectorAll('.number');
    const operationBtns = document.querySelectorAll('.operation');
    const allClearBtn = document.querySelector('.all-clear');
    const deleteBtn = document.querySelector('.delete');
    const equalsBtn = document.querySelector('.equals');
    const previousOperand = document.querySelector('.previous-operand');
    const currentOperand = document.querySelector('.current-operand');

    const calculator = new Calculator(previousOperand, currentOperand);

    numberBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            calculator.appendNumber(btn.innerText);
            calculator.updateDisplay();
        })
    });

    operationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            calculator.selectOperation(btn.innerText);
            calculator.updateDisplay();
        })
    });

    equalsBtn.addEventListener('click', btn => {
        calculator.compute();
        calculator.updateDisplay();
    });

    allClearBtn.addEventListener('click', btn => {
        calculator.clear();
        calculator.updateDisplay();
    });

    deleteBtn.addEventListener('click', btn => {
        calculator.delete();
        calculator.updateDisplay();
    });

}

// Start calculator
initCalculator();