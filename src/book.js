function createTitle(book) {
  return `The ${book}`;
}

function buildMainCharacter(name, age, pronouns) {
  return { name: name, age: age, pronouns: pronouns, }
}

function saveReview(review, array) {
  if (array.includes(review)) {
    return review;
  } else {
    return array.push(review);
  }
}

function calculatePageCount(bookTitle) {
   return bookTitle.length * 20;
  }

function writeBook(title, mainCharacter, genre) {
  return { title: title, mainCharacter: mainCharacter, pageCount: calculatePageCount(title), genre: genre}
}

function editBook(title) {
 title.pageCount = title.pageCount * 0.75;
 return title.pageCount;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
