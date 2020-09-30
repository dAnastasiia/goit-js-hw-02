function checkForSpam(str) {
  "use strict";
  // Write code under this line
  const spam = ["spam", "[spam]", "sale"];
  let normalizedStr = str.toLowerCase();
  let words = normalizedStr.split(" ");
  let message = false;

  for (const word of words) {
    if (spam.includes(word)) {
      message = true;
      break;
    }
  }

  return message;
}

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true;

//   if (words.includes(spam)) {
//     let a = "good";
//   }
//   for (let i = 0; i < words.length; i += 1) {
//     let wordFromString = words[i];

//     //   for (let j = 0; j < spam.length; j += 1) {
//     //     if (wordFromString === spam[j]) {
//     //       // return true;
//     //       console.log("true");
//     //       break;
//     //     }
//     //   }
//   }

//   for (let i = 1; i < words.length; i += 1) {
//     word += words[i];
//   }
