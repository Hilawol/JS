const longest = (str) => {
  let wordsArray = str.toLowerCase().split(" ");
  let mapedWordArray = wordsArray.map(value => [value, value.length]); //creates an array that each element is [word,word length]
  let sortedMapedWordArray = mapedWordArray.sort((a, b) => b[1] - a[1]);//sorts the array in decending order of the words length.
  let max = sortedMapedWordArray[0][1];//gets the length of the longest words
  let longestWords = sortedMapedWordArray.filter(word => word[1] === max);//returns only the elemnets with the max length
  return longestWords.map(word => word[0]);//returns ann array of only the words that are the longest
}

console.log(longest("this string is my longer string"));