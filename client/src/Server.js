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
        console.log(error);
      }
    })
  }
}

export default Server;