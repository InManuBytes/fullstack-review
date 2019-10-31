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
  return repos.map(function (repo) {
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

module.exports.save = save;
var saveAsync = Promise.promisify(save)
module.exports.saveAsync = saveAsync;