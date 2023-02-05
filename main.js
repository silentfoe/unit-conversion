// setting variables for the input, button, and the paragraphs where the output will be displayed
const inputVal = document.getElementById('inpt')
const btn = document.getElementById('btn')

const showLength = document.getElementById('show-length')
const showVolume = document.getElementById('show-volume')
const showMass = document.getElementById('show-mass')

//adding event listener to button. When clicked this will call the main function 'convert' which will call the 3 other functions: length, volume, and mass
btn.addEventListener('click',convertVal)


function convertVal() {
    //calling each function to convert
    length()
    volume()
    mass()

    //resets the input to show there is nothing in it
    inputVal.value = ''
}




function length() {

    //putting the 
    showLength.innerText = inputVal.value * 2

}

function volume() {


}


function mass() {



}