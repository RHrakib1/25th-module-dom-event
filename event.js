console.log("this is a js file");
// number 1: sorasori HTML element diye make kora hoyese 
// <button onclick="document.body.style.backgroundColor='blue'"> make color</button>
// <!-- number 2: function make kora hoyese html file a call kora hoyese-->
function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
// number 3: akhane function er variable k call krse
const makeBlueBtn = document.getElementById('makeRed');
makeBlueBtn.onclick = makered1;

function makered1() {
    document.body.style.backgroundColor = 'red';
}

// number 3 another: sorasori fuction make korse 
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makeColor() {
    document.body.style.backgroundColor = "purple"
}

// numer 4:
const makePinkbtn = document.getElementById('make-pink');
makePinkbtn.addEventListener('click', makepink);
function makepink() {
    document.body.style.backgroundColor = 'pink'
}

// number 4 another:
const yellowColor = document.getElementById('make-yellow');
yellowColor.addEventListener('click', function colorallow() {
    document.body.style.backgroundColor = 'yellow';
})

// final
// document.getElementById('tomatoBtn', function () {};
// document.getElementById('tomatoBtn').addEventListener('click', function(){});
document.getElementById('tomatoBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})

