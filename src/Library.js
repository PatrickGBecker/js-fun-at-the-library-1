function createLibrary(library) {
  return {
      name: library,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: [],
      }
  }
}

function addBook(library, book) {
  if (book.genre === 'fantasy') {
    return library.shelves.fantasy.push(book);
  } else if (book.genre === 'nonFiction') {
    return library.shelves.nonFiction.push(book);
  } else {
    return library.shelves.fiction.push(book);
  }
}

function checkoutBook(library, book, genre) {
  var isOnShelf = library['shelves']['fantasy'][0] ||
                  library['shelves']['nonFiction'][0] ||
                  library['shelves']['fiction'][0];

  if (!isOnShelf) {
    return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
  }
  if (isOnShelf && genre === 'fantasy') {
    library.shelves.fantasy.pop(book);
    return `You have now checked out ${book} from the ${library.name}`
  }
  if (isOnShelf && genre === 'nonFiction') {
    library.shelves.nonFiction.pop(book);
    return `You have now checked out ${book} from the ${library.name}`
  }
  if (isOnShelf && genre === 'fiction') {
    library.shelves.fiction.pop(book);
    return `You have now checked out ${book} from the ${library.name}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
