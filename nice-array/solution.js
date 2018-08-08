const arr = [2,3,10,9,99,33,34]

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

console.log(isNice(arr));
