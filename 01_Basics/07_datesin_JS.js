
    let myDate = new Date()
    // console.log(myDate);
    // console.log(myDate.toString());
    // console.log(myDate.toDateString());
    // console.log(myDate.toLocaleString());
    // console.log(typeof myDate);

    // let myCreateDate = new Date(2024, 0 ,23)
    // let myCreateDate = new Date(2024, 0, 23, 5, 3)
    let myCreateDate = new Date("01-14-2024")
    // console.log(myCreateDate);
    console.log(myCreateDate.toLocaleString());
    

let myTimeStapm = Date.now()

console.log(myTimeStapm);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));