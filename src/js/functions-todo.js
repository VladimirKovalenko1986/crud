import { saveTask, loadTasks, updateTasks, deleteTasks } from './api.js';

const myInput = document.getElementById('myInput');
// Константа id яка додається до кожного Лі
let currentId = 1;

function addNewTask() {
  const inputValue = myInput.value.trim();
  if (inputValue === '') {
    alert('You mast write something!');
    return;
  }
  createLi(inputValue);

  // Після додавання очищаємо поле вводу
  myInput.value = '';

  // Додаємо функцію яка буде додавати Лі у сторедж
  addTaskToDB(inputValue);
}

function createLi(text, isDone = false, id = currentId) {
  const liEl = document.createElement('li');

  // Варіант 1
  const liText = document.createTextNode(text);
  liEl.appendChild(liText);
  // Варіант 2
  // liEl.textContent = text;

  // Додамо до елементу поле з id
  liEl.dataset.id = id;

  // Робимо перевірку якщо isDone = true, то запис вже буде додана с класом checked
  if (isDone) {
    liEl.className = 'checked';
  }

  myUL.appendChild(liEl);
  addCloseBtn(liEl);
}

// Додаємо функцію крестику
function addCloseBtn(li) {
  const span = document.createElement('SPAN');
  const txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
}

// При натисканні на Лі додаємо класс
function handleTaskBehaviour({ target }) {
  if (target.tagName === 'LI') {
    target.classList.toggle('checked');

    updateTasks(target.dataset.id, target.classList.contains('checked'));

    // Робимо перевірку для відалення елементу
  } else if (target.classList.contains('close')) {
    target.parentNode.remove();
    deleteTasks(target.parentNode.dataset.id);
  }
}

// Створює об'єкт нашої задачі в томи вигляді що нам потрібна
const createTaskObject = (text, isDone) => ({ text, isDone });

// функція яка буде додавати Лі у сторедж
function addTaskToDB(text, isDone = false) {
  const newTask = createTaskObject(text, isDone);
  saveTask(newTask);

  currentId += 1;
}

// Функція яка буде діставати дані зі стореджа і буде додавати дані у вигляді Лі на сторінку
function fillTasksList() {
  loadTasks()
    .then(todos => {
      todos.forEach(({ text, isDone, id }) => createLi(text, isDone, id));
      console.log(todos);
      return todos;
    })
    .then(todos => {
      currentId =
        todos.length === 0 ? 1 : Number(todos[todos.length - 1].id) + 1;
    });
}

export { addNewTask, handleTaskBehaviour, fillTasksList };
