
const playButton = document.querySelector('.play-btn');
const squareContainer = document.querySelector('.square-container');
let arrayBomb;

playButton.addEventListener('click', function(){
    
    squareContainer.innerHTML = "";

    arrayBomb = getRandomBombNumber(1, 100);
    console.log(arrayBomb);

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
        
        const squareNumber = parseInt(newSquare.innerHTML);

        if (arrayBomb.includes(squareNumber)) {
            newSquare.classList.toggle('red-bomb');
            console.log("hai cliccato una Bomba!");


        } else {
            newSquare.classList.toggle('skyblue');
            console.log("hai cliccato un tasto!");
        }
        
    
    });

    return newSquare;
}





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