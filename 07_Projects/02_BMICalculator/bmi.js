const form = document.querySelector('form')
//this usecase will give you empty--.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    // console.log(height);
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;
    }



    
    const val = parseInt(document.querySelector('#results').textContent)
    console.log(val);

    if (val < 18.6) {
        const div = document.createElement("div")
        results.appendChild(div)
        div.innerHTML = "Under Weight" 

    }
    else if (val > 24.9) {
        const div = document.createElement("div")
        results.appendChild(div)
        div.innerHTML = "Over Weight" 
    }
    else {
        const div = document.createElement("div")
        results.appendChild(div)
        div.innerHTML = "Normal Weight" 
    }
})

