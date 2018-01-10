var express = require('express')
var router = express.Router()
const sqlite3 = require('sqlite3').verbose();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

// open database in memory
let db = new sqlite3.Database('./database/store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});

// define the home page route
router.get('/', function (req, res) {
  /*db.each(`SELECT * FROM items`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    res.send(row);
    console.log(row);
  });*/
  res.send('Items');
  console.log('Items');
})
// define the about route
router.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = router

/*
db.serialize(() => {
db.each(`CREATE TABLE IF NOT EXISTS items(
    item_id integer PRIMARY KEY,
    Item_manufacture_id integer NOT NULL,
    item_name text NOT NULL,
    item_dis text NOT NULL)`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });

    db.each(`SELECT * FROM items`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });

  db.each(`SELECT * FROM items`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
      console.log(row);
    });  
});
    */