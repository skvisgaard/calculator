class Calculator {
    constructor(previousOperandElm, currentOperandElm) {
        this.previousOperandElm = previousOperandElm;
        this.currentOperandElm = currentOperandElm;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) { 
        if(number === '.' && this.currentOperand.includes('.')) return; // only allow a single '.'
        this.currentOperand = this.currentOperand.toString() + number.toString(); // add numbers after each other
    }

    selectOperation(operation) {
        // Don't allow operations on empty string
        if(this.currentOperand === '') return;

        // If previous operand contains a value, run compute
        if (this.previousOperand !== '') {
            this.compute();
        }

        // When operation is clicked, change current operand to previous and clear current
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);

        if (isNaN(previous) || isNaN(current)) return;

        switch (this.operation) {
            case '+':
                computation = previous + current;
                break;

            case '-':
                computation = previous - current;
                break;
                
            case '×':
                computation = previous * current;
                break;

            case '÷':
                computation = previous / current;
                break;

            default:
                return;

        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];

        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElm.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandElm.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElm.innerText = '';
        }
    }
}

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