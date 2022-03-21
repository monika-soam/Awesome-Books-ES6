 export const addBook = (title, author) => {
   const newBook = { title, author };
   let books = localStorage.getItem('books');
   if (books == null) {
     books = [];
   } else {
     books = JSON.parse(books);
   }
   books.push(newBook);
   localStorage.setItem('books', JSON.stringify(books));
 }