// 1. parent node
// const mainContainer = document.getElementById('main-container');


// 2. create child node
// const placesSection = document.createElement('section');

// create h1 and set innerText and append to parent-placesSection
// const h1 = document.createElement('h1');
// h1.innerText = 'Places I want to visit';
// placesSection.appendChild(h1);

// create ul
// const ul = document.createElement('ul');

// create li and set innerText and append to parent-ul
// const li1 = document.createElement('li');
// li1.innerText = "Cox's Bazar";
// ul.appendChild(li1);

// const li2 = document.createElement('li');
// li2.innerText = "Bandorbon";
// ul.appendChild(li2);

// placesSection.appendChild(ul);


// 3. append the child-placesSection to the parent-mainContainer
// mainContainer.appendChild(placesSection);





/********************* Best Approach ***************************/
// 1. parent node
const mainContainer = document.getElementById('main-container');


// 2. create child node
const booksSection = document.createElement('section');

// set innerHTML
booksSection.innerHTML = `
<h1>Books I need to read</h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
    <li>math</li>
    <li>biology</li>
    <li>simulation</li>
</ul>
`


// append the child-booksSection to the parent-mainContainer
mainContainer.appendChild(booksSection);