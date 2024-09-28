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
            console.log(`It's a tie`);
        }
        else if (humanChoice == `scissors` && computerChoice == `scissors`){
            console.log(`It's a tie`);
        }
        else if (humanChoice == `paper` && computerChoice == `paper`){
            console.log(`It's a tie`);
        }
        else if (humanChoice == `rock` && computerChoice == `scissors`){
            console.log (`You win! Rock crushes scissors!`);
            humanScore++
        }
        else if (humanChoice == `rock` && computerChoice == `paper`){
            console.log(`You LOSE! Paper covers rock`);
            computerScore++
        }
        else if (humanChoice == `paper` && computerChoice == `rock`){
            console.log(`You win! Paper covers rock`);
            humanScore++
        }
        else if (humanChoice == `paper` && computerChoice == `scissors`){
            console.log(`You lose! Scissors cuts paper`);
            computerScore++
        }
        else if (humanChoice == `scissors` && computerChoice == `rock`){
            console.log(`You Loooooseeee, rock crushes scissors`);
            computerScore++
        }
        else if (humanChoice == `scissors` && computerChoice == `paper`){
            console.log(`You win!! Scissors cuts up paper`)
            humanScore++
        }
    }

    document.getElementById("rock").addEventListener("click", function(){
        playRound('rock', getComputerChoice());
        console.log(`You: ${humanScore}`,`Computer: ${computerScore}`);
    })
    document.getElementById("paper").addEventListener("click", function(){
        playRound('paper', getComputerChoice());
        console.log(`You: ${humanScore}`,`Computer: ${computerScore}`);
    })
    document.getElementById("scissors").addEventListener("click", function(){
        playRound('scissors', getComputerChoice());
        console.log(`You: ${humanScore}`,`Computer: ${computerScore}`);
    })
}

playGame();


