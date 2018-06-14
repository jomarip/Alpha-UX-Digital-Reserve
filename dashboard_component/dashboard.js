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
        // $('#dashboard-page,#learn-page').removeClass('active');
        // $('#wallet-page').addClass('active');
        // $('.nav-item').each(function(){
        //     if($(this).find('a').attr('data-attr')=="Wallet"){
        //         $(this).find('a').addClass('signin-active');
        //     }
        //     else{
        //         $(this).find('a').removeClass('signin-active')
        //     }
        // });
        // $('#wallet_all_transactions_component').load('wallet_all_transactions_component/wallet-all-transactions.html');
        // $('#wallet_detail_component').load('dashboard_detail_component/dashboard-detail.html');
        // $('#wallet_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
        // $('#wallet_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
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
       
    });
    $(document).on('click', '.denarii-modal', function(){
        if($('body').hasClass('.modal-open')){
            $('body').addClass('overflow-hidden-menu');
        }
        else{
            $('body').removeClass('overflow-hidden-menu');
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


window.onload = function onLoad() {

    var your_overview_options = {
        animationEnabled: true,  
        title:{
            text: false
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#878fa4",
            lineColor: "#eeeeee",
            gridThickness: 1,
            tickLength: 10,
            tickColor: "transparent",
            gridColor: "#eeeeee"
        },
        axisY: {
            lineColor: "#eeeeee",
            labelFontColor: "#878fa4",
            tickColor: "transparent",
            includeZero: false,
            prefix: "$",
            gridColor: "#eeeeee"
        },
        axisY2: {
            lineColor: "#eeeeee",
            labelFontColor: "transparent",
            tickColor: "transparent",
            includeZero: false,
            gridColor: "#eeeeee"
        },
        legend: {
            cursor: "pointer",
        },
        data: [{
            type: "spline",
            name: "Transaction 1",
            showInLegend: false,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,###",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 120 },
                { x: new Date(2016, 1, 1), y: 135 },
                { x: new Date(2016, 2, 1), y: 144 },
                { x: new Date(2016, 3, 1),  y: 103 },
                { x: new Date(2016, 4, 1),  y: 93 },
                { x: new Date(2016, 5, 1),  y: 129 },
                { x: new Date(2016, 6, 1), y: 143 },
                { x: new Date(2016, 7, 1), y: 156 },
                { x: new Date(2016, 8, 1),  y: 122 },
                { x: new Date(2016, 9, 1),  y: 106 },
                { x: new Date(2016, 10, 1),  y: 137 },
                { x: new Date(2016, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "Transaction 2",
            axisYType: "secondary",
            showInLegend: false,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,###",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 19034.5 },
                { x: new Date(2016, 1, 1), y: 20015 },
                { x: new Date(2016, 2, 1), y: 27342 },
                { x: new Date(2016, 3, 1),  y: 20088 },
                { x: new Date(2016, 4, 1),  y: 20234 },
                { x: new Date(2016, 5, 1),  y: 29034 },
                { x: new Date(2016, 6, 1), y: 30487 },
                { x: new Date(2016, 7, 1), y: 32523 },
                { x: new Date(2016, 8, 1),  y: 20234 },
                { x: new Date(2016, 9, 1),  y: 27234 },
                { x: new Date(2016, 10, 1),  y: 33548 },
                { x: new Date(2016, 11, 1), y: 32534 }
            ]
        }]
    };
    $("#your-overview-chart-container").CanvasJSChart(your_overview_options);

        var network_overview_options = {
            animationEnabled: true,  
            title:{
                text: false
            },
            axisX: {
                valueFormatString: "MMM",
                labelFontColor: "#878fa4",
                lineColor: "#eeeeee",
                gridThickness: 1,
                tickLength: 20,
                tickColor: "transparent",
                gridColor: "#eeeeee"
            },
            axisY: {
                lineColor: "#eeeeee",
                labelFontColor: "#878fa4",
                tickColor: "transparent",
                includeZero: false,
                prefix: "$",
                gridColor: "#eeeeee"
            },
            data: [{
                type: "spline",
                name: "Transaction",
                showInLegend: false,
                yValueFormatString: "$#,###",
                xValueFormatString: "MMMM",
                dataPoints: [
                    { x: new Date(2016, 0, 1),  y: 19034.5 },
                    { x: new Date(2016, 1, 1), y: 20015 },
                    { x: new Date(2016, 2, 1), y: 27342 },
                    { x: new Date(2016, 3, 1),  y: 20088 },
                    { x: new Date(2016, 4, 1),  y: 20234 },
                    { x: new Date(2016, 5, 1),  y: 29034 },
                    { x: new Date(2016, 6, 1), y: 30487 },
                    { x: new Date(2016, 7, 1), y: 32523 },
                    { x: new Date(2016, 8, 1),  y: 20234 },
                    { x: new Date(2016, 9, 1),  y: 27234 },
                    { x: new Date(2016, 10, 1),  y: 33548 },
                    { x: new Date(2016, 11, 1), y: 32534 }
                    ]
            }]
        };
        $("#network-chart-container").CanvasJSChart(network_overview_options);
        
    }
