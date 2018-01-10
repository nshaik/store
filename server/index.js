const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

// open database in memory
let db = new sqlite3.Database('./database/store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// Routers
let items = require('./items/items')

app.use(express.static('dist'))

app.use('/items', items)

app.listen(3000, () => console.log('Example app listening on port 3000!'))


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});