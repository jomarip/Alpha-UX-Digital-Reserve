$(document).ready(function() {
    $('#main-container').load('unsigned_header_component/unsigned-header.html');
    $('#footer-container').load('footer_component/footer.html');
    // $('#main_container').load('about_us_component/about-us.html');
    var location_href = window.location.href;
    var result = location_href.substring(location_href.lastIndexOf('/')+1);
    if(result == 'about-us'){
    //    alert("sucess");
    }
    else{
        // alert('fail');
    }

    $(document).on('click', '.toggle-icon', function(){
            $('.header-wrapper').toggleClass('show-menu');

    })
    $(document).on('click', '.close-icon', function(){
        $('.header-wrapper').removeClass('show-menu',500);
    })

    
});