function getComputerChoice(){
    number = Math.floor((Math.random()) * 3) + 1
    if (number == 1){
        return `rock`;
    }
    else if (number == 2){
        return `scissors`;
    }
    else if (number == 3) {
        return `paper`;
    }
};


function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice == `rock` && computerChoice == `rock`){
            score.textContent = `It's a tie`;
        }
        else if (humanChoice == `scissors` && computerChoice == `scissors`){
            score.textContent = `It's a tie`;
        }
        else if (humanChoice == `paper` && computerChoice == `paper`){
            score.textContent = `It's a tie`;
        }
        else if (humanChoice == `rock` && computerChoice == `scissors`){
            score.textContent = `You win! Rock crushes scissors!`;
            humanScore++
        }
        else if (humanChoice == `rock` && computerChoice == `paper`){
            score.textContent = `You LOSE! Paper covers rock`;
            computerScore++
        }
        else if (humanChoice == `paper` && computerChoice == `rock`){
            score.textContent = `You win! Paper covers rock`;
            humanScore++
        }
        else if (humanChoice == `paper` && computerChoice == `scissors`){
            score.textContent = `You lose! Scissors cuts paper`;
            computerScore++
        }
        else if (humanChoice == `scissors` && computerChoice == `rock`){
            score.textContent = `You Loooooseeee, rock crushes scissors`;
            computerScore++
        }
        else if (humanChoice == `scissors` && computerChoice == `paper`){
            score.textContent = `You win!! Scissors cuts up paper`;
            humanScore++
        }
    }

    document.getElementById("rock").addEventListener("click", function(){
        playRound('rock', getComputerChoice());
        count.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        if (humanScore == 5){
            score.textContent = "Game Over, You Win";
            disableButtons()
        }
        else if (computerScore == 5){
            score.textContent = "Games over, You LOSE"
            disableButtons()
        }
    })
    document.getElementById("paper").addEventListener("click", function(){
        playRound('paper', getComputerChoice());
        count.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        if (humanScore == 5){
            score.textContent = "Game Over, You Win";
            disableButtons()
        }
        else if (computerScore == 5){
            score.textContent = "Games over, You LOSE";
            disableButtons()
        }
    })
    document.getElementById("scissors").addEventListener("click", function(){
        playRound('scissors', getComputerChoice());
        count.textContent = `You: ${humanScore} Computer: ${computerScore}`;
        if (humanScore == 5){
            score.textContent = "Game Over, You Win";
            disableButtons()
        }
        else if (computerScore == 5){
            score.textContent = "Games over, You LOSE"
            disableButtons()
        }
    })

    function disableButtons() {
        let buttons = document.getElementsByClassName("btn"); 
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("disabled", true);
        }
    }
}

playGame();

let score = document.createElement("div");
let count = document.createElement("div")
let body = document.getElementsByTagName("body")[0];
body.appendChild(score);
body.appendChild(count);


