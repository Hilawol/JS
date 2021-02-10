// 1. create 2 book objects with properties: name, author, year. 

const book1 = {
  name: "book1",
  author: "author1",
  year: 2008,
}

const book2 = {
  name: "book2",
  author: "author2",
  year: 2010,
}

// 2. create an empty object bookUtils (utils = short for utilities).

let bookUtils = {};

// 3. add to to the bookUtils object a function getFirstPublished, that recieves 2 books 
// and returns the book with the smaller year.
bookUtils.getFirstPublished = (book1, book2) => {
  return (book1.year <= book2.year ? book1 : book2);
};
console.log((bookUtils.getFirstPublished(book1, book2)).name);//book1

// 4. add to the bookUtils object a function setNewEdition,
// that recieves a book and an edition year and sets a new property latestEdition with the edition year,
//  or updates an existing one.
bookUtils.setNewEdition = (book, edition) => {
  book.latestEdition = edition;
};
bookUtils.setNewEdition(book1, 2020);
console.log(book1.latestEdition);//2020
console.log(book1);//{ name: 'book1', author: 'author1', year: 2008, latestEdition: 2020 }

// 5. add to to the bookUtils object a setLanguage function, 
// that recieves a book and a language and sets a new property language with the languahe, 
// or updates an existing one.
bookUtils.setLanguage = (book, language) => {
  book.language = language;
};
bookUtils.setLanguage(book1, "Hebrew");
console.log(book1.language);//Hebrew


// 6. add to to the bookUtils object a setTranslation function, that recieves a book a language and a translator,
// and sets a new property of translation, which is an object that contains the translator and the language.
bookUtils.setTranslation = (book, language, translator) => {
  book.translation = {
    translator: translator,
    language: language,
  };
};
bookUtils.setTranslation(book1, "Hebrew", "Jesica Cohen");
console.log(book1.translation); //{ translator: 'Jesica Cohen', language: 'Hebrew' }

// 7. add to to the bookUtils object a setPublisher function, that recieves a book a name and a location, 
// and sets a new property named publisher, which is an object that contains the name and location.
bookUtils.setPublisher = (book, name, location) => {
  book.publisher = {
    publisherName: name,
    location: location,
  };
};
bookUtils.setPublisher(book1, "Kineret", "Israel");
console.log(book1.publisher);//{ publisherName: 'Kineret', location: 'Israel' }

// 8. add to to the bookUtils object a function isSamePublisher, that recieves 2 books and checks if the publisher name and location
//  are identical in the 2 books.
bookUtils.isSamePublisher = (book1, book2) => {
  return ((book1.publisher.name === book2.publisher.name) && (book1.publisher.location === book2.publisher.location));
};

bookUtils.setPublisher(book2, "Kineret", "Mexcio");
console.log(bookUtils.isSamePublisher(book1, book2));
