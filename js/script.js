var numOne = document.getElementById('one');
var numTwo = document.getElementById('two');
var numThree = document.getElementById('three');
var numFour = document.getElementById('four');
var numFive = document.getElementById('five');
var numSix = document.getElementById('six');
var numSeven = document.getElementById('seven');
var numEight = document.getElementById('eight');
var numNine = document.getElementById('nine');
var numZero = document.getElementById('zero');
var numDoubleZero = document.getElementById('double-zero');
var numPlus = document.getElementById('plus');
var numMinus = document.getElementById('minus');
var numMultiply = document.getElementById('multiply');
var numDivide = document.getElementById('divide');
var numDecimal = document.getElementById('decimal');
var numClear = document.getElementById('clear');
var addSum = document.getElementById('add-sum');

numOne.addEventListener('input', add);
numTwo.addEventListener('input', add);
numThree.addEventListener('input', add);
numFour.addEventListener('input', add);
numFive.addEventListener('input', add);
numSix.addEventListener('input', add);
numSeven.addEventListener('input', add);
numEight.addEventListener('input', add);
numNine.addEventListener('input', add);
numZero.addEventListener('input', add);
numDoubleZero.addEventListener('input', add);
numPlus.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);
num.addEventListener('input', add);

/*To change the equation type, just change out the symbol in line 16 addSum.innerText = one+two;*/

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerText = one+two;
}