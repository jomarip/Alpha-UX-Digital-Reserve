$(document).ready(function() {

    //Sign-in page functionality
    $('#dark-close-icon, .backdrop').on('click', () =>{
        $('#loginSection').removeClass('login-open');
    })

    $('#forgotPwd').on('click', () => {
        $('#loginSection').removeClass('login-open');
        $('#loginSection').addClass('forgotpwd-open');
    })

    $('#signUp').on('click', () => {
        $('#loginSection').removeClass('login-open');
        $('#loginSection').addClass('signup-open');
    })

    //Sign-up page functionality
    $('.darksignup-close-icon, .backdrop').on('click', () =>{
        $('#loginSection').removeClass('signup-open');
    })

    $('#signIn').on('click', () => {
        $('#loginSection').removeClass('signup-open');
        $('#loginSection').addClass('login-open');
    })
    //Forgot-pwd page functionality
    $('.darkpwd-close-icon, .backdrop').on('click', () =>{
        $('#loginSection').removeClass('forgotpwd-open');
    })
});