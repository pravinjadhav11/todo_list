const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list-container');

function addTask() {
 if (inputBox.value === '') {
  alert('Please enter a value');
  
 }else{
  let li = document.createElement('li');
  li.innerHTML = inputBox.value;
  listContainer.appendChild(li);

 }
}