let tasks = [];

function displayTasks() {
  const taskListDiv = document.getElementById('taskList');
  taskListDiv.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskItem = document.createElement('div');
    taskItem.textContent = `${index + 1}. ${task}`;
    taskListDiv.appendChild(taskItem);
  });

  updateTotalTasks();
}

function updateTotalTasks() {
  const totalTasksSpan = document.getElementById('totalTasks');
  totalTasksSpan.textContent = tasks.length;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    displayTasks();
  }
}

document.getElementById('addTaskBtn').addEventListener('click', addTask);