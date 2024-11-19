let grid = document.querySelector("#gridContain");
let gridSize = 16;

function drawGrid() {
    for (let i = 1; i <= gridSize; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");

        for (let z = 1; z <= gridSize; z++){
            const gridItems = document.createElement('div');
            gridItems.classList.add("gridItem");
            gridRow.appendChild(gridItems);
        }

        grid.appendChild(gridRow);
    }
}

drawGrid();


const gridItems = document.querySelectorAll(".gridItem");

gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = "var(--OFF_WHITE)";
    })
})