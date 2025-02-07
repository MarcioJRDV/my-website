document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Your demo request has been submitted!");
    // Here, you can integrate with an API to handle form submission, save the data, or redirect the user.
});