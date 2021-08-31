window.addEventListener('load', generateFaces);
let numberOfFaces = 5;
const theLeftSide = document.getElementById('leftside');  
const theRightSide = document.getElementById('rightside');
let numTries = 0;

function generateFaces() {
    for (let i = 0; i< numberOfFaces; i++) {  
        let face = document.createElement('img');
        face.src = "images/smile.png";
        const randomTop = Math.floor(Math.random() * 401) + 1;
        const randomLeft = Math.floor(Math.random() * 401) + 1;
        face.style.top = randomTop + 'px';
        face.style.left = randomLeft + 'px';
        theLeftSide.appendChild(face);
    }
    
    const therightsidemirror = theLeftSide.cloneNode(true);
    therightsidemirror.removeChild(therightsidemirror.lastChild);
    theRightSide.appendChild(therightsidemirror);

    theLeftSide.lastChild.addEventListener('click', nextLevel);
    numTries += 1
    document.body.addEventListener('click',gameOver);
    document.getElementById("mute-box-y").addEventListener('click',mutebox);
    document.getElementById("mute-box-n").addEventListener('click',mutebox);
}

function gameOver() {
    alert("Game over! \n\n You passed Level " + numTries + " ! \n\nClick [Restart Game] to try the game again.\n");
    theLeftSide.lastChild.removeEventListener('click',nextLevel);
    document.body.removeEventListener('click',gameOver);
}

function nextLevel() {
    event.stopPropagation();
    alert("next level");
    numberOfFaces += 5;
    while(theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }
    generateFaces();
}

function mutebox() {
    event.stopPropagation();
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function replay() {
    let unmute = document.getElementById("mute-box-n").checked;
    alert(unmute);
    event.stopPropagation();
    if (unmute == 'true') {
        document.getElementById('countdownSound').play();
        sleep(4000);
    }
    window.location.reload();
}


