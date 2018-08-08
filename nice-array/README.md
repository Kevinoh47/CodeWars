Kata for Lecture 6: https://www.codewars.com/kata/nice-array/train/javascript

A Nice array is defined to be an array where for every value n in the array, there is also an element n-1 or n+1 in the array.
example:
[2,10,9,3] is Nice array because

2=3-1
10=9+1
3=2+1
9=10-1
Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. You should also return false if input array has no elements.

My solution:

function isNice(arr){
  if (arr.length === 0) {
    return false;
  }
  let result;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let prev = current - 1;
    let next = current + 1;

    if (arr.indexOf(prev) !== -1 || arr.indexOf(next) !== -1) {
      result = true
    } else {
      result = false;
      break;
    }
  }
  return result;
}
