const currentSize = document.querySelector('#currentSize');
const sizebtn = document.getElementById('size-change');
const clearbtn = document.getElementById('clear');

const sizeInput = 16;
let userInput = 0;


//Allows the user to change the grid size
sizebtn.addEventListener('click', () => {
    userInput = prompt('Enter a grid size from 1 to 100');

    if ((userInput < 1) || (userInput > 100) || (isNaN(userInput))) {
        alert("Input not valid");
    } else {
        currentSize.textContent = `${userInput} x ${userInput}`;     
    }
});


//Resets to default
clearbtn.addEventListener('click', () => {
    currentSize.textContent = `${sizeInput} x ${sizeInput}`;
});