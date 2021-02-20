/** 
 * F(n)=F(n-1)+F(n-2) f(0)=0, f(1)=1 for n>1
 * Function assums n>0 
*/

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(15));