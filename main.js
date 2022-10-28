const currentSize = document.querySelector('#currentSize');
const main = document.querySelector('.main');
const drawArea = document.querySelector('.draw-area');
const colorPick = document.querySelector('#colorPick');
const radioGroup = document.querySelectorAll('.radioGroup'); 

const sizebtn = document.getElementById('size-change');
const clearbtn = document.getElementById('clear');

let userInput = 16;
let mouseDown = 0

document.body.onload = drawGrid(userInput);
document.body.onload = currentSize.textContent = `${userInput} x ${userInput}`;
document.body.onload = colorSelect();



// Changes grid size based on user input
sizebtn.addEventListener('click', () => {
    userInput = prompt('Enter a grid size from 1 to 100');

    if ((userInput < 1) || (userInput > 100) || (isNaN(userInput))) {
        alert("Input not valid");
    } else {
        currentSize.textContent = `${userInput} x ${userInput}`; 
        drawGrid(userInput);    
    }
});


// Clears the grid of all colors
clearbtn.addEventListener('click', () => {
    currentSize.textContent = `${userInput} x ${userInput}`;
    drawGrid(userInput);
});


// Returns a random value from 0 to the maxValue
function randomValue(maxValue) {
    return Math.floor(Math.random()*(maxValue+1));
}


// Provides a random rgb color output as a string
function randomColor() {
    let r = randomValue(255);
    let g = randomValue(255);
    let b = randomValue(255);
    let color = "rgb("+ r + "," + g + "," + b +")";
    return color;
}


// Checks for which radio button is check and enables/ disables the 
// the color palet based on the selection
radioGroup.forEach((input) => {
    input.addEventListener('change', () => {    
        if (document.getElementById('select').checked){
                colorPick.disabled = false;
            } else {
                colorPick.disabled = true;
            }
    });  
});


// Checks which radio button is selected and applies the corresponding 
// background color to draw on the grid
function colorSelect(squareDiv) {
        if (mouseDown === 0) {
            return;
        }else if (document.getElementById('black').checked) {
            squareDiv.style.backgroundColor = '#000000';
        }else if (document.getElementById('random').checked) {
            squareDiv.style.backgroundColor = randomColor();
        }else if (document.getElementById('select').checked) {
            squareDiv.style.backgroundColor = colorPick.value;
        }else {
            squareDiv.style.backgroundColor = '#ffffff';
        }
}


// Create divs for drawing area and allows drawing/ filling cell background 
// based on mouse events
function drawGrid(input) {
    userInput = input;
    deleteGrid();

    drawArea.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    let squares = userInput*userInput;

    for (let x = 0; x < squares; x++){
        const squareDiv = document.createElement('div');
        squareDiv.style.backgroundColor = "#ffffff";

        squareDiv.addEventListener('mousedown', (e) => {
            mouseDown = 1;
            colorSelect(squareDiv);
            console.log(mouseDown);
        });

        squareDiv.addEventListener('mousemove', (e) => {
            if (mouseDown > 0){
                colorSelect(squareDiv);
            }
        });

        squareDiv.addEventListener('mouseup', (e) => {
            mouseDown = 0;
        })
        
        drawArea.appendChild(squareDiv);
    }   
}


// Deletes the current grid size
function deleteGrid() {
    div = drawArea.lastElementChild;
    while(div) {
        drawArea.removeChild(div);
        div = drawArea.lastElementChild;
    }
}