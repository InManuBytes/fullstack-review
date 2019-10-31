const express = require('express');
const bodyParser = require('body-parser');
const gitHub = require('../helpers/github.js');
const db = require('../database/index.js');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post('/repos', function (req, res, next) {
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // req.body -> {username 'search term'}
  return gitHub.getReposByUsernameAsync(req.body.username)
    .then((repos) => {
      return db.save(repos)
    })
    .then((saved) => {
      console.log(saved);
      next();
    })
    .catch(error => {
      throw error;
    })
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

