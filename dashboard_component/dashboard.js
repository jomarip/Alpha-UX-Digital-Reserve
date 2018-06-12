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
    
    $(document).on('click', '.signed-toggle-icon', function(){
        $('.signed-header-wrapper').toggleClass('show-signed-menu');
    });

    $(document).on('click', '.menu-close-icon', function(){
        $('.signed-header-wrapper').removeClass('show-signed-menu');
    });
    
    $('#wallet-page').hide();
    $(document).on('click', '.signed-list-link', function(){
        var attt_value = $(this).attr('data-attr');
        $(this).addClass('signin-active');
        $(this).parents('.nav-item').siblings('.nav-item').find('.nav-link').removeClass('signin-active');
        if( attt_value == "Dashboard"){
            $('#dashboard-page').addClass('active');
            $('#wallet-page').attr("style", "display: none !important");
            $('#dashboard_detail_component').load('dashboard_detail_component/dashboard-detail.html');
            $('#dashboard_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
            $('#dashboard_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
            $('#dashboard_recent_transactions_component').load('dashboard_recent_transactions_component/dashboard-recent-transactions.html');
            $('#dashboard_minting_component').load('dashboard_minting_component/dashboard-minting.html');
            $('#dashboard_overview_component').load('dashboard_overview_component/dashboard-overview.html');
        }  
        else if( attt_value == "Wallet"){
            $('#dashboard-page').removeClass('active');
            $('#wallet-page').addClass('active');
            $('#wallet_all_transactions_component').load('wallet_all_transactions_component/wallet-all-transactions.html');
            $('#wallet_detail_component').load('dashboard_detail_component/dashboard-detail.html');
            $('#wallet_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
            $('#wallet_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
        }
        else{
            $('#dashboard-page').addClass('active');
            $('#wallet-page').removeClass('active');
        }
    });
    $(document).on('click', 'a[data-target="#send-denarii-modal"]', function(){
        alert('asdfgbhj');
        alert($(this).find('.dashboard-wallet-label').value());
    })
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
