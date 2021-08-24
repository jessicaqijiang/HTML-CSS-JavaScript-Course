function rollDice() {
    let goldCoin = 0;
    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        alert ("You roll a " + roll +".");
        if (roll === 1){ //rule 1: roll a 1, game over
            alert ("Game over, no more rolls!")
            break;
        }
        else if ((roll === 4) && (goldCoin > 0)){ // rule 5: when roll is 4, then 1 coin is subtracted from the total before the next roll, only if they have more than 0 coins
            goldCoin = goldCoin + roll - 1
        }
        else if ((roll === 5) || (roll === 6)){// rule 3&4: then you win the relative coins
            goldCoin += roll
            alert("Congratulations, you win " + roll + " gold coins!"); 
        }else{
            alert("Sorry, no coins this time, but you can continus"); // rule 2: when roll is 2 & 3, you win nothing but you can continue the game
            continue;
        }
        alert ("You currently have won a total of " + goldCoin + " gold coins!\n\nYou have " + (10-i) + " rolls left.\n\nLet's continue");
    }
}