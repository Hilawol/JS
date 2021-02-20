const getCentury = (year) => {
  return Math.ceil(year / 100);
}

console.log(getCentury(100));