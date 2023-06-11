document.getElementById('addTask').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const task = input.value

  if (task) {
    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.className = task.replace(/[^a-zA-Z0-9]/g, '');
    listItem.innerHTML = `${task} <button class="delete-btn">Delete</button>`;

    listItem.querySelector('.delete-btn').addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    input.value = '';
  }
});
