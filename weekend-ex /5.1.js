
/**
 * Given a string, at least 2 charachters long, 
 * the function returns the string after removing the first and last charachter 
 * @param {*} str 
 */
const trimString = (str) => {
  return str.slice(1, -1);
}

console.log(trimString("hila kershenovich"))