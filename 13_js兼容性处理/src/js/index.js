// 会将有js兼容性的都处理了 最后文件会变得非常大
// import '@babel/polyfill'

const add = (x, y) => {
  return x + y;
}

console.log(add(2, 5));

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
});

console.log(promise)
