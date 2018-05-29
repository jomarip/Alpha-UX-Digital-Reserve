$(document).ready(function() {
    $('#loginSection').load('unsigned_header_component/login_component/login.html');
    $('.login-btn').on('click', function() {
        $('#loginSection').addClass('login-open');
    })
});