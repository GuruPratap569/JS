const name = "Guru"
// console.log(name[0]);
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);
// console.log(`My name is ${name.length} and my repo count is ${repoCount}`);

const gameName = new String("New-hitesh-hc")
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(1,4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   hitesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20chaudhary" 

// console.log(url.replace('%20', "_"))

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'))