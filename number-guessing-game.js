function runGame() {
    let guessString = '';
    let guessNumber = 0;
    let correct = false;
    let numTries = 0;

    const target = Math.floor(Math.random()*100)+1;
    // const randomnumber : Math.random() * 100
    // const randomInterger: Math.floor(randomnumber) -> from 0 to 99
    // targer number is from 1 to 100, so we need to add 1

    do {
        guessString = prompt("I am thinking of a number in the range of 1 to 100. \n\nWhat is the number?");
        guessNumber = +guessString;
        numTries += 1;
        correct = checkGuess(guessNumber,target);
    } while (!correct);

    alert("Your got it. The number was : "+ target +".\n\n It took you " + numTries + ' tries to guess correctly.');
}

function checkGuess(guessNumber,target) {
    let correct = false;
    
    if (isNaN(guessNumber)) {
        alert("You have not entered the number. \n\n Please enter a number in the 1-100 range");
    }else if ((guessNumber < 1) || (guessNumber > 100)) { // over the range
        alert("Please enter an interger in the 1-100 range.");
    }else if (guessNumber > target) { // bigger than target
        alert("Your number is too larger");
    }else if (guessNumber < target) { // smaller than target
        alert("Your number is too small");
    }else {
        correct = true;
    }
    return correct;
}