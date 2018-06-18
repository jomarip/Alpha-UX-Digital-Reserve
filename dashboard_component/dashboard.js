$(document).ready(function() {

    $('#signed-header-container').load('../signed_header_component/signed-header.html');
    $('#send-denarii-conatainer').load('../send_denarii_component/send-denarii.html')
    $('#lend-denarii-container').load('../lend_denarii_component/lend-denarii.html')
    $('#request-denarii-container').load('../request_denarii_component/request-denarii.html')
    $('#borrow-denarii-modal-1').load('../borrow_denarii_component/borrow-denarii.html')
    $('#mint-denarii-contanier').load('../mint_danarii_component/mint-danarii.html')
    $('#dashboard_detail_component').load('dashboard_detail_component/dashboard-detail.html');
    $('#dashboard_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
    $('#dashboard_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
    $('#dashboard_recent_transactions_component').load('dashboard_recent_transactions_component/dashboard-recent-transactions.html');
    $('#dashboard_minting_component').load('dashboard_minting_component/dashboard-minting.html');
    $('#dashboard_overview_component').load('dashboard_overview_component/dashboard-overview.html');
    $('#dashboard-left-container').show();
    $('#share-details-wrap').load('../unsigned_header_component/share_details_component/share-details.html')
    
    $(document).on('click', '.signed-toggle-icon', function(){
        $('.signed-header-wrapper').toggleClass('show-signed-menu');
        if($('.signed-header-wrapper').hasClass('show-signed-menu')){
            $('body').addClass('overflow-hidden-menu');
        }
        else{
            $('body').removeClass('overflow-hidden-menu');
        }
    });

    $(document).on('click', '.menu-close-icon', function(){
        $('.signed-header-wrapper').removeClass('show-signed-menu');
        $('body').removeClass('overflow-hidden-menu');
    });
    
    $('#wallet-page').hide();
    $(document).on('click', '.signed-list-link', function(){
        var attr_value = $(this).attr('data-attr');
        $(this).addClass('signin-active');
        $(this).parents('.nav-item').siblings('.nav-item').find('.nav-link').removeClass('signin-active');
        if($('body').hasClass('overflow-hidden-menu')){
            $('body').removeClass('overflow-hidden-menu');
        }
        if( attr_value == "Dashboard"){
            $('#dashboard-page').addClass('active');
            $('#wallet-page,#learn-page').removeClass('active');
            $('#dashboard_detail_component').load('dashboard_detail_component/dashboard-detail.html');
            $('#dashboard_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
            $('#dashboard_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
            $('#dashboard_recent_transactions_component').load('dashboard_recent_transactions_component/dashboard-recent-transactions.html');
            $('#dashboard_minting_component').load('dashboard_minting_component/dashboard-minting.html');
            $('#dashboard_overview_component').load('dashboard_overview_component/dashboard-overview.html');
            
        }  
        else if( attr_value == "Wallet"){
            $('#dashboard-page,#learn-page').removeClass('active');
            $('#wallet-page').addClass('active');
            $('#wallet_all_transactions_component').load('wallet_all_transactions_component/wallet-all-transactions.html');
            $('#wallet_detail_component').load('dashboard_detail_component/dashboard-detail.html');
            $('#wallet_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
            $('#wallet_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
            
        }
        else if( attr_value == "Mint"){
            $(document).on('click','.mint-denarii-close', function(){
                $('.nav-item').each(function(){
                    if($(this).find('a').attr('data-attr')=="Dashboard"){
                        $(this).find('a').addClass('signin-active');
                        $('#dashboard-page').addClass('active');
                        $('#wallet-page').removeClass('active');
                    }
                    else{
                        $(this).find('a').removeClass('signin-active');
                    }
                });
                
                
            })
        }

        else if( attr_value == "Learn"){
            $('#learn-page').addClass('active');
            $('#dashboard-page,#wallet-page').removeClass('active');
            $('#learn_component').load('learn_component/learn.html');
            $('#learn_detail_component').load('dashboard_detail_component/dashboard-detail.html');
            $('#learn_reward_component').load('learn_component/learn_reward_component/learn-reward.html');
            $('#learn_quiz_component').load('learn_component/learn_quiz_component/learn-quiz.html');
            $('#learn_detail_modal_component').load('learn_component/learn_detail_modal_component/learn-detail.html');
        }
        else{
            $('#dashboard-page').addClass('active');
            $('#wallet-page').removeClass('active');
        }
        if($(window).width()<768){
            $(this).parents('.signed-header-wrapper').removeClass('show-signed-menu');
        }
    });
    $(document).on('click', '.dashboard-favourites-profile-wrap a', function(){
        var name = $(this).find('.dashboard-wallet-label').text();
        $('.send-denarii-container input').each(function(){
            $('.user-name-value').val(name);
            tmpval = $(this).val();
                if(tmpval == '') {
                    if( $(this).hasClass('field-focus')){
                        $(this).removeClass('field-focus');
                    }
                }
            else {
                $(this).addClass('field-focus');
            }
        })
        
    })
    $(document).on('click', '.signed-balance-navigation', function(){
        $(".share-details-popup").addClass('active');
        $('body').addClass('overflow-hidden-menu-popup');

    });
    $(document).on('click', '.darkshare-details-close-icon', function(){
        $("#share-details-wrap").removeClass('active');
        $('body').removeClass('overflow-hidden-menu-popup');
    })

    $(document).on('click', '.clear-value', function (e) {
        if($('body').hasClass('modal-open')){
            $('body').removeClass('overflow-hidden-menu');
        }
       
        var clearVal = $('input').val('');
        $('form input').each(function(){
            if( $(this).hasClass('field-focus')){
                $(this).removeClass('field-focus');
            }
            else {
            }
        })
    $(".form-values-container input").focus(function(){
        $(this).addClass("field-focus");
        
        }).blur(function(){
        $(this).removeClass("field-focus");
        $(this).next('.val-button').removeClass('update-value');
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
    
       
        $(document).on('click', '#user-profile-pic', function(e){
            e.stopPropagation();
            $('.profile-dropdown-wrapper').toggle(250)
        });
        $(document).click(function(event){
            var $trigger = $("#user-profile-pic");
            if($trigger !== event.target && !$trigger.has(event.target).length){
                $(".profile-dropdown-wrapper").hide(250);
            } 
        });
    });

});
