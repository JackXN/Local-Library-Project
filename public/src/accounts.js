const findAccountById = (accounts,id) => accounts.find((account) => account.id === id)

 
const sortAccountsByLastName = accounts => accounts.sort((user1, user2) => user1.name.last < user2.name.last ? -1 : 1)

  
const numberOfBorrows = (accounts,books) => {
  let result = books.reduce((acc, books) => {
      for(let i = 0; i < books.borrows.length; i++) {
          if(books.borrows[i].id === accounts.id) {
              acc ++
          }
      }
      return acc
  }, 0)
  return result
}

// const numberOfBorrows = (accounts,books) => {
//  return books.reduce((acc,book) => acc + book.borrows[0].id === accounts[0].id, 0 )
// }

// const booksBorrowedCount = books => books.reduce((acc, book) => acc + !book.borrows[0].returned, 0)





  
    
const getBooksPossessedByAccount = (account, books, authors) => {
  return books.filter((book) => book.borrows.some((b) => b.id === account.id && b.returned === false))
  .map(book => {let author = authors.find((author) => author.id === book.authorId)
  book.author = author; return book})
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
