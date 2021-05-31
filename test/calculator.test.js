const Calculator = require('../models/calculator');

test('clear() clears currend operand', () => {
    // Arrange
    const calculator = new Calculator();
    calculator.currentOperand = '2';

    // Act 
    calculator.clear();

    // Assert 
    expect(calculator.currentOperand).toBe('2');
});


test('clear() clears previous operand', () => {
    const calculator = new Calculator();
    calculator.previousOperand = '5';

    calculator.clear();

    expect(calculator.previousOperand).toBe('');
});


test('delete() should delete last digit', () => {
    const calculator = new Calculator();
    calculator.currentOperand = '35';

    calculator.delete();

    expect(calculator.currentOperand).toBe('3');
});


test('compute() should add', () => {
    const calculator = new Calculator();
    calculator.previousOperand = '3';
    calculator.currentOperand = '2';
    calculator.operation = '+';

    calculator.compute();

    // currentOperand is parsed to Float to do computations, ergo no string
    expect(calculator.currentOperand).toBe(5);
});

test('compute() should substract', () => {
    const calculator = new Calculator();
    calculator.previousOperand = '3';
    calculator.currentOperand = '2';
    calculator.operation = '-';

    calculator.compute();

    // currentOperand is parsed to Float to do computations, ergo no string
    expect(calculator.currentOperand).toBe(1);
});

test('compute() should multiply', () => {
    const calculator = new Calculator();
    calculator.previousOperand = '3';
    calculator.currentOperand = '2';
    calculator.operation = '×';

    calculator.compute();

    // currentOperand is parsed to Float to do computations, ergo no string
    expect(calculator.currentOperand).toBe(6);
});

test('compute() should divide', () => {
    const calculator = new Calculator();
    calculator.previousOperand = '9';
    calculator.currentOperand = '3';
    calculator.operation = '÷';

    calculator.compute();

    // currentOperand is parsed to Float to do computations, ergo no string
    expect(calculator.currentOperand).toBe(3);
});

