import {
  addNewTask,
  handleTaskBehaviour,
  fillTasksList,
} from './functions-todo.js';

const myUL = document.getElementById('myUL');
const addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', addNewTask);

// Додаємо при натисканні клас
myUL.addEventListener('click', handleTaskBehaviour);

// Подія яка спрацьовує при побудові DOM дерева і ми длдаємо функцію яка буде зберігати всі данні при перезавантаженні сторінки
window.addEventListener('DOMContentLoaded', fillTasksList);
