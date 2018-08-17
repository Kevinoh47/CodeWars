const inputArray = [3,1,2];

var gimme = function (inputArray) {
  //Hack: if i don't convert to a string, this constant is also updated by the sort somehow. This is a bit of a mystery.
  const inputStr = inputArray.toString(',');

  inputArray.sort(function(a, b) {
    return a - b;
  });

  const middleValue = inputArray[1];

  const reconstitutedInput = inputStr.split(",").map(Number);

  return reconstitutedInput.indexOf(inputArray[1]);
};

console.log(gimme(inputArray));
