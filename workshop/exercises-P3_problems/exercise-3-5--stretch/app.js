// Exercise 3-5 - the Custom Grid
// ------------

// Hints
// - use the 'blur' event
// - one event listener per input
// - If you need extra hints, see somebody... :)

// Exercise 3-4 - The GRID
// ------------

const board = document.querySelector("#board");
const rows = document.querySelector("#rows-input");
const columns = document.querySelector("#columns-input");
const form = document.querySelector(".form");

const boardWidth = 600;
let numRows;
let numCols;

const submitValues = (e) => {
    [...board.children].forEach(el => board.removeChild(el));

    numRows = rows.value;
    numCols = columns.value;
    
    board.style.gridTemplateColumns = `repeat(${numCols}, 1fr)`;

    for (i = 0; i < numRows * numCols ; i++ ) {
        const cell = document.createElement("span");
        cell.id = `cell-${i + 1}`;
        cell.className = `cell`;
        board.appendChild(cell);
    
        cell.style.width = `calc(600px /${numCols})`;
        cell.style.height = `calc(600px /${numRows})`;
    }
}

form.addEventListener("focusout", submitValues )