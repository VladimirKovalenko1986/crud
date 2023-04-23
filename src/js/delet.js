const BASE_URL = 'http://localhost:4040';

function deletBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  return fetch(url, options).then(res => res.json());
}

// deletBook(7);
// deletBook(6);
