let container = document.getElementById("container");
let originalGridSize = 64;


changeDivs = document.getElementsByClassName("divsClass");

function play() {
    for (let i = 0; i<changeDivs.length; i++) {
        changeDivs[i].addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'white';
        });
    }
}



function makeGrid(total_divs) {
    div_per_row = Math.sqrt(total_divs)
    divWidth = `${400/div_per_row}px`;
    divHeight = `${400/div_per_row}px`;
    for (let i=0; i<total_divs; i++){
        let newdiv = document.createElement('div');
        newdiv.style.height = divHeight;
        newdiv.style.width = divWidth;
        
        container.appendChild(newdiv);
        
    }
    play();
}
function clear() {
    let myContainer = document.getElementById('container');
    myContainer.innerHTML = "";
}

function reset() {
    let myContainer = document.getElementById('container');
    myContainer.innerHTML = "";
    makeGrid(originalGridSize);
}
function changeGridSize() {
    gridSize = prompt("Enter any number, preferrably a perfect square: ")
    clear();
    makeGrid(parseInt(gridSize));
}

let items = document.getElementsByClassName('item');
for(let i = 0; i<items.length; i++){
    items[i].addEventListener('mouseover', function(e){
        e.target.style.backgroundColor = 'grey';
    })
    items[i].addEventListener('mouseout', function(e){
        e.target.style.backgroundColor = 'white';
    })
}


makeGrid(originalGridSize);