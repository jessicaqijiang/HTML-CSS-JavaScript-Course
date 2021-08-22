let COLORS_ARRAY = ['blue','cyan','gold','gray','green','magenta','orange','red','white','yellow'];
COLORS_ARRAY.sort()
colorarray_length = COLORS_ARRAY.length

//this is called by the onclick of the Start Game button
function runGame() {
    let guess = '';
    let correct = false;
    let numTries = 0;

    // Generate random interget number between array's index, then take that vaule and look up the index to find the target color 
    const targetIndex = Math.floor(Math.random() * colorarray_length);
    const target = COLORS_ARRAY[targetIndex];
    console.log("The target color is " + target);

    //do - while loop for prompt color guessing 
    do {
        guess = prompt("I am thinking of one of these colors: \n\n" + COLORS_ARRAY.join(", ")+ "\n\n What color am I thinking of? \n");
        if (guess.toLowerCase() === null) {
            alert ("Please guess a color, Otherwise GameOver")
            return;
            }
            numTries += 1; 
            correct = checkGuess(guess,target);
        } while (!correct); //correct will be set to true on correct guess at the end of checkGuess function
    alert("Congratulations! Your have guessed the color! \n\nIt took you " + numTries + " guesses to finish the game! \n\nHit [OK] to see the color in the background.\n"); 
    document.body.style.background = guess;
    }

//this is called by checking the guess color to compare target color
function checkGuess(guess, target) {
    let correct = false;
    if (!COLORS_ARRAY.includes(guess.toLowerCase())) {// guess not in the list 
        alert("Sorry, I don't recognize your color. \n\n Please try again. \n\n");
    }else if (guess.toLowerCase()> target) { // bigger than target
        alert("Sorry, your guess is incorrect. \n\n Hint: your color is alphabetically higher than mine. \n\n Please try again.");
    }else if (guess.toLowerCase() < target) { // smaller than target
        alert("Sorry, your guess is incorrect. \n\n Hint: your color is alphabetically lower than mine. \n\n Please try again.");
    }else {
        correct = true;
    }
    return correct;
    }    
