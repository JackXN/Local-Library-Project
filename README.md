# Local Library

> Link to live app: https://tender-easley-433635.netlify.app/

### Overview

**The Local Library Dashboard** 
The Local Library is designed to keep track data such as the most common genres, the most popular books, and authors. It also keeps track of general stats like the amount of books in-stock, books being borrowed,
and the amount of registered accounts with the library.


### Dashboard
The main url will always redirect to the dahsboard which will default to displaying the tables and the current date's as reservations. 

The main url will always redirect to the overall stats of the library where you can easily identify the overall status of the library.
![dashboard](./public/screenshots/Dashboard.png)

<hr>

### Stats by Book
This gives the user an overall look at the status of books along with some general information on the book such as the author and genre. It lets the user see what books have been returned and what books are still being borrowed.

![new-reservation](./public/screenshots/StatsByBook.png)

<hr>

### reservations/:reservation_id/edit
Clicking the 'edit' button on a reservation will navigate to the edit route which will load the reservations information into a reservation form where it can be edited, saved, or cancelled. 

![edit](./app-screenshots/EditReservation.png)

<hr>

### reservations/:reservation_id/seat
Clicking the seat button on a reservation will navigate to the seat route which will allow the user to select a table from the available tables, and prevents the user from seating a reservation at a table that is too small for the reservations party size. 

![seat](./app-screenshots/seat.png)

Upon submitting, the user will return to the previous page to see the dashboard has been updated, showing the reservation with status "seated" and the selected table with status "occupied". The table will also now have a "Finish" button on it. 

![seated](./app-screenshots/seated.png)

When a reservation has finished, the user can select the "Finish" button on the table to change the status of the table to "free" and the status of the reservation to "finished". Finished reservations are hidden from the dashboard but can be accessed through th search bar. 


<hr>

### tables/new

Clicking the "New Table" button in the menu will navigate the user to the new table screen where they can create a new table. 
![table](./app-screenshots/NewTable.png)

### reservations/search

Clicking the "search" option from the menu will navigate the user to the search screen where they can enter a phone number and search the entire database for that number. 

![search](./app-screenshots/Search.png)


### Backend main stack
- Express
- Knex 
- postgreSQL
- Node.js
-  Heroku

### Frontend main stack
- React 
- HTML
- CSS
- JS
- Node.js
- Heroku


