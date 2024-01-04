//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "hitesh",
    "full name": "hitesh chaudhary",
    age: 18,
    [mySym]: "mykey1",
    location:"jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email);  // or
// console.log(JsUser["email"]); //another ways to access ovject
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); //Symbol ko access karene ka syntax

// JsUser.email ="hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email ="hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser)
// console.log(JsUser.greeting)
// console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

