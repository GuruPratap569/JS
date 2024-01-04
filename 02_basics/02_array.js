const marval_heros = ['thor', "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)  //changes occures in existing array

// console.log(marval_heros);
// console.log(marval_heros.length);
// console.log(marval_heros[3][1]);

//const allHeros = marval_heros.concat(dc_heros)  //concat make New array
// console.log(allHeros);


// const all_new_heros = [...marval_heros, ...dc_heros]
//                     //  "=>spread operator
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const useable_another_array = another_array.flat(Infinity)
// console.log(useable_another_array);


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"));
console.log(Array.from({ name: "Hitesh" })); // interview


let score1=100
let score2=400
let score3 = 500
console.log(Array.of(score1,score2,score3))