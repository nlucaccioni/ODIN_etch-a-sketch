let grid = document.querySelector("#gridContain");
let gridSize = 16;

function drawGrid() {
    for (let i = 1; i <= gridSize; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");

        for (let z = 1; z <= gridSize; z++){
            const gridItem = document.createElement('div');
            gridItem.classList.add("gridItem");
            gridRow.appendChild(gridItem);
        }

        grid.appendChild(gridRow);
    }
}

drawGrid();