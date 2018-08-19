Kata for Lab 9: https://www.codewars.com/kata/reversed-strings/train/javascript


Complete the solution so that it reverses the string value passed into it.
solution('world'); // returns 'dlrow'


Solution:
function solution(str){
  return str.split('').reverse().join('');
}
