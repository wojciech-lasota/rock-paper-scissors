const Array = ['rock', 'paper', 'scissors'];

function computerPlayed(){
    return Array[Math.floor(Math.random() * Array.length)];
}

let rockButton = document.querySelector('.rockButton');
let paperButton = document.querySelector('.paperButton');
let scissorsButton = document.querySelector('.scissorsButton');
let pScorePlayer = document.querySelector('.score .player');
let pScoreComputer = document.querySelector('.score .computer');
let result_describe = document.querySelector('.result_describe');
let footerP = document.querySelector('footer p');
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let score = 0;





function playRound(playerSelection, computerSelection)
{
    // console.log(computerSelection);
    // computerSelection = computerSelection.toLowerCase();
    // playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        console.log("remis");
        result_describe.textContent = `Remis!`;
        return 0;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
    console.log("You won! " + playerSelection + " beats " + computerSelection);
    result_describe.textContent=`You won! ${playerSelection} beats ${computerSelection}`
    return 1;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")
    ){
    console.log("You lost! " + computerSelection + " beats " + playerSelection);
    result_describe.textContent=`You lost! ${computerSelection} beats ${playerSelection}`
    return -1;
    }

    // const playerSelectionRead = window.prompt("Rock, Paper or Scissor?");
    // console.log(playerSelectionRead);
    console.log("error");
return 0;

}
function getScore() {
    pScorePlayer.textContent = `${playerScore}`;
    pScoreComputer.textContent = `${computerScore}`;
}




function setScore(score) {
    if(score == 1){
    playerScore +=1;
    }else if(score == -1)
    {
        computerScore += 1;
    }
}

function play(number)
{
    if(rounds < 5)
    {
    score = playRound(Array[number],computerPlayed());
    setScore(score);
    getScore();
    console.log(':)');
    rounds++;
    }
    if(rounds == 5)
    {
        footerP.textContent = `CLICK HERE TO START AGAIN`;
        footerP.addEventListener('click', () => {
            playerScore = 0;
           console.log('s');
            computerScore = 0;
            rounds = 0;
            getScore();
            footerP.textContent="";
            console.log('taki chuj');
        });
    }
}

rockButton.addEventListener('click',() =>{
    console.log('rock');
    play(0);
    });
    
paperButton.addEventListener('click',() =>{
    console.log('paperButton');
    play(1);
    });
scissorsButton.addEventListener('click',() =>{
    console.log('scissorsButton');
    play(2);
    });

    