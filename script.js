'use strict';

let score = 30;
let highscore = 0;
let randomNum = Math.floor(Math.random() * 30);

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const checkNumber = () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    if (!guess) {
        displayMessage('⛔️Not a number selected!');
    } else if (guess === randomNum) {

        displayMessage("🎉You won!🎉")
        document.querySelector('body').style.background = 'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(18,142,13,1) 44%, rgba(176,255,0,1) 100%)';
        document.querySelector('.number').textContent = randomNum;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if (guess !== randomNum) {

        if (score > 1) {
            const msj = guess > randomNum ? '📈 Valor is to high' : "📉 Valor is to low";
            score--;
            document.querySelector('.score').textContent = score;
            displayMessage(msj);
        } else {
            score--;
            displayMessage('💥 You lose the game.!', score);
            document.querySelector('body').style.background = 'linear-gradient(180deg, rgba(36,0,0,1) 0%, rgba(142,13,13,1) 44%, rgba(255,0,0,1) 100%)';
        }
    }
}

const playAgain = () => {
    score = 30;
    randomNum = Math.floor(Math.random() * 30);

    displayMessage('Start guessing....')
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.background = 'linear-gradient( 90deg, cadetblue 0%, rgb(43, 103, 105) 35%, rgb(32, 72, 73) 100%)';
}
document.querySelector('.again').addEventListener('click',
    playAgain);
document.querySelector('.check').addEventListener('click', checkNumber);
