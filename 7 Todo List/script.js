let taskList = document.querySelector("#task-list");
let addBtn = document.getElementById("add-btn");

let arr = [];

addBtn.addEventListener("click", (e) => {
  let text = document.querySelector("#task-input").value;
  if (text.length !== 0 && !/^\s*$/.test(text)) {
    let obj = {};
    obj.data = text.trim();
    obj.completed = false;
    obj.id = Date.now();
    arr.push(obj);
    saveToLocalStorage();
    loadFromLocalStorage();
    text.value = "";
  }
});

function createTodo(obj) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  let button = document.createElement("button");

  li.classList.add("todo-item");
  span.classList.add("task-text");
  button.classList.add("delete-btn");

  button.dataset.id = obj.id;
  span.textContent = obj.data;
  button.textContent = "Delete";
  if (obj.completed) {
    li.classList.add("completed");
  }
  li.dataset.completed = obj.completed;
  li.appendChild(span);
  li.appendChild(button);
  taskList.appendChild(li);

  li.addEventListener("click", (e) => {
    if (e.target.classList.contains("completed")) {
      e.target.classList.remove("completed");
      obj.completed = false;
      li.dataset.completed = obj.completed;
      saveToLocalStorage();
      loadFromLocalStorage();
    }else{
        e.target.classList.add("completed");
      obj.completed = true;
      li.dataset.completed = obj.completed;
      saveToLocalStorage();
      loadFromLocalStorage();
    }
  });

  button.addEventListener("click", (e) => {
    arr = arr.filter((obj) => obj.id != e.target.dataset.id);
    li.remove();
    saveToLocalStorage();
    loadFromLocalStorage();
  });
}

function saveToLocalStorage() {
  localStorage.setItem("arr", JSON.stringify(arr));
}

function loadFromLocalStorage() {
  taskList.innerHTML = "";
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  arr.forEach((obj) => {
    createTodo(obj);
  });
}

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.filter === "all") {
      loadFromLocalStorage();
    } else if (e.target.dataset.filter === "pending") {
      pendingTask();
    } else if (e.target.dataset.filter === "completed") {
      completedTask();
    }
  });
});
loadFromLocalStorage();

function pendingTask() {
  taskList.innerHTML = "";
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  arr.forEach((obj) => {
    if (!obj.completed) {
      createTodo(obj);
    }
  });
}

function completedTask() {
  taskList.innerHTML = "";
  arr = JSON.parse(localStorage.getItem("arr")) || [];
  arr.forEach((obj) => {
    if (obj.completed) {
      createTodo(obj);
    }
  });
}
