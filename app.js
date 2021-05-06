const defaultResult = 0;
let currentResult = defaultResult ;
let logEntries = [];

//Gets value in input field
function getUserNumberInput() {
    return parseInt(usrInput.value);
}
//shows output and calculation log
function  createAndWriteOutput (operator, resultBeforeCalc, calcNumber){
    const calcDescripton =`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescripton);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier, 
        prevResult:  prevResult,
        number: enteredNumber,
        result: currentResult
    };
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initialResult,enteredNumber );
    writeToLog('ADD',initialResult, enteredNumber, currentResult);
}
function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initialResult,enteredNumber );
    writeToLog('SUBTRACT',initialResult, enteredNumber, currentResult);
}

function multiply () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initialResult,enteredNumber );
    writeToLog('MULTIPLY',initialResult, enteredNumber, currentResult);
}

function divide () {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initialResult,enteredNumber );
    writeToLog('DIVIDE',initialResult, enteredNumber, currentResult);
} 
addBtn.addEventListener('click',add);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);
