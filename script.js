const Array = ["Rock", "Paper", "Scissors"];
// a b c d e f g h i j k l m n o p r  s t u v w 

function computerPlay()
{
    return Array[Math.floor(Math.random() * Array.length)];
}

function playRound(playerSelection, computerSelection)
{
    console.log(computerSelection);
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        console.log("remis");
        return 0;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
    console.log("You won! " + playerSelection + " beats " + computerSelection);
    return 1;
    }
    else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "paper" && computerSelection == "scissors")
    ){
    console.log("You lost! " + computerSelection + " beats " + playerSelection);
    return -1;
    }

    // const playerSelectionRead = window.prompt("Rock, Paper or Scissor?");
    // console.log(playerSelectionRead);
    console.log("error");
return 0;

}

function game()
{
    let wynik =0;
    for(let i = 0; i < 5; i++)
    {
        const playerSelectionRead = window.prompt("Rock, Paper or Scissor?");

        wynik += playRound(playerSelectionRead,computerPlay());
    }
    

    if(wynik > 0)
    {
        console.log("You won! ");
    }else if (wynik < 0)
    {
        console.log("You lose! ");
    }else
    {
        console.log("remis! ");
    }



}

// game();

let playerPlay = null;
let rounds = 0;
let playerScore = 0;
let computerScore = 0;
let score = 0;
const score_p = document.querySelector('.score p');
const end_game_p = document.querySelector('.end_game');


function getScore(score){
    
    if(score == 0)
    {
        playerScore += 0;
        computerScore += 0;
    }else if (score == 1)
    {
        playerScore += 1;
    }else if (score == -1)
    {
        computerScore +=1;
    }
    
}
function reapeatGame(rounds)
{
    if(rounds > 4)
    {
        score_p.textContent=`${playerScore} : ${computerScore}`;
        end_game_p.textContent= "repeat?";
        end_game_p.onclick = () => {
            rounds = 0;
            playerScore = 0;
            computerScore = 0;
        };
    }
}
function setScore()
{
    score_p.textContent=`${playerScore} : ${computerScore}`;
}
function play(playerPlay)
{
    
    if(playerPlay == null || rounds >= 5) {
        return;
    }else{
   return playRound(Array[playerPlay],computerPlay());
    }
}

const rock = document.querySelector('.rock');

rock.onclick = () => {
    playerPlay = 0;
    score =  play(playerPlay);
    getScore(score);
    rounds++;
    reapeatGame(rounds);
    setScore();
    
}

const paper = document.querySelector('.paper');

paper.onclick = () => {
    playerPlay = 1;
    score = play(playerPlay);
    getScore(score);
    setScore();
    rounds++;
    reapeatGame(rounds);
}

const scissors = document.querySelector('.scissors');

scissors.onclick = () => {
    playerPlay = 2;
    score = play(playerPlay);
    getScore(score);
    setScore();
    rounds++;
    reapeatGame(rounds);
}






// const scissors = document.querySelector('.scissors');

// rock.addEventListener('click', (event) =>
// {
//     console.log('scissors')
// });