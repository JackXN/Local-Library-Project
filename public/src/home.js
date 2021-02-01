const totalBooksCount = books =>  books.length;

const totalAccountsCount = accounts => accounts.length;

const booksBorrowedCount = books => books.reduce((acc, book) => acc + !book.borrows[0].returned, 0)

function getMostCommonGenres(books) {
  let genres = {};

  for (let i = 0; i < books.length; i++) {


    if (books[i].genre in genres) {
      genres[books[i].genre].count += 1;
    }
    
    else {
      genres[books[i].genre] = {};
      genres[books[i].genre].count = 1;
    }
  }
  let arrGenres = [];

  for (key in genres) {
    arrGenres.push({name: key, count: genres[key].count});
  }
  arrGenres.sort((a,b) => {
    return b.count - a.count
  });
  final = arrGenres.slice(0, 5);
  return final;
}


function getMostPopularBooks(books) {
let arrBooks = [];
for (let i = 0; i < books.length; i++) {
  let book = books[i];
arrBooks.push({name: book.title, count: book.borrows.length});
}
arrBooks.sort((a,b) => {
  return b.count - a.count
});
final = arrBooks.slice(0, 5);
return final;
}


function getMostPopularAuthors(books, authors) {
let arrPopularAuthors = [];
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    for (let j = 0; j < authors.length; j++) {
      let author = authors[j]
      if (book.authorId === author.id) {
        arrPopularAuthors.push({name: author.name.first + " " + authors[j].name.last, count: books[i].borrows.length});
      }
    }
  }
  arrPopularAuthors.sort((a,b) => {
    return b.count - a.count
  });
  final = arrPopularAuthors.slice(0,5);
  return final;
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
