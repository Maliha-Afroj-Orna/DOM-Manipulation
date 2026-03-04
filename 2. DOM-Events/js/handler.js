document.getElementById('btn-update-title').addEventListener('click', function() {
    const pageTitleElement = document.getElementById('page-title');
    pageTitleElement.innerText = 'Updated Page Title';
})


document.getElementById('btn-login').addEventListener('click', function () {
    const userElement = document.getElementById('login-user');
    userElement.innerText = "User Logged In";
})


// handle input text
// 1. set event listener
document.getElementById("btn-update-name").addEventListener('click', function () {
    // 2. get the text from the input field
    const nameInput = document.getElementById('input-name');
    const name = nameInput.value;
    
    // set the name
    const nameP = document.getElementById('name');
    nameP.innerText = name;
})