//variables del html
let addButton;
let dataInput;
let cancelButton;

let toDos = [];

document.addEventListener("DOMContentLoaded", () => {
  addButton = document.getElementById("addTask");
  dataInput = document.getElementById("newform");
  cancelButton = document.getElementById("cancelButton");

  dataInput.hidden = true;
  addButton.addEventListener("click", onAddButtonClick);
  cancelButton.addEventListener("click", onCancelButtonClick);

  dataInput.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  });

  var saved = GetFromLocal("item");

  if (!saved) {
    const jsonToDos = JSON.stringify(toDos);
    SaveOnLocal("item", jsonToDos);
  } else {
    toDos = JSON.parse(saved);
    console.log(toDos);
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
  id: "n",
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
