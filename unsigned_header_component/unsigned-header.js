$(document).ready(function() {
    $('#loginSection').load('unsigned_header_component/login_component/login.html');
    $('#shareDetailsSection').load('unsigned_header_component/share_details_component/share-details.html')

    //Join Sidebar
    $('.revolution-btn').on('click', () => {
        $('#loginSection').addClass('signup-open');
    });
    //Login Sidebar
    $('.login-btn').on('click', () => {
        $('#loginSection').addClass('login-open');
    })
    //Shared Details Sidebar
    // $('*****').on('click', () => {
    //     $('#shareDetailsSection').addClass('share-details-open');
    // })
});