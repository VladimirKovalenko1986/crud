const BASE_URL = 'http://localhost:4040';

function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  return fetch(`${BASE_URL}/books/${bookId}`, options)
    .then(res => res.json())
    .then(console.log);
}

// updateBookById(
//   { title: 'Большая новая тестовая книга по HTML, ну очень крутая' },
//   4
// );

// updateBookById({ rating: 1 }, 6);

// updateBookById({ rating: 4, author: 'Владимир Коваленко' }, 4);
