// //number

// console.log(12);
// console.log(3.45);

// // impo. application of 0 and -0
// console.log(0)
// console.log(-0)

// //string
// console.log("This is string");
// console.log(`This is backtick string`)
// console.log(true);


// //null,undefined
// console.log(undefined);
// console.log(null);

// //object -  key-value pair, dictionary in python,map in c++
// console.log({"Gaurav":1234});

// //symbol
// console.log(Symbol('hello'));

// //operators

// // ------------typeof  --------------------
// console.log(typeof 12)      //"number"
// console.log(typeof 0)       //"number"
// console.log(typeof "abc")   //"string"

// // ------------------- 

// console.log("----------imp");

// console.log(typeof null);   //object

// console.log(typeof undefined);

// console.log(typeof {"sanket":12})

// console.log("--------Imp")
// console.log(typeof NaN)

// // ----console.log 
// console.log("get output on same line use process.stdout")


// process.stdout.write("hello");
// process.stdout.write("world");

// //----------------variables

// console.log("variable define keywords--:::let, var, const")
// let x=10;
// var y=20;
// //const z="abcd";  //you can not change its value
// z=10
// console.log(x,y,z)

// // ----------operators

// console.log(10+2)
// console.log(10-2)
// console.log(10*2)
// console.log(10/3)   //give answer in point in 16 digit
// console.log(10%2)

// //if we want in floor division
// //use 
// console.log(parseInt(5/2))

// console.log(Math.floor(5/2))


// //Assignment
// x=10
// x+=2  //x=x+2
// x-=2   //x=x-2

// //logical operator

// console.log((10>5)&&(7<6))

// console.log(4 && 0);  //0
// console.log(4 || 0);  //4
// console.log((0&& 4)) ; //0

// console.log("Below one is important  4||5");
// console.log(4 || 5);  //4  return 1st value

// console.log(4 && 5); //5 return last value

// console.log(0||-0);

// console.log(0 && -0)

// console.log(-0||1 )

// console.log(-0 && 1)

// console.log(NaN || 0)

// console.log(NaN && 0)



// ---------Day 3-----------------------

// // cpmaprison operator   >,<,
// // !=abstract not equal to
// // !== strict not equal to
// // ==  abstract equality operator,
// // === strict equality operator  
// console.log("!=abstract not equal to")
// console.log("!== strict not equal to") 
// console.log("==  abstract equality operator") 
// console.log("=== strict equality operator")

// console.log("string base operator to conatenate  +")

// console.log("Bitwise Operator---------- convert number in binary form and then applied");

// console.log("Biitwise-: and &, or |, xor ^,not ~, leftshift <<,rightshift >>")

// console.log(5&3) //101 &011=001
// console.log(8|1)
// console.log(3^3)    //xor same number 0 different number 1
// console.log(5 <<1); //1  multiply by 2
// console.log(5 >>1); // divide by 22

// //string concatenate
// console.log("string"+"node");

// // conditional operator
// console.log(2>1 ? 2: 1)

// // statment and expression
// x=0
// let a=10;
// a=1+(x+2);

// // condition

// if(10>2)
// {
//     console.log(10)
// }
// else
// {
//     console.log(2)
// }

//---------------function  by default return undefined
function fun(x){
    console.log(x);
    return x+10
} 

console.log(fun(10))



