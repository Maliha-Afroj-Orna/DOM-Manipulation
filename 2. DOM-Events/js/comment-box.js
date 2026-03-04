// 1. set an event handler to the button
document.getElementById('btn-post-comment').addEventListener('click', function () {
    // 2. get the text written in the comment text area
    const commentBoxElement = document.getElementById('comment-box');
    const commentBoxValue = commentBoxElement.value;

    // 3. get the parent node where to publish the comment
    const postSection = document.getElementById('post');

    // 4. create a new comment p and set the innerText
    const newComment = document.createElement('p');
    newComment.classList.add('comment');
    newComment.innerText = commentBoxValue;

    // 5. append the new p tag to the parent node
    postSection.appendChild(newComment);

    // 6. clean the text area
    commentBoxElement.value = '';

})