console.log('external file');


// option-2 for event handler
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// option-3 for event handler - get element by ID and then set onclick
const btnMakeBlue = document.getElementById('btn-make-blue');
btnMakeBlue.onclick = function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// option-4 for event handler
const btnMakePurple = document.getElementById('btn-make-purple');
btnMakePurple.onclick = makePurple;
function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


// option-5 for event handler - addEventListener() 
// document.getElementById('idName').addEventListener('eventType', handlerFunction)
document.getElementById('btn-make-green').addEventListener('click', function() {
    document.body.style.backgroundColor = 'green';
})