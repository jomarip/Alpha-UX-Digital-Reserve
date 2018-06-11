$(document).ready(function() {
    $('#signed-header-container').load('../signed_header_component/signed-header.html');
    $('#dashboard_detail_component,#wallet_detail_component').load('dashboard_detail_component/dashboard-detail.html');
    $('#dashboard_favourites_component,#wallet_favourites_component').load('dashboard_favourites_component/dashboard-favourites.html');
    $('#dashboard_all_denarii_component,#wallet_all_denarii_component').load('dashboard_all_denarii_component/dashboard-all-denarii.html');
    $('#dashboard_recent_transactions_component').load('dashboard_recent_transactions_component/dashboard-recent-transactions.html');
    $('#dashboard_minting_component').load('dashboard_minting_component/dashboard-minting.html');
    $('#dashboard_overview_component').load('dashboard_overview_component/dashboard-overview.html');
    $('#wallet_all_transactions_component').load('wallet_all_transactions_component/wallet-all-transactions.html');
    $('#send-denarii-conatainer').load('../send_denarii_component/send-denarii.html')
    $('#lend-denarii-container').load('../lend_denarii_component/lend-denarii.html')
    $('#request-denarii-container').load('../request_denarii_component/request-denarii.html')
    $('#borrow-denarii-modal-1').load('../borrow_denarii_component/borrow-denarii.html')
    $('#mint-denarii-contanier').load('../mint_danarii_component/mint-danarii.html')

    
    $(document).on('click', '.signed-toggle-icon', function(){
        $('.signed-header-wrapper').toggleClass('show-signed-menu');
    });

    $(document).on('click', '.menu-close-icon', function(){
        $('.signed-header-wrapper').removeClass('show-signed-menu');
    });
});