const body = document.querySelector('body');
let size = 16;
let color = 'black';

function setupScreen() {
    createHeading();
    createContainer();
    createGrid(16, 16);
    addListeners();
}

function createHeading() {
    const h1 = document.createElement('h1');
    h1.textContent = 'Etch-A-Sketch';
    body.appendChild(h1);
}

function createContainer() {
    const container = document.createElement('div');
    container.id = 'container';
    body.appendChild(container);
}

function createGrid(size) {
    const container = document.getElementById('container');
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.maxHeight = '100vh';

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.style.border = '1px solid black';
        square.style.height = '1.5rem';
        square.style.width = '1.5rem';

        container.appendChild(square);
    };

    body.appendChild(container);
}

function addListeners() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseenter', function(e) {
            e.target.style.backgroundColor = color;
        });
    });
}

setupScreen();
