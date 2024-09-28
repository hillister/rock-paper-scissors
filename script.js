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

function getHumanChoice(){
    answer = prompt(`choose rock paper or scissors: `).toLowerCase()
    if (answer == `scissors` || answer == `rock` || answer == `paper`){
        return answer;
    }
    else {
        return `That is not an option`;
    }
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    
    function playRound(humanChoice, computerChoice){
        if (humanChoice == `rock` && computerChoice == `rock`){
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
    

    
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`You: ${humanScore}`,`Computer: ${computerScore}`);

}

playGame();



const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const btns = document.getElementsByTagName("button");


