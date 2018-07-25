const myName = `kevin o'halloran`;

var abbrevName = function (name) {
  const nameArr = name.split(' ');
  const res = `${nameArr[0].charAt(0).toUpperCase()}.${nameArr[1].charAt(0).toUpperCase()}`;
  return res;
};

const result = abbrevName(myName);

console.log(result);