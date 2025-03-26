//Select DOM elements
const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    saveToLocalStorage(taskText);
  }
  taskInput.value = "";
  taskInput.focus();
}

const taskText = taskInput.value.trim();
if (taskText) {
  const li = createTaskElement(taskText);
  taskList.appendChild(li);
  saveToLocalStorage(taskText);
}
taskInput.value = "";
taskInput.focus();

function createTaskElement(taskText) {
  const li = document.createElement("li");
  li.innerHTML = `
    ${taskText} 
    <button class="deleteBtn">Delete</button>
  `;
  return li;
}

function deleteTask(event) {
  if (event.target.classList.contains("deleteBtn")) {
    const li = event.target.parentElement;
    const taskText = li.textContent.replace("Delete", "").trim();
    deleteTaskFromLocalStorage(taskText);
    taskList.removeChild(li);
  }
}

function saveToLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(function (taskText) {
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
  });
}

function deleteTaskFromLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const filteredTasks = tasks.filter(function (task) {
    return task !== taskText;
  });
  localStorage.setItem("tasks", JSON.stringify(filteredTasks));
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", deleteTask);

document.addEventListener("DOMContentLoaded", renderTasks);