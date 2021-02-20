const maskify = (str) => str.split("").map((ch, index) => index < str.length - 4 ? '#' : ch).join("");

console.log(maskify("kershenovich"));