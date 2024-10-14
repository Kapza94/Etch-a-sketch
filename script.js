const addRow = () => {
  // This is our column which holds 16 cells.
  const columnDiv = document.createElement("div");
  columnDiv.classList.add("column");

  for (let i = 0; i <= 15; i++) {
    //This is where i am filling my columns by 16 cells.
    const newDiv = document.createElement("div");
    newDiv.classList.add("cell");

    const newContent = document.createTextNode("");
    newDiv.appendChild(newContent);

    columnDiv.appendChild(newDiv);

    const container = document.getElementById("container").appendChild(columnDiv);
  }
};

const addColumn = () => {
  //this is where im duplicating my columns which now have filled cells 16 times to get my 16 columns done.
  for (let i = 0; i < 15; i++) {
    addRow();
  }
};

// const newCell = document.querySelector("cell");

// newCell.addEventListener('mouseleave', (e)=>{
// e.target.value.classList.add('cellLeave')
// })

addColumn();
