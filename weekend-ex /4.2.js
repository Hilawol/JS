/** 
 * T(n)=T(n-1)+T(n-2)+T(n-3) t(0)=[], f(1)=1 for n>1
 * Function assums n>0 
*/

const tribonacci = (signature, n) => {

  if (n === 0) {
    return [];
  } else if (n < 3) { //deals with n=1 or n=2 Assuming n>0
    return signature.slice(0, n);
  }
  let tri = signature;
  for (let i = 3; i < n; i++) {
    tri.push(tri[i - 1] + tri[i - 2] + tri[i - 3]);
  }
  return tri;
}

console.log(tribonacci([0, 0, 1], 15));