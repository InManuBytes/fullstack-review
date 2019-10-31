const request = require('request');
const config = require('../config.js');
const Promise = require('bluebird');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    },
    json: true
  };
  // next();
  request.get(options, (error, res, body) => {
    if (error) {
      callback(error, null);
    }
    callback(null, body);
  });
}

module.exports.getReposByUsername = getReposByUsername;

var getReposByUsernameAsync = Promise.promisify(getReposByUsername);
module.exports.getReposByUsernameAsync = getReposByUsernameAsync