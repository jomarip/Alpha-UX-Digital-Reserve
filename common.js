$(document).ready(function() {
    $('#switch-node-progress-container').load('switch_lite_node_progress_component/switch-lite-node-progress.html')
    $('#main-container').load('unsigned_header_component/unsigned-header.html');
    $('#footer-container').load('footer_component/footer.html');
    $('#switch-node-popup-container').load('switch_node_popup_component/switch-node-popup.html');
    $('#lite-full-node-popup-container').load('lite_full_switch_node_popup_component/lite-full-switch-node-popup.html');
    $('#contact-us-popup-container').load('contact_us_popup_component/contact-us-popup.html');
    $('#about-us-conatiner').load('about_us_component/about-us.html')
    $('#home-container').load('home_component/home.html')
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