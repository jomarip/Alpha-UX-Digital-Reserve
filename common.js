$(document).ready(function() {
    $('#switch-node-progress-container').load('switch_lite_node_progress_component/switch-lite-node-progress.html')
    $('#main-container').load('unsigned_header_component/unsigned-header.html');
    $('#footer-container').load('footer_component/footer.html');
    $('#switch-node-popup-container').load('switch_node_popup_component/switch-node-popup.html');
    $('#lite-full-node-popup-container').load('lite_full_switch_node_popup_component/lite-full-switch-node-popup.html');
    $('#contact-us-popup-container').load('contact_us_popup_component/contact-us-popup.html');
    // $('#signed-header-container').load('signed_header_component/signed-header.html')
    $('#borrow-denarii-modal-1').load('borrow_denarii_component/borrow-denarii.html')
    $('#mint-denarii-contanier').load('mint_danarii_component/mint-danarii.html')
    $('#home-container').load('home_component/home.html');
    $('#about-us-conatiner').load('about_us_component/about-us.html');
    $('#faq-container').load('faq_component/faq.html');
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
        $('body').addClass('overflow-hidden-menu');
    })
    $(document).on('click', '.close-icon', function(){
        $('.header-wrapper').removeClass('show-menu');
        $('body').removeClass('overflow-hidden-menu');
    })
    $(document).on('click', '.signed-toggle-icon', function(){
        $('.signed-header-wrapper').toggleClass('show-signed-menu');
    })
    $(document).on('click', '.menu-close-icon', function(){
        $('.signed-header-wrapper').removeClass('show-signed-menu');
        // $('.signed-collapse-wrapper').removeClass('show');
    })
    $('#about-us-conatiner').hide();
    $('#faq-container').hide();
    $(document).on('click', '.home-navigation', function(){
        $('#home-container').show();
        $('#about-us-conatiner').hide();
        $('#faq-container').hide();
    })
    $(document).on('click', '.navigation-link', function(){
        var attt_value = $(this).attr('data-attr');
         if( attt_value == "AboutUs"){
            $('#about-us-conatiner').show();
            $('#home-container').hide();
            $('#faq-container').hide();
        }
        else if(attt_value == "FAQ"){ 
            $('#faq-container').show();
            $('#about-us-conatiner').hide();
            $('#home-container').hide();
        }
        else if(attt_value == "home"){
            $('#home-container').show();
            $('#about-us-conatiner').hide();
            $('#faq-container').hide();
        }
        else{
            $('#home-container').show();
        }
    })
});