const findAuthorById = (authors, id) => authors.find((author) => author.id === id ? author : false) 


const findBookById = (books, id,) =>  books.find((book) => book.id === id ? book : false)




function partitionBooksByBorrowedStatus(books) {
 let borrowedBooks = books.filter((book) => book.borrows[0].returned === false)
 let returnedBooks = books.filter((book) => book.borrows[0].returned === true)
 return [borrowedBooks, returnedBooks]
}


function getBorrowersForBook(book, accounts) {
    let final = [];
    for (let i = 0; i < book.borrows.length; i++) {
      for (let k = 0; k < accounts.length; k++) {
        if (book.borrows[i].id === accounts[k].id) {
         let merge = {...book.borrows[i], ...accounts[k]};
         final.push(merge);
        }
      }
    }
    borrowersForBookFirstTen = final.slice(0, 10);
    return borrowersForBookFirstTen;
    }
// const getBorrowersForBook = books => books.filter((book) => book.borrow[0].id === accounts[0].id ) 





module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};




