const request = require('request');
const config = require('../config.js');

let getReposByUsername = (err, req, res, next) => {
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  var username = req.body.username;
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  console.log('URL', options.url);
  // next();
  // request.get(options, (error, response) => {
  //   if (error)
  // });
}

module.exports.getReposByUsername = getReposByUsername;