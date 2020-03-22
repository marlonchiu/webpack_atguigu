import $ from 'jquery';

// eslint-disable-next-line
console.log($);

function sum (...args) {
  return args.reduce((p, c) => p + c, 0);
}

// eslint-disable-next-line
console.log(sum(1, 2, 3, 4, 5, 6))
