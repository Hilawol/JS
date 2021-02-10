
// Create a function that takes one argument, an array. 
// to count over all the letters and return an object with the letter as the key and the letter count as the value.
// Expected output:
// { h: 3, e: 4, l: 3, o: 7, g: 3, d: 3, a: 2, y: 2, u: 2, r: 3, w: 1, c: 1, m: 2, t: 1, b: 1, s: 1 }
// Note:
// that it shouldn’t be case sensitive



let letterCounter = {

  getCounter: function () {
    let counter = "{"
    for (let i = 97; i <= 122; i++) { //iterates through a-z asci values
      let ch = String.fromCharCode(i);
      if (this[ch] >= 0) {
        counter += ` ${ch}: ${this[ch]}, `;
      }
    }
    if (counter.length > 1) {
      counter = counter.slice(0, -1);
      counter += "}";
    }
    return counter;
  },

  countWord: function (word) {
    for (let i = 0; i < word.length; i++) {
      if ((word.charCodeAt(i) >= 97) && (word.charCodeAt(i) <= 122)) {
        if (!this[word[i]]) {
          this[word[i]] = 1;
        }
        else {
          this[word[i]] += 1;
        }
      }
    }
  },
};


function countLetters(arr) {
  for (let i = 0; i < arr.length; i++) {
    letterCounter.countWord(arr[i].toLowerCase());
  }
  console.log(letterCounter.getCounter());
}

const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
countLetters(array);
