// Loops

// 1. for of 

// ["", "", ""]
// [{}, {}, {}]

const Arr = [5, 6, 8, 9, 98 ,76]
for (const val of Arr) {
    // console.log(`value is ${val}`);
}

const greetings = "Hello World!"
for (const greet of greetings) {
    if (greet == "o" || greet == " " ) {
        continue
    }
    //console.log(greet);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")
// console.log(map);

for (const [a,b] of map) {
    //  console.log(a, '->', b);
}

for (const [key, values] of map) {
    // console.log(key, ':-', values);
}


// const myObject = {
//     game1 : 'NFS',
//     game2 : 'Spiderman'
// }
// for (const [key, value] of myObject) {
//      console.log(key, ':-', value);
// }