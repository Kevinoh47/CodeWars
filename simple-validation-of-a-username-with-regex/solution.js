let username = 'testmyusername012'

function validateUsr(username) {
  res =  /^[a-z0-9_]{4,16}$/.test(username) ;
  return res;
}

console.log(validateUsr(username));
