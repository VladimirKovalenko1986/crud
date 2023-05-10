// ! try.....catch - Отлавление ошибок
// try {
//   console.log('Внутри try до myVar');

// setTimeout(() => {
//   try {
//     myVar;
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }, 1000);

//   console.log('Внутри try после myVar');
// } catch (error) {
//   console.error('Ошибка');
// }

// console.log('После try...catch');

// !!!!!!!!!
// try {
//   console.log('Внутри try до myVar');

//   MyVar;

//   console.log('Внутри try после myVar');
// } catch (error) {
//   console.log(error.stack);
//   console.log('Ошибка');
// }

// !!!!!!!!!!async

// function getFruit(name) {
//   const fruits = {
//     strawberry: 'ежевика',
//     kiwi: 'киви',
//     apple: 'яблуко',
//   };

//
// }

// ? Делаем функцию асинхронной

// function getFruit(name) {
//   const fruits = {
//     strawberry: 'ежевика',
//     kiwi: 'киви',
//     apple: 'яблуко',
//   };

//   return new Promise(resolve => setTimeout(() => resolve(fruits[name]), 500));
// }

// function makeSmoothies() {
//   getFruit('apple').then(apple => {
//     console.log(apple);

//     getFruit('kiwi').then(kiwi => console.log(kiwi));
//   });
// }

//! Перепивывваем через async await - последовательный код

// async function makeSmoothies() {
//   console.time('makeSmoothies');
//   const apple = await getFruit('apple');
//   console.log(apple);

//   const kiwi = await getFruit('kiwi');
//   console.log(kiwi);
//   console.timeEnd('makeSmoothies');
// }

// !Делаем паралельный код

// async function makeSmoothies() {
//   console.time('makeSmoothies');
//   const apple = getFruit('apple');
//   const kiwi = getFruit('kiwi');
//   const berry = getFruit('strawberry');

//   const fruits = await Promise.all([apple, kiwi, berry]);

//   console.log(fruits);
//   console.timeEnd('makeSmoothies');
// }

// !Обрабатываем ошибки
// async function makeSmoothies() {
//   try {
//     console.time('makeSmoothies');
//     const apple = await getFruit('apple');
//     console.log(apple);

// const kiwi = await getFruit('kiwi');
// console.log(kiwi);
//     console.timeEnd('makeSmoothies');
//   } catch (error) {
//     console.log('Ошибка');
//   }
// }

// makeSmoothies();

//* экспрес функция
// const fn = async function () {};

//* стрелочная функция
// const arr = async () => {};

//* метод обьекта
// const x = {
//   async getname() {},
// };

//* метод класс
// class X {
//   async getName() {}
// }

// !!!!!!!!!!!!!!!!+++++++++++++++++++++++++!!!!!!!!!!!!!

const BASE_URL = 'http://localhost:4040';

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  const respons = await fetch(`${BASE_URL}/books`, options);
  const newBook = await respons.json();

  return newBook;
}

// Но ошибки мы будем скорей всего обрабатывать во внешнем коде

// async function addBookANdUpdateUI() {
//   try {
//     const book = await addBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }

// addBookANdUpdateUI();

async function fetchBooks() {
  const respons = await fetch`${BASE_URL}/books`;
  const books = await respons.json();
  return books;
}

async function fetchBookById(bookId) {
  const respons = await fetch`${BASE_URL}/books/${bookId}`;
  const book = await respons.json();
  return book;
}

async function deletBook(bookId) {
  const url = `${BASE_URL}/books/${bookId}`;
  const options = {
    method: 'DELETE',
  };

  const respons = await fetch(url, options);
  return respons;

  // Можем вернуть удаленную книгу если нам это необходимо
  // const book = await respons.json();
  // return book;
}

async function updateBookById(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(update),
  };

  const respons = await fetch(`${BASE_URL}/books/${bookId}`, options);
  const book = respons.json();
  return book;
}
