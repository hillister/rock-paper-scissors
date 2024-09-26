function getComputerchoice(){
    number = Math.floor((Math.random()) * 3) + 1
    if (number == 1){
        console.log(`rock`);
    }
    else if (number == 2){
        console.log(`scissors`);
    }
    else if (number == 3) {
        console.log(`paper`);
    }
};

function getHumanChoice(){
    answer = prompt(`choose rock paper or scissors: `).toLowerCase()
    if (answer == `scissors`){
        console.log(answer);
    }
    else if (answer == `paper`){
        console.log(answer);
    }
    else if (answer == `rock`){
        console.log(answer);
    }
    else {
        console.log(`That is not an option`)
    }
}


let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    var humanChoice = getHumanChoice()
    var computerChoice = getComputerchoice()

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