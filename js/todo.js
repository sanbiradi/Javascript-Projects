//we catch the doms
const e_inputTask = document.querySelector("#task");
const e_form = document.querySelector("form");
const e_submitTask = document.querySelector("#submit");
const e_loadTask = document.querySelector("#taskContainer");

let todoList =
  localStorage.getItem("todoList") === null
    ? []
    : JSON.parse(localStorage.getItem("todoList"));

e_submitTask.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
});


document.addEventListener("DOMContentLoaded", () => {
  todoList.forEach((todo) => {
    loadTodos(todo);
  });
});


let loadTodos = (todo) => {
  let task = `<li class="alert alert-primary">
    ${todo}
  <span class="float-end text-danger dTask">x</span>
  </li>`;
  e_loadTask.innerHTML += task;
};


let addTask = () => {
  if (e_inputTask.value) {
    let task = `<li class="alert alert-primary">
    ${e_inputTask.value}
  <span class="float-end text-danger dTask">x</span>
  </li>`;
    e_loadTask.innerHTML += task;
    todoList.push(e_inputTask.value);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    e_inputTask.value = "";
  }
};


document.addEventListener("click", (e) => {
  deleteTask(e.target);
});



let deleteTask = (ele) => {
  if (ele.classList.contains("dTask")) {
    let dele = ele.parentElement.textContent.replace('x','').trim();
    let index = todoList.indexOf(dele);
    todoList.splice(index,1);
    ele.parentElement.remove();
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
};
