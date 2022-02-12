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

game();


