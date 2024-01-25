// for 

// for (let i = 0; i <= 10; i++) {
//     const element = i
//     console.log(element);
// }

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        //console.log("5 is the best number");
    }
    //console.log(element);
}
// console.log(element);  can not access

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}` );
    for (let j = 1; j <= 10; j++) {
    //   console.log(`inner loop value ${j} and inner loop ${i}`);
       //console.log(`${i}*${j} = ${i*j}`); 
    }
}

let myArray = ['flash', 'batman', 'suerman']
for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
}

// break and continue  ->

// for (let index = 0; index < 11; index++) {
//     if (index == 5) {
//        console.log("5 is detected");
//         break
//    }
//     console.log(`Value of index is ${index}`);
// }

for (let index = 0; index <= 11; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);
}