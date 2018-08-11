str = const str = 'This website is for losers LOL!';

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let resultArr = [];
  str.split('').forEach(function(element) {
    (vowels.indexOf(element) === -1) ? resultArr.push(element) : resultArr;
  })
  return resultArr.join('');
}

console.log(disemvowel(str));
