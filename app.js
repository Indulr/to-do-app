function onReady() {
  var addToDoForm = document.getElementById('addToDoForm');
  var toDoList = document.getElementById('toDoList');
  var newToDoText = document.getElementById('newToDoText');

  addToDoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = newToDoText.value;

    var newLi = document.createElement('li');
    var checkbox = document.createElement('input');
    var del = document.createElement('button');

    checkbox.type = "checkbox";

    del.textContent = "Delete";

    del.addEventListener('click', function(event){
      toDoList.removeChild(this.parentElement);
    })

    newLi.textContent = title;
    toDoList.appendChild(newLi);

    newLi.appendChild(checkbox);

    newLi.appendChild(del);
    newToDoText.value = '';



  });
}

window.onload = function() {
  onReady();};
