const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/store.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Connected to db in items.');
});

db.serialize(function () {
  db.run(`CREATE TABLE IF NOT EXISTS items(
    item_id integer PRIMARY KEY,
    Item_manufacture_id integer NOT NULL,
    item_name text NOT NULL,
    item_dis text NOT NULL)`, (err, row) => {
      if (err) {
        console.error(err.message);
      }
    });
});

router.post('/', function (req, res) {
  let stmt = db.prepare("INSERT INTO items(Item_manufacture_id, item_name, item_dis) VALUES(?, ?, ?)");
  
    for (var i = 0; i < 10; i++) {
      stmt.run(654, "Chacho", "It's Chocolate");
    }
    stmt.finalize();
})

router.get('/', function (req, res) {
    db.all(`SELECT * FROM items`, (err, row) => {
      if (err) {
        res.status(500).send(error);
      };
      res.status(200).json(row);
    });
});

module.exports = router

/*
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/