document.getElementById('loginForm').addEventListener('submit', 
    function(event) {
    event.preventDefault();

    let studentNum = document.getElementById('studentNumber').value;
    let password = document.getElementById('password').value;

    let validStudentNum = "12345678910";
    let validPassword = "12345";

    if (studentNum === validStudentNum && password === validPassword) {
        localStorage.setItem('loggedIn', 'true');

        window.location.href = 'main.html';
    } else {
        alert('Student Number Not Found/Wrong Password');
    };
});

document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    let emailInput = document.getElementById('forgotEmail');
    let resetButton = document.getElementById('sendResetButton');

    emailInput.addEventListener('input', function() {
        if (emailInput.validity.valid) {
            resetButton.removeAttribute('disabled');
        } else {
            resetButton.setAttribute('disabled', true);
        }
    });


});

function sendResetLink() {
    let email = document.getElementById('forgotEmail').value;
    let confirmationMsg = document.getElementById('confirmationMsg');
    let errorMsg = document.getElementById('forgotErrorMsg');

    if (email) {
        confirmationMsg.textContent = 'A reset password instruction link has been sent to your email.';
        errorMsg.textContent = '';
    } else {
        errorMsg.textContent = 'Please enter a valid email.';
        confirmationMsg.textContent = '';
    }
}