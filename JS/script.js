const listBox = document.getElementById('list-box')
const toDoList = document.querySelector('.toDoList__tasks');
const toDoBtn = document.querySelector('.toDo-btn')
const username = document.querySelector('.username');



function addTask() {
  if (listBox.value === '') {
    alert('You must write something!');
  }
  else {
    let task = document.createElement('li');
    toDoList.appendChild(task);
    task.setAttribute("readonly", "readonly");
    let taskContent = document.createElement('label')
    task.appendChild(taskContent);
    taskContent.innerHTML = listBox.value
    taskContent.setAttribute("readonly", "readonly");
    taskContent.className = 'content';
    let edit = document.createElement('button');
    task.appendChild(edit);
    edit.innerHTML = "Edit";
    edit.className = 'editing';
    let close = document.createElement('span');
    close.innerHTML = "\u00d7";
    task.appendChild(close);
    close.className = 'close';
    
  }
  listBox.value = '';
  createLocalStorage();
}



toDoList.addEventListener('click', function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    createLocalStorage();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    createLocalStorage();
  } else if (e.target.tagName === 'BUTTON') {
    e.target.previousElementSibling.removeAttribute("readonly");
    e.target.previousElementSibling.contentEditable = true;
    e.target.style.textDecoration = "none";
    createLocalStorage();
  } 
  
}, false);

function createLocalStorage() {
  localStorage.setItem('tasks', toDoList.innerHTML);
  localStorage.setItem('username', username.innerHTML)
}
function showTask() {
  toDoList.innerHTML = localStorage.getItem('tasks');
  username.innerHTML = localStorage.getItem('username');


}
// const edit = document.querySelector('editing');
// edit.addEventListener('click', ()=> {         
//   if (edit.innerText.toLowerCase() =="edit") {
//           task.removeAttribute("readonly");
//           task.focus();
//           task.innerText = "Save";
//           task.style.textDecoration="none"
//   }else{
//       task.setAttribute("readonly", "readonly");
//       task.innerText ="Edit";

//   }
// });

showTask()


toDoBtn.addEventListener('click', addTask);