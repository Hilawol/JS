const fourBasic = (op, value1, value2) => {
  switch (op) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value2 === 0 ? "Can't divide in zero" : value1 / value2;

  }
}

console.log(fourBasic('/', 2, 0));