//variables del html
let addButton;
let dataInput;
let cancelButton;

document.addEventListener("DOMContentLoaded", () => {
  addButton = document.getElementById("addTask");
  dataInput = document.getElementById("newTask");
  cancelButton = document.getElementById("");

  dataInput.hidden = true;
  addButton.addEventListener("click", onAddButtonClick);
});

//funciones::

//add task
//cambia la propiedad hidden de la tabla new task
function onAddButtonClick() {
  dataInput.hidden = false;
}

function onCancelButtonClick() {
  dataInput.hidden = true;
}

//create

//read

//update

//delete
