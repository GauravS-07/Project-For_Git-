console.log("1"+"2")  //12
console.log(1+"2")  //12
console.log(1-"1") //0

//Boolean and Equality  don't start with { brace it treat it as block not object

console.log(!0)
console.log(!-4) 
// -4 -->truthy
// ToBoolean(-4)===true
// t(-4)===> !true->false 
console.log(!{})
x=NaN
console.log(x==x)
console.log(10==10)
console.log(0==-0)

//Strict equality compare
console.log(NaN===23)
console.log(33===33)
console.log(null ===null)

//== and process
console.log(null==undefined);
console.log("jfjf")

// git add <filename>  ----start tracking changes for next commit
// git commit -m "message"--- create new version on previous change
console.log("run")
