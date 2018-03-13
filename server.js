const express = require('express');
const path = require('path');
import axios from 'axios';
var MongoClient = require('mongodb').MongoClient

const generatePassword = require('password-generator');
const url = 'mongodb://'+process.env.USER+':'+process.env.PASS+'@'+process.env.HOST+':'+process.env.DBPORT+'/'+process.env.DB;

const app = express();

/*
MONGODB TABLES NEEDED
Customers ***
Orders ***
OrderedItems ***
Items ***
Staff
Invoices

FIELDS
Customers
  - _id
  - BearID
  - First_Name
  - Last_Name
  - Email
  - Status (grad, undergrad, etc)
  - Date_Created
Orders
  - _id
  - Customer_id_fk
  - Distributed_By
  - DateCreated
OrderedItems
  - Order_id_fk
  - Item_id_fk
  - Quantity
  - Dept
  - For_Prof
  - Grant
Items
  - _id
  - Category (Chemicals, Supplies)
  - Item_Name
  - Cost
  - Remaining (# remaining in stock)
  - Threshold (the reorder threshold)

API ENDPOINTS NEEDED (for the order page at least)
  - create new order (on page load)
  - remove order (if the order is cancelled)
  - query all items
*/

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/getCustomers', (req, res) => {

  mongodb.MongoClient.connect(url, function(err, db) {
    if(err){
      console.log(err);
      throw err;
    }

    var users = db.collection('customers');

    //Return all documents in the selection
    users.find({}).toArray().then(docs =>{
      res.send(docs);
    });

    users.insert({name: 'taco', tasty: true}, function(err, result) {
    users.find({name: 'taco'}).toArray(function(err, docs) {
      console.log(docs[0])
      db.close()
    })
  })
  });

});

app.get('/api/itemInfo', (req, res) => {

});

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Password generator listening on ${port}`);
