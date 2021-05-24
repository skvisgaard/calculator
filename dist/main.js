/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Calculator = __webpack_require__(/*! ./models/calculator */ \"./models/calculator.js\");\r\n\r\nconst initCalculator = () => {\r\n    const numberBtns = document.querySelectorAll('.number');\r\n    const operationBtns = document.querySelectorAll('.operation');\r\n    const allClearBtn = document.querySelector('.all-clear');\r\n    const deleteBtn = document.querySelector('.delete');\r\n    const equalsBtn = document.querySelector('.equals');\r\n    const previousOperand = document.querySelector('.previous-operand');\r\n    const currentOperand = document.querySelector('.current-operand');\r\n\r\n    const calculator = new Calculator(previousOperand, currentOperand);\r\n\r\n    numberBtns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            calculator.appendNumber(btn.innerText);\r\n            calculator.updateDisplay();\r\n        })\r\n    });\r\n\r\n    operationBtns.forEach(btn => {\r\n        btn.addEventListener('click', () => {\r\n            calculator.selectOperation(btn.innerText);\r\n            calculator.updateDisplay();\r\n        })\r\n    });\r\n\r\n    equalsBtn.addEventListener('click', btn => {\r\n        calculator.compute();\r\n        calculator.updateDisplay();\r\n    });\r\n\r\n    allClearBtn.addEventListener('click', btn => {\r\n        calculator.clear();\r\n        calculator.updateDisplay();\r\n    });\r\n\r\n    deleteBtn.addEventListener('click', btn => {\r\n        calculator.delete();\r\n        calculator.updateDisplay();\r\n    });\r\n\r\n}\r\n\r\n// Start calculator\r\ninitCalculator();\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./models/calculator.js":
/*!******************************!*\
  !*** ./models/calculator.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class Calculator {\r\n    constructor(previousOperandElm, currentOperandElm) {\r\n        this.previousOperandElm = previousOperandElm;\r\n        this.currentOperandElm = currentOperandElm;\r\n        this.clear();\r\n    }\r\n\r\n    clear() {\r\n        this.currentOperand = '';\r\n        this.previousOperand = '';\r\n        this.operation = undefined;\r\n    }\r\n\r\n    delete() {\r\n        this.currentOperand = this.currentOperand.toString().slice(0, -1);\r\n    }\r\n\r\n    appendNumber(number) { \r\n        if(number === '.' && this.currentOperand.includes('.')) return; // only allow a single '.'\r\n        this.currentOperand = this.currentOperand.toString() + number.toString(); // add numbers after each other\r\n    }\r\n\r\n    selectOperation(operation) {\r\n        // Don't allow operations on empty string\r\n        if(this.currentOperand === '') return;\r\n\r\n        // If previous operand contains a value, run compute\r\n        if (this.previousOperand !== '') {\r\n            this.compute();\r\n        }\r\n\r\n        // When operation is clicked, change current operand to previous and clear current\r\n        this.operation = operation;\r\n        this.previousOperand = this.currentOperand;\r\n        this.currentOperand = '';\r\n    }\r\n\r\n    compute() {\r\n        let computation;\r\n        const previous = parseFloat(this.previousOperand);\r\n        const current = parseFloat(this.currentOperand);\r\n\r\n        if (isNaN(previous) || isNaN(current)) return;\r\n\r\n        switch (this.operation) {\r\n            case '+':\r\n                computation = previous + current;\r\n                break;\r\n\r\n            case '-':\r\n                computation = previous - current;\r\n                break;\r\n                \r\n            case '×':\r\n                computation = previous * current;\r\n                break;\r\n\r\n            case '÷':\r\n                computation = previous / current;\r\n                break;\r\n\r\n            default:\r\n                return;\r\n\r\n        }\r\n        this.currentOperand = computation;\r\n        this.operation = undefined;\r\n        this.previousOperand = '';\r\n    }\r\n\r\n    getDisplayNumber(number) {\r\n        const stringNumber = number.toString();\r\n        const integerDigits = parseFloat(stringNumber.split('.')[0]);\r\n        const decimalDigits = stringNumber.split('.')[1];\r\n\r\n        let integerDisplay;\r\n        if (isNaN(integerDigits)) {\r\n            integerDisplay = '';\r\n        } else {\r\n            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });\r\n        }\r\n\r\n        if (decimalDigits != null) {\r\n            return `${integerDisplay}.${decimalDigits}`\r\n        } else {\r\n            return integerDisplay;\r\n        }\r\n    }\r\n\r\n    updateDisplay() {\r\n        this.currentOperandElm.innerText = this.getDisplayNumber(this.currentOperand);\r\n        if (this.operation != null) {\r\n            this.previousOperandElm.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;\r\n        } else {\r\n            this.previousOperandElm.innerText = '';\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Calculator;\n\n//# sourceURL=webpack:///./models/calculator.js?");

/***/ })

/******/ });