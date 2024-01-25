const userEmail = []
// const userEmail = ""

if (userEmail) {
    console.log("Got user email");
}
else {
    console.log("Don't have user email");
}

// falsy Values

// -> false, 0, -0, BigInt 0n, "", null, undefine, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0){
//    console.log("Object is empaty");
//}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empaty");
}

//Nullish COalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

let val2 = null ?? 18
let val3 = undefined ?? 25

// console.table([val1, val2, val3]);


// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");