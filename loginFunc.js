document.getElementById('loginForm').addEventListener('submit', 
    function(event) {
    event.preventDefault();

    let studentNum = document.getElementById('studentNumber').value;
    let password = document.getElementById('password').value;

    // predefined muna pag login
    let validStudentNum = "12345678910";
    let validPassword = "12345";

    if (studentNum === validStudentNum && password === validPassword) {
        localStorage.setItem('loggedIn', 'true');

        window.location.href = 'main.html';
    } else {
        alert('Student Number Not Found/Wrong Password');
    };
});