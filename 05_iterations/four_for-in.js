const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
 console.log(`${key} is shortcut for ${myObject[key]}`);  
}

const programming = ['js', 'rb', 'py', 'java', 'cpp']
for (const val in programming) {
    console.log(`key is ${val} and value is ${programming[val]}`);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }