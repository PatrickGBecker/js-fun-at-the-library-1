function shelfBook(title, shelf) {
  if (shelf.length < 3) {
    return shelf.unshift(title);
  } else {
    return title;
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf) {
  return `${shelf[0].title}, ${shelf[1].title}, ${shelf[2].title}`
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    console.log(shelf[i].title)
    if (shelf[i].title !== title) {
      return false;
    } else {
      return truegit add shelf;
    }
    }
  }
//for loop
//conditional statement
//console log parameters
