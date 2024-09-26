function getComputerchoice(){
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


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice()
    computerChoice = getComputerchoice()

    if (humanChoice == `rock` && computerChoice == `rock`){
        console.log(`It's a tie`);
    }
    else if (humanChoice == `rock` && computerChoice == `scissors`){
        console.log (`You win! Rock crushes scissors!`);
    }
    else if (humanChoice == `rock` && computerChoice == `paper`){
        console.log(`You LOSE! Paper covers rock`);
    }
    else if (humanChoice == `paper` && computerChoice == `rock`){
        console.log(`You win! Paper covers rock`);
    }
    else if (humanChoice == `paper` && computerChoice == `scissors`){
        console.log(`You lose! Scissors cuts paper`);
    }
    else if (humanChoice == `scissors` && computerChoice == `rock`){
        console.log(`You Loooooseeee, rock crushes scissors`);
    }
    else if (humanChoice == `scissors` && computerChoice == `paper`){
        console.log(`You win!! Scissors cuts up paper`)
    }
}

playRound()