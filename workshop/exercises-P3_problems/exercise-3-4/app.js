// Exercise 3-4 - The GRID
// ------------




const NUM_CELLS = 9;

const board = document.querySelector("#board");

const cellWidth = "200px";
board.style.gridTemplateColumns = "1fr 1fr 1fr"

for (i = 0; i < NUM_CELLS ; i++ ) {
    const cell = document.createElement("span");
    cell.id = `cell-${i + 1}`;
    cell.className = `cell`;
    board.appendChild(cell);

    cell.style.width = cellWidth;
    cell.style.height = cellWidth;
}

