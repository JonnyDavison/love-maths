// Wait for the DOM to finish loading before running the Game
// Get button elements & add event listeners to them 

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function(){
            if (this.getAttribute('data-type') === "submit"){
               alert("You clicked Submit");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})
/**
 * The main game "loop" , called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(){
    //creates 2 random numbers
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}

function checkAwnser(){

}

function calculateCorrectAnswer(){

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}