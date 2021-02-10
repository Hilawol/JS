
// 1. Create an object that represents a book. It should have 4-5 properties that make sense for a book to have.
let book = {
  name: "book-name",
  author: "author",
  publishYear: "1981",
  Categories: "category",
  editionNumber: "edition",
}

// 2. Then write a function that has one argument, a book, that will return the following description from your book object:
// `The book <book name> was written by <author name> in the year <publishing yeary

const bookInfo = book => {
  return `The book ${book.name} was written by ${book.author} in the year ${book.publishYear}.`;
}

console.log(bookInfo(book));