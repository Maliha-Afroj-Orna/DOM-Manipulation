console.log("first file");

const allSections = document.getElementsByTagName('section');
console.log(allSections);

const firstTitle = document.getElementById('first-title');
console.log(firstTitle);
console.log(firstTitle.innerText);
firstTitle.innerText = "This is the first section";