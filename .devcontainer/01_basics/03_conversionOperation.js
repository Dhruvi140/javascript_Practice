//convert to number  "33" => 33
let score = "33"
console.log(typeof (score))
let valueNumber = Number(score)
console.log(valueNumber);
console.log(typeof valueNumber);

// string convert  "dhruvi" => NaN is a type of number
let candid = "Dhruvi"
console.log("2.", typeof (candid))
let valuename = Number(candid)
console.log(valuename);
console.log(typeof valuename);

//check  in null 


let check = null
console.log("3.", typeof (check))
let valuecheck = Number(check)
console.log(valuecheck);
console.log(typeof valuecheck);

//checke undefined
let checkUndefine = undefined
console.log("4.", typeof (checkUndefine))
let valueundefine = Number(checkUndefine)
console.log(valueundefine);
console.log(typeof valueundefine);

//check boolean   true = > 1 , false =>0
 let logIn = true
 console.log("5",typeof(logIn))
 let valueLog = Number (logIn)
 console.log(valueLog);
 console.log(typeof valueLog); 

 // conversion in a boolean datatype
 let itCon = "dhruvi"                   //1 => true; 0 => false
 console.log("boolean_",typeof(itCon))  //"" => false
 let booleanIsConv = Boolean(itCon)     //"abc" => true
 console.log(booleanIsConv);
 console.log(typeof booleanIsConv);   

 //conversion in a String datatype
 let someNumber = 33
console.log("String_convert",typeof(someNumber))
 let StringNumber = String(someNumber)
 console.log(StringNumber);
 console.log(typeof StringNumber)