const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

let repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  author: String,
  description: String,
  forks: Number,
  url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = function (repos, callback) {
  repos.forEach(function (repo) {
    Repo.update({_id: repo.id},
      {
      _id:repo.id,
      name: repo.name,
      author: repo.owner.login,
      description: repo.description,
      forks: repo.forks_count,
      url: repo.html_url
    }, {upsert: true}, function (err, writeOpResult) {
      if (err) {
        callback(err, null);
      }
      callback(null, writeOpResult);
    });
  });
}

// sort for top 25

let top25 = function () {
  //fetcher.repos.createIndex({forks: -1})
  return Repo.find().sort({forks: -1}).limit(25);
}

module.exports.save = save;
var saveAsync = Promise.promisify(save)
module.exports.saveAsync = saveAsync;

module.exports.top25 = top25;