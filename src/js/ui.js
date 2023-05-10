// Где мы используем функции
async function addAndrenderBook() {
  try {
    const book = await addBook({});
    console.log(book);
  } catch (error) {
    console.log(error);
  }
}
