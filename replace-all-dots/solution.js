let myStr = `This ... string... needs... dashes not dots...`;
const replaceDots = function(str) {
  //fixes to original code: escape the dot inside the replace function, and use the global flag to remove all instances.
  var newStr = str.replace(/\./g, '-');
  return newStr;
};
const fixedStr = replaceDots(myStr);
console.log(fixedStr);