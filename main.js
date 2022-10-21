const currentSize = document.querySelector('#currentSize');
const main = document.querySelector('.main');
const drawArea = document.querySelector('.draw-area');

const sizebtn = document.getElementById('size-change');
const clearbtn = document.getElementById('clear');

let userInput = 16;

document.body.onload = drawGrid(userInput);
document.body.onload = currentSize.textContent = `${userInput} x ${userInput}`;
document.body.onload = colorSelect();


//Changes grid size based on user input
sizebtn.addEventListener('click', () => {
    userInput = prompt('Enter a grid size from 1 to 100');

    if ((userInput < 1) || (userInput > 100) || (isNaN(userInput))) {
        alert("Input not valid");
    } else {
        currentSize.textContent = `${userInput} x ${userInput}`; 
        drawGrid(userInput);    
    }
});


//Clears the grid of all colors
clearbtn.addEventListener('click', () => {
    currentSize.textContent = `${userInput} x ${userInput}`;
    drawGrid(userInput);
});


// Returns a random value from 0 to the maxValue
function randomValue(maxValue) {
    return Math.floor(Math.random()*(maxValue+1));
}


//Provides a random rgb color output as a string
function randomColor() {
    let r = randomValue(255);
    let g = randomValue(255);
    let b = randomValue(255);
    let color = "rgb("+ r + "," + g + "," + b +")";
    return color;
}


// Checks which radio button is selected and applies the corresponding 
// background color when hovering over the grid
function colorSelect() {

    if (document.getElementById('black').checked){
        drawArea.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#000000';
        });
    }else if (document.getElementById('random').checked){
        drawArea.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = randomColor();
        });
    }else {
        drawArea.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = '#ffffff';
        });
    }
}



//Create divs for drawing area
function drawGrid(input) {
    userInput = input;
    deleteGrid();

    drawArea.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    let squares = userInput*userInput;

    for (let x = 0; x < squares; x++){
        const squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = "#ffffff";
        drawArea.appendChild(squareDiv);
    }   
}


// Deletes the current grid
function deleteGrid() {
    div = drawArea.lastElementChild;
    while(div) {
        drawArea.removeChild(div);
        div = drawArea.lastElementChild;
    }
}