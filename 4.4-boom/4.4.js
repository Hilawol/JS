function contain7(n) {
  let num = (n.toString()).split(''); //converts number to string and splits digits in array. 
  return num.includes('7');
}

function boom(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 7 === 0) {
      if (contain7(i)) {
        console.log("BOOM-BOOM");
      }
      else {
        console.log("BOOM")
      }
    }
    else {
      console.log(i)
    }
  }
}

boom(18);