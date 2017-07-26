// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x,y){
    if (x < y) {
      return y;
  } else (x > y)
    return x;
}
console.log(max(1,3));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(n,x,y){
    if (n > x && n > y) {
      return n;
  } else if (x > n && x > y) {
    return x;
  } else if (y > n && y > x) {
    return y;
  } else if (n === x && x===y) {
    return "Same Numbers";
  } else {
    return "Something went wrong";
  }
}

console.log(maxOfThree(10,7,44));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
    let result;
    result = char == "a" || char == "e" || char == "i" || char == "o"|| char == "u";
    return result;
}

console.log(isVowel("q"))

// NOTE: Something about an example?

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

function sum(x,y) {
    return x + y;
}
let answer= sum(88,5);
console.log(answer);

// NOTE: Something about an example?

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg (n, x, y) {
  return (n+x+y)/3;
}
let new_answer = avg (6,5,5);
console.log(new_answer);


// NOTE: Something about an example?

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
console.log("string".length); //This works

function getLength (string) {
  return string.length
}
console.log(getLength("apple"))

// NOTE: Soemthing about an example?

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(x,y) {
  if (x > y) {
    return "true";
  } else if (x < y) {
    return "true"
  }
}
console.log(greaterThan(10,5));

// NOTE: Example?
// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.

function greet (x) {
  return "Hello, " + x + "!";
}
console.log(greet("Jacob"));

// NOTE: Example?

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.

function madlib (verb, noun, creature, fruit) {
  return "This " + verb + " became  a " + creature + " of a day. I'd rather eat an " + fruit + ".";
}
console.log(madlib("quickly","barn", "squirrel","apple"))
