// setting variables for the input, button, and the paragraphs where the output will be displayed
const inputVal = document.getElementById('inpt')
const btn = document.getElementById('btn')

const showLength = document.getElementById('show-length')
const showVolume = document.getElementById('show-volume')
const showMass = document.getElementById('show-mass')

/*
unit conversion calculations
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//adding event listener to button. When clicked this will call the main function 'convert' which will call the 3 other functions: length, volume, and mass
btn.addEventListener('click',convertVal)

function convertVal() {

    // checking for negative numbers with conditional
    if(inputVal.value < 0){
        alert('Value can not be a negative number. Please enter a number greater than or equal to 0.')
    }else  {
        //calling each function to convert the given input value for either singular or plural
        length()
        volume()
        mass()
    }

    //resets the input to show blank
    inputVal.value = ''
}

function length() {

    if(inputVal.value == 1){
        showLength.innerText = `${inputVal.value} meter = ${(inputVal.value * 3.281).toFixed(3)} feet | ${inputVal.value} foot = ${(inputVal.value/3.281).toFixed(3)} meters`
    }else {
        showLength.innerText = `${inputVal.value} meters = ${(inputVal.value * 3.281).toFixed(3)} feet | ${inputVal.value} feet = ${(inputVal.value/3.281).toFixed(3)} meters`
    }
 }

function volume() {

    if(inputVal.value == 1){
        showVolume.innerText = `${inputVal.value} liter = ${(inputVal.value * 0.264).toFixed(3)} gallons | ${inputVal.value} gallon = ${(inputVal.value/0.264).toFixed(3)} liters`
    }else {
        showVolume.innerText = `${inputVal.value} liters = ${(inputVal.value * 0.264).toFixed(3)} gallons | ${inputVal.value} gallons = ${(inputVal.value/0.264).toFixed(3)} liters`
    }
}

function mass() {

    if(inputVal.value == 1){
        showMass.innerText = `${inputVal.value} kilo = ${(inputVal.value * 2.204).toFixed(3)} pounds | ${inputVal.value} pound = ${(inputVal.value/2.204).toFixed(3)} kilos`
    }else {
        showMass.innerText = `${inputVal.value} kilos = ${(inputVal.value * 2.204).toFixed(3)} pounds | ${inputVal.value} pounds = ${(inputVal.value/2.204).toFixed(3)} kilos`
    }
}