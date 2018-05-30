$(document).ready(function() {
    $('#dark-close-icon, .backdrop').on('click', () =>{
        $('#loginSection').removeClass('login-open');
    })

    $('#forgotPwd').on('click', () => {
        $('#loginSection').removeClass('login-open');
        $('#loginSection').addClass('forgotpwd-open');
    })

    $('.darkpwd-close-icon, .backdrop').on('click', () =>{
        $('#loginSection').removeClass('forgotpwd-open');
    })
});