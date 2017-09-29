function addTodo(todoText) {
  let todo = todoText;
  localStorage.setItem('todoArray', todo);
  fetchAllTodos();
  clearText(document.getElementById("todo-text"));
}

/*Algorithm :
  Step 1 : Fetch TODOs from LocalStorage
  Step 2 : Fetch ID of Unordered List on which List Items need to be appended
  Step 3 : Fetch ID of new TODO Item
  Step 4 : Append new TODO Item 
  Step 5 : 
  Step 6 : 
*/
function fetchAllTodos() {
  let todoItems = localStorage.getItem('todoArray');         // From Local Storage
  let todoDomUL = document.getElementById("todo-list");      // UL DOM El on which new list item would be appended
  let inputTextToAdd = document.getElementById("todo-text"); // New List Item to be appended
  
  if(todoItems) {
    let li = document.createElement("li");
    // if(inputTextToAdd.value) {
    //   li.appendChild(inputTextToAdd.value);
    // }
    li.appendChild(document.createTextNode(inputTextToAdd.value));
    todoDomUL.appendChild(li);
  } /*else if() {

  }*/
}

fetchAllTodos();

function editTodo(event) {

}

function deleteTodo(event) {

}

function clearText(element) {
  element.value = "";
}
