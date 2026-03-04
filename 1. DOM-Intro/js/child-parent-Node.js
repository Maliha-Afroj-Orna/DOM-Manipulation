// childNodes
// console.log(document.getElementById('players-container').childNodes);
// console.log(document.getElementById('players-container').childNodes[0]);
// console.log(document.getElementById('players-container').childNodes[3].childNodes);
// console.log(document.getElementById('players-container').childNodes[3].childNodes[1]);


// parentNode
// console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode);
// console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode);
// console.log(document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode);


// 3 steps to add an element
// 1. create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New born baby footballer';
// 2. find the parent where you will add the child
const playersList = document.getElementById('player-list');
// 3. append the child to the parent
playersList.appendChild(newChild);