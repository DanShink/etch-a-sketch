let grid = document.querySelector(".grid");
let changeSize = document.querySelector('#grid-size-change');
let toggleColor = document.querySelector("#toggle");
//Mode 0 is gray, Mode 1 is rainbow
let mode = 0;

changeSize.addEventListener('click', changeGridSize);
toggleColor.addEventListener('click', toggleHandler);

function changeColorGray(e) {
    e.target.style.backgroundColor = "gray";
}

function changeColorRainbow(e) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    e.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

function createSquares(size, eventFunction) {
    let dim = 768/size;
    for(let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for(let i = 0; i < size; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            square.style.height = dim + 'px';
            square.style.width = dim + 'px';
            square.addEventListener('mouseover', eventFunction);
            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

function changeGridSize() {
    let size = prompt("What size grid would you like? (Max: 100)");
    console.log(size);
    if(size < 1 | size > 100) {
        return null;
    }
    removeGrid();
    createSquares(size, changeColorGray);
}

function removeGrid() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

function toggleHandler() {
    let size = grid.childElementCount;
    removeGrid()
    if(mode === 0) { //Currently Gray, Switch to RGB
        createSquares(size, changeColorRainbow);
        mode = 1;
    }else {
        createSquares(size, changeColorGray);
        mode = 0;
    }
    
}

createSquares(16, changeColorGray);



