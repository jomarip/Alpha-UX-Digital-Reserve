$(document).ready(function() {
    $('#main_container').load('signup_header_component/signup-header.html');
    var location_href = window.location.href;
    var result = location_href.substring(location_href.lastIndexOf('/')+1);
    if(result == 'about-us'){
    }
    else{
    }

});