Kata for lecture 3: https://www.codewars.com/kata/insert-dashes/train/javascript
Completed kata: https://www.codewars.com/kata/55960bbb182094bc4800007b/solutions/javascript

Write a function insertDash(num)/InsertDash(int num) that will insert dashes ('-') between each two odd numbers in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

function insertDash(num) {
   //code me
}


so…
1. Take input number and push each digit onto an array
2. test each numeral for whether it is odd or even.
3. map the results, such that we can corrolate numerals to odd/even
4. New array, with dashes spliced (?) in between two odds
5. Convert to string and return


Answer:

let num = 12034556792;
function insertDash(num) {
   let numArr = num.toString().split('');
  let numeralIsOdd = false;
  let newArr = [];
  numArr.forEach(function(element){
    if (element % 2 > 0) {
      // odd and previous was odd
      if (numeralIsOdd) {
        newArr.push('-');
        newArr.push(element);
      }
      //odd but previous is not odd
      else {
        newArr.push(element);   
      }
      numeralIsOdd = true;
    }
    // not odd
    else {
      newArr.push(element);
      numeralIsOdd = false;
    }
  });
  //set arr to string
  const final = newArr.join("");
  return final;
}
console.log(insertDash(num));
