import $ from 'jquery';

var Server = {
  address: `http://localhost:1128`,
  post: (username, callback) => {
    $.ajax({
      url: Server.address + '/repos',
      type: 'POST',
      data: {username: username},
      success: callback,
      error: (error) => {
        console.log('POST ERROR:', error);
      }
    })
  },
  get: (callback) => {
    $.ajax({
      url: Server.address + '/repos',
      type: 'GET',
      contentType: 'application/json',
      dataType: 'json',
      success: callback,
      error: (error) => {
        console.log('GET ERROR: ', error);
      }
    })
  }
}

export default Server;