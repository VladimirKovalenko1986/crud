const BASE_URL = 'http://localhost:4040';

function fetchBooks() {
  return fetch(`${BASE_URL}/books`)
    .then(res => res.json())
    .then(console.log);
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/books/${bookId}`)
    .then(res => res.json())
    .then(console.log);
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);

//!!!!! Оброблення помилки 404
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(respons => {
//     if (!respons.ok) {
//       throw new Error(respons.status);
//     }
//     return respons.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });

//!!!! Оброблення помилки 404 через asiox не треба

// asiox
//   .get('https://jsonplaceholder.typicode.com/users')
//   .then(data => {
//     console.log(data);
//   })
//   .catch(erros => console.log(erros));
