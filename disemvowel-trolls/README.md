Kata for Lecture 7: https://www.codewars.com/kata/disemvowel-trolls

Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.

'use strict';

const str = 'This website is for losers LOL!';

let disemvowel = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const strArr = str.split('');
  let resultArr = [];
  strArr.forEach(function(element) {
    if (vowels.indexOf(element) === -1) {
      resultArr.push(element);
    }
  })
  return resultArr.join('');
};

console.log(disemvowel(str));

Slightly refactored:

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let resultArr = [];
  str.split('').forEach(function(element) {
    (vowels.indexOf(element) === -1) ? resultArr.push(element) : resultArr;
  })
  return resultArr.join('');
}
////////// some fancier solutions:

disemvowel = str => str.replace(/[aeiou]/gi,'');

function disemvowel(str) {
  var diemvoweledStr = str.replace(/[aeiou]/gi,"");
  return diemvoweledStr;
}

function disemvowel(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  return str.split('').filter(function(el) {
    return vowels.indexOf(el.toLowerCase()) == -1;
  }).join('');
}
