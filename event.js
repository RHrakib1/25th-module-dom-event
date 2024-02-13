console.log("this is a js file");
// number 1: sorasori HTML element diye make kora hoyese 
// <!-- number 2: function make kora hoyese-->
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// number 3: akhane function er variable k call krse
const makeBlueBtn = document.getElementById('makeRed');
makeBlueBtn.onclick = makered1;

function makered1() {
    document.body.style.backgroundColor = 'red';
}

// number 3 anpther: sorasori fuction make korse 
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makeColor() {
    document.body.style.backgroundColor = "purple"
}