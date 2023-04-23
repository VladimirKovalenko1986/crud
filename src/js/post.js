const BASE_URL = 'http://localhost:4040';

const newBook = {
  title: 'Тестовая книга по CSS',
  author: 'Я',
  genres: ['CSS'],
  rating: 9,
};

function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(res => res.json());
}

// addBook(newBook)
//   .then(renderBook)
//   .catch(error => console.log(error));

// addBook({
//   title: 'Тестовая книга по HTML',
//   author: 'Я',
//   genres: ['HTML'],
//   rating: 8,
// }).then(renderBook).catch(error => console.log(error));

function renderBook(book) {
  console.log('Пришел ответ от бекенда!!!!');
  console.log(book);
}
