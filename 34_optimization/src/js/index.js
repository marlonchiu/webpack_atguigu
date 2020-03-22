import '$css/index.css';

import(/* webpackChunkName: 'add' */'./add.js').then(({ add }) => {
  console.log(add(1, 2));
});

