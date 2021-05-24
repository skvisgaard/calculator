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

module.exports = Calculator;