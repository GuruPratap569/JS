// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')

// const date = new Date()
// console.log(date.toLocaleTimeString());

setInterval(function () {
    const date = new Date().toLocaleTimeString()
    clock.innerHTML = date
}, 1000)