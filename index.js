const body = document.querySelector("body");
let size = 16;
let color = "black";

function setupGame(size) {
  resetScreen();
  createHeading();
  createPopup();
  createContainer();
  createGrid(size);
  addListeners();
}

function resetScreen() {
    body.innerHTML = '';
}

function createHeading() {
  const h1 = document.createElement("h1");
  h1.textContent = "Etch-A-Sketch";
  h1.style.marginBottom = 0;
  body.appendChild(h1);
}

function createPopup() {
  createModalButton();
  createSection();
}

function createModalButton() {
  const modalButton = document.createElement("button");
  modalButton.className = "modal-btn";
  modalButton.textContent = "New Grid";
  modalButton.style.margin = "5px";
  body.appendChild(modalButton);
}

function createSection() {
  // Whole section
  const section = document.createElement("section");
  section.className = "modal hidden";

  // Div with close button
  const flexDiv = document.createElement("div");
  flexDiv.className = "flex";

  const closeButton = document.createElement("button");
  closeButton.className = "btn-close";
  closeButton.textContent = "⨉";

  flexDiv.appendChild(closeButton);
  section.appendChild(flexDiv);

  // User input
  const inputArea = document.createElement("input");
  inputArea.type = "text";
  inputArea.id = "size-input";
  inputArea.placeholder = "What size?";

  const submitInput = document.createElement("button");
  submitInput.className = "btn submit-input";
  submitInput.textContent = "Submit";

  section.appendChild(inputArea);
  section.appendChild(submitInput);

  body.appendChild(section);

  // Hidden div for modal
  const overlayDiv = document.createElement("div");
  overlayDiv.className = "overlay hidden";
  body.appendChild(overlayDiv);
}

function openModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  const modal = document.querySelector(".modal");
  const overlay = document.querySelector(".overlay");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function createContainer() {
  const container = document.createElement("div");
  container.id = "container";
  container.style.height = '80vh';
  container.style.width = '80vw';
  body.appendChild(container);
}

function createGrid(size) {
  const container = document.getElementById("container");
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  container.style.maxHeight = "100vh";

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.className = "square";
    square.style.border = "1px solid black";

    container.appendChild(square);
  }

  body.appendChild(container);
}

function addListeners() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", function (e) {
      e.target.style.backgroundColor = color;
    });
  });

  const overlay = document.querySelector(".overlay");
  const openModalBtn = document.querySelector(".modal-btn");
  const closeModalBtn = document.querySelector(".btn-close");
  const submitBtn = document.querySelector(".submit-input");

  openModalBtn.addEventListener("click", openModal);
  closeModalBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
  submitBtn.addEventListener("click", getInput);
}

function getInput() {
    const inputArea = document.getElementById('size-input');
    const newSize = inputArea.value;
    if (newSize > 100) {
        alert('Size must be less than 100');
    }
    else {
        setupGame(newSize);
    }
}

setupGame(size);
