setTimeout(() => {
  console.log('timeout');
}, 0);

const t1 = performance.now();
let result = 0;
for (let i = 0; i < 1000000000; i++) {
  result += i;
}
const t2 = performance.now();

console.log(`потрачено времени на операцию ${t2 - t1}`);
console.log(result);
