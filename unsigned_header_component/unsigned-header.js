$(document).ready(function() {
    $('#loginSection').load('unsigned_header_component/login_component/login.html');
    $('.revolution-btn').on('click', () => {
        $('#loginSection').addClass('signup-open');
    });
    $('.login-btn').on('click', () => {
        $('#loginSection').addClass('login-open');
    })
});