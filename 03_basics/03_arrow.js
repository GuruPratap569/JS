const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        // console.log(this)
    }   
}
// user.welcomeMessage()
// user.username = "Alok"
// user.welcomeMessage()
// console.log(this);


// function chai() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()


const chai = () => {
    let username = "hitesh"
    console.log(this);
}
//chai()


// const addTwo = (num1, num2) => {      //explicite return
//     return num1 + num2
// }
// console.log(addTwo(4,8));


// const addTwo = (num1, num2) =>  num1 + num2   //implicite return
// console.log(addTwo(4,8));


// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(4, 8));

                                   //object
const addTwo = (num1, num2) => ({username: "Alok"})
console.log(addTwo(4,8));

