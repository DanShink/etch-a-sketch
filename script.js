let grid = document.querySelector(".grid");
let changeSize = document.querySelector('button');

changeSize.addEventListener('click', changeGridSize);

function changeColor(e) {
    e.target.style.backgroundColor = "gray";
}

function createSquares(size) {
    let dim = 768/size;
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i < size; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = dim + 'px';
            square.style.width = dim + 'px';
            square.addEventListener('mouseover', changeColor);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function changeGridSize() {
    let size = prompt("What size grid would you like?");
    console.log(size);
    if(size < 1 | size > 64) {
        return null;
    }
    removeGrid();
    createSquares(size);
}

function removeGrid() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

createSquares(16);



