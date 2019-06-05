
function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');
   addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    let title = newToDoText.value;
  let newLi = document.createElement('li');
  let checkbox = document.createElement('input');
  let del = document.createElement('button');

  checkbox.type = "checkbox";


  del.textContent = "Delete";

  newLi.textContent = title;
  newLi.appendChild(checkbox);
  newLi.appendChild(del);
  toDoList.appendChild(newLi);
  newToDoText.value = '';


  });

 }

window.onload = function() {
   alert("The window has loaded!");
   onReady();
 };
