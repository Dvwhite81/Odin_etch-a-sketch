const container = document.getElementById('container');
let size = 16;

function createGrid(size) {
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.style.maxHeight = '100vh';

    for (let i = 0; i < (size * size); i++) {
        const square = document.createElement('div');
        square.className = 'square';
        container.appendChild(square);
    };
};

createGrid(16, 16);
