
const playButton = document.querySelector('.play-btn');
const squareContainer = document.querySelector('.square-container');


playButton.addEventListener('click', function(){
    
    squareContainer.innerHTML = "";

    for ( let i = 0; i < 100; i++) {
    
        squareAdding = SquareAdd();
        squareContainer.append(squareAdding);
        
        squareAdding.innerHTML = i;
    }

});


function SquareAdd(){
    const newSquare = document.createElement('div');
    newSquare.classList.add('square');
    newSquare.addEventListener('click', function(){
    
        newSquare.classList.toggle('skyblue');
        console.log("hai cliccato il tasto [1]");
    
    });

    return newSquare;
}