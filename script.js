
const playButton = document.querySelector('.play-btn');
const squareContainer = document.querySelector('.square-container');


playButton.addEventListener('click', function(){
    
    squareContainer.innerHTML = "";

    for ( let i = 0; i < 100; i++) {
    
        squareAdding = squareAdd();
        squareContainer.append(squareAdding);
        
        squareAdding.innerHTML = i;
    }


});


function squareAdd(){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.addEventListener('click', function(){
        
        let listHundred = 

        if (arrayBomb.includes()) {


        } else {
            newSquare.classList.toggle('skyblue');
            console.log("hai cliccato un tasto!");
        }
        
    
    });

    return newSquare;
}


const arrayBomb = getRandomBombNumber(1, 100);
console.log(arrayBomb);

function getRandomBombNumber(minNum, maxNum) {
    let randomNumber;
    const blacklist = [];

    // continua a girare finche non mi trovi 16 numeri diversi compresi tra 1 e 100
    while (blacklist.length < 16) {
        
        randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
        console.log(randomNumber);
        

        if (blacklist.includes(randomNumber) === false) {
            blacklist.push(randomNumber);
        };
    };

    return blacklist;
}