let gridSize = 16;

const gridPopUp = () => {
  let newSize = prompt("Enter the size of the grid- Max size 64 * 64");
  newSize = parseInt(newSize);

  if (isNaN(gridSize) || newSize <= 0 || newSize > 64) {
    alert("Please enter a number between 1-64");
    return;
  } else {
    gridSize = newSize;
    clearGrid();
    addColumn();
  }
};

const clearGrid = () => {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const gridBtn = document.getElementById("gridBtn");
gridBtn.addEventListener("click", () => {
  gridPopUp();
});

const addRow = () => {
  // This is our column which holds 16 cells.
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("column");

  for (let i = 0; i <= gridSize; i++) {
    //This is where i am filling my columns by 16 cells.
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");

    //changes color of the cells
    newDiv.addEventListener("mouseover", (e) => {
      e.target.classList.add("cellHover");
    });
    //returns the color back to what it was gradually.
    newDiv.addEventListener("mouseleave", (e) => {
      e.target.classList.add("cellLeave");
    });

    const newContent = document.createTextNode("");
    newDiv.appendChild(newContent);

    columnDiv.appendChild(newDiv);
  }
  document.getElementById("container").appendChild(columnDiv);
};

const addColumn = () => {
  //this is where im duplicating my columns which now have filled cells 16 times to get my 16 columns done.
  for (let i = 0; i < gridSize; i++) {
    addRow();
  }
};

addColumn();
