const accountId = 12208123
let accountEmail = "dhruvi@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 not allowed
accountEmail = "shubh@gmail.com"
accountPassword = "00000"
accountCity = "ahmedabad"
console.log(accountId,accountPassword );

/* 
prefer not to use vAR
Because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])