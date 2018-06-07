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
$(document).ready(function($) {
    $(".updated-value-block input").focus(function(){
      $(this).addClass("field-focus");
   
     }).blur(function(){
      $(this).removeClass("field-focus");
      
      tmpval = $(this).val();
      if(tmpval == '') {
        if( $(this).hasClass('field-focus')){
            $(this).removeClass('field-focus');
        }
      }
       else {
          $(this).addClass('field-focus');
      }
     });
   }); 