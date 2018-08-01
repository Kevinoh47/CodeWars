let num = 12034556792;
function insertDash(num){
  let numArr = num.toString().split('');
  let previousNumeralIsOdd = false;
  let newArr = [];
  numArr.forEach(function(element){
    if (element % 2 > 0) {
      // odd and previous was odd
      if (previousNumeralIsOdd) {
        newArr.push('-');
        newArr.push(element);
        previousNumeralIsOdd = true;
      }
      //odd but previous is not odd
      else {
        newArr.push(element);
        previousNumeralIsOdd = false;
      }
    }
    // not odd
    else {
      newArr.push(element);
      previousNumeralIsOdd = false;
    }
  });
  //set arr to string
  const final = newArr.join("");
  return final; 
}
console.log(insertDash(num));
