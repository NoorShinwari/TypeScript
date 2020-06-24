const userName = 'Max';

let age = 80;

age = 50;

var result;
function add(a: number, b: number) {
  result = a + b;
  return result;
}

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', (event) => console.log(event));
}

console.log(result);
