// Wait for the DOM to finish loading before running the Game
// Get button elements & add event listeners to them 

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === "submit"){
               checkAwnser();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
            }
        })
    }
    document.getElementById('answer-box').addEventListener('keydown', function(event){
        if (event.key === "Enter"){
            checkAwnser();
        }
    })
    runGame('addition');
})
/**
 * The main game "loop" , called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){

    document.getElementById('answer-box').value = ""
    document.getElementById('answer-box').focus()
    //creates 2 random numbers
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
    
    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);      
    } else if (gameType === "subtract"){
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "division"){
        displayDivideQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting!`;
    }
}
/**
 * Checks the answer aganist the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAwnser(){
    
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right! :D")
        incrementScore()
    } else {
        alert(`Ohh Dear... you answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
    }
    runGame(calculatedAnswer[1]);
}
/**
 * Gets the Operands (Numbers) and the operator (+ - X /)
 * directly from the dom, returns the correct answer
 */
function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === 'x') {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 / operand2, "divison"];
    } else{
        alert(`Unimplimented operator ${operator}`);
        throw `Unimplimented operator ${operator}. Aborting!`; 
    }

}
/**
 * Gets the current score fromthe DOM and adds 1
 */
function incrementScore() {
    
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * Gets the incorrect answer score fromthe DOM and adds 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
     document.getElementById('operand1').textContent = operand1;   
     document.getElementById('operand2').textContent = operand2;
     document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;   
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1; 
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;   
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivideQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;   
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '/';
}