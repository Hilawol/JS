const shortesWord = (str) => str.split(" ").map(word => word.length).sort((a, b) => a - b).shift();

console.log(shortesWord("this is m strinmg"));
