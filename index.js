//variables del html
let addButton;
let dataInput;
let cancelButton;

let todos = [];

document.addEventListener("DOMContentLoaded", () => {
  addButton = document.getElementById("addTask");
  dataInput = document.getElementById("newTask");
  cancelButton = document.getElementById("cancelButton");

  dataInput.hidden = true;
  addButton.addEventListener("click", onAddButtonClick);
  cancelButton.addEventListener("click", onCancelButtonClick);

  var saved = GetFromLocal("item");

  if (!saved) {
    const jsonTodos = JSON.stringify(todos);
    SaveOnLocal("item", jsonTodos);
  } else {
    todos = JSON.parse(saved);
    console.log(todos);
  }
});

//cambia la propiedad hidden de la tabla new task
function onAddButtonClick() {
  dataInput.hidden = false;
}
function onCancelButtonClick() {
  dataInput.hidden = true;
}
//add
function onSaveButtonClick() {}

const task = {
  id: "",
  name: "",
  priority: "",
  status: "",
  dueDate: "",
  daysLeft: "",
  category: "",
  notes: "",
};

function SaveOnLocal(name, value) {
  localStorage.setItem(name, value);
}

function GetFromLocal(name) {
  var stg = localStorage.getItem(name);
  if (stg) return stg;
  return undefined;
}

// asignarle id a cada input que hara el usuario para asignar los datos
// save button = agregar elemento al array

// crear un array donde se almacene la informacion que ingresa el usuario

// tener un json que almacene la informacion de la lista del html

// que por cada elemento de la lista sea creado una nueva row en la table
