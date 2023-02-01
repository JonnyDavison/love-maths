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
    runGame('addition');
})
/**
 * The main game "loop" , called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){
    //creates 2 random numbers
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
    
    if (gameType === "addition"){
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type ${gameType}`)
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
    } else {
        alert(`Ohh Dear... you answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]}!`);
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
    } else{
        alert(`Unimplimented operator ${operator}`);
        throw `Unimplimented operator ${operator}. Aborting!`; 
    }

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
     document.getElementById('operand1').textContent = operand1;   
     document.getElementById('operand2').textContent = operand2;
     document.getElementById('operator').textContent = '+';
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}