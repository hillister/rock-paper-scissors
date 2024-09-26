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
    answer = prompt(`choose rock paper or scissors: `)
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

console.log(`You chose:`);
getHumanChoice()

console.log(`Computer chose:`);
getComputerchoice()