let grid = document.querySelector("#gridContain");
let gridSize = 16;

function drawGrid(resolution) {
    for (let i = 1; i <= gridSize; i++){
        resolution = gridSize;
        const gridRow = document.createElement('div');
        gridRow.classList.add("gridRow");

        for (let z = 1; z <= gridSize; z++){
            const gridItems = document.createElement('div');
            gridItems.classList.add("gridItem");
            gridRow.appendChild(gridItems);
        }

        grid.appendChild(gridRow);

        const gridItems = document.querySelectorAll(".gridItem");

        gridItems.forEach(gridItem => {
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = "var(--OFF_WHITE)";
            })
        })
    }
}

drawGrid();


const resetBtn = document.querySelector("#reset");

resetBtn.addEventListener('click', () => {
    gridSize = prompt('Choose your new sketching resolution.', '16');

    while (gridSize > 100 || gridSize < 1)  {
        alert('Please choose a resolution beween 1-100.');
        gridSize = prompt('Choose your new sketching resolution.', '0');
    }

    const gridRow = document.querySelectorAll(".gridRow");
    gridRow.forEach(row => {
        row.remove();
    })

    drawGrid(gridSize);
})