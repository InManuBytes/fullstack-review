const express = require('express');
const bodyParser = require('body-parser');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');
const Promise = require('bluebird');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//////////////////////////////////////////////
//------------------ROUTES------------------//
//////////////////////////////////////////////
app.post('/repos', function (req, res, next) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  return gitHub.getReposByUsernameAsync(req.body.username)
  // req.body -> {username 'search term'}
  .then((repos) => {
    // save the repo information in the database
      return db.saveAsync(repos);
    })
    .then((saved) => {
      return db.top25()
    })
    .then((top25) => {
      res.status(201).end(JSON.stringify(top25));
      next();
    })
    .catch(error => {
      throw error;
    })
});

app.get('/repos', function (req, res, next) {
  return  new Promise((resolve, reject) => {
    var top25repos = db.top25();
    resolve(top25repos);
    reject("no repos");
  })
    .then((top25) => {
      //console.log(top25);
      res.status(200).end(JSON.stringify({top25: top25}));
      next();
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

