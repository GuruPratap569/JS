// function username() {
//     console.log("Guru Pratap Gupta");
// }
// username()


// function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2)
// }
// addTwoNumbers(1, 2)


// function addTwoNumbers(num1, num2) {
//    console.log(num1 + num2)
// }
// addTwoNumbers(11, 12)


// function addTwoNumbers(num1, num2) {
//    return (num1 + num2)
// }
// console.log( addTwoNumbers(5, 'a') )


// function addTwoNumbers(num1, num2) {
//    result = num1 + num2
//    return result
// }
// const sum = addTwoNumbers(5, "8") 
// console.log("Sum: ", sum);

// function loginUserMessage(username) {
//     if (username === undefined) {   
   
//         console.log("please enter a username");
//         return
//     }

//     return `${username} just logged in`
// }
// // console.log(loginUserMessage("Guru"))
// console.log(loginUserMessage())  //give Undefine

//or we can write this way

function loginUserMessage(username = "Alok") {
     if (!username) {                 //"->default value
         console.log("please enter a username");
         return
     }
 
     return `${username} just logged in`
 }
//  console.log(loginUserMessage())
// console.log(loginUserMessage("HItesh"))
 
                         // ... is rest oprator , ... ko spread oprator v bolte hai
function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 2000))


const user = {
    username: "hitesh",
    price: 133
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}}`);
}
// handleObject(user)      //or we can put directly object
handleObject({
    username: "sam",
    price:499
})


const myNewArray = [200, 400, 500, 600]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([2100, 4200, 5500, 7600]));