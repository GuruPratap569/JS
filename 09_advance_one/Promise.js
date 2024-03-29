const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    //DB calls, Cryptogaphy, Network
    setTimeout(function () {
        console.log('Async task is completed');
        resolve()
    }, 1000)
})
promiseOne.then(function () {
    console.log('promises consumed');
})

//----------------------------------------------

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2');
        resolve()
    }, 1000)
})
    .then(function () {
        console.log('Async 2 resolved');
    })

//------------------------------------------

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Chai', email: 'chai@gmail.com' })
    }, 1000)
})
promiseThree.then(function (user) {
    console.log(user);
})

//---------------------------------------------

promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        // let error = true
        if (!error) {
            resolve({ username: 'AlokGupta', password: '12345' })
        } else {
            reject('ERROR: Somethingwent wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

//----------------------------------------

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: "JavaScript", password: '123' });
        } else {
            reject('Error: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

//--------------------------------------------------

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("E: ", error);  
//     }
// }
// getAllUsers()

//---------------------------------------------------------------

fetch("https://api.github.com/users/hiteshchoudhary")
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))
    
    // promise.all
    // yes this is also available, kuch reading aap b kro.