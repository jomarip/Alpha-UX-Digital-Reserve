$(document).ready(function() {
    $(".interest-value").keyup(function(){
        var input_raw_val = this.value;
        var input_value = input_raw_val.replace('%','');
    $(document).on('click','.increment-icon', function(){
        var inc_value = ++input_value;
        $(".interest-value").val(inc_value + '%') ;
    })
    $(document).on('click','.decrement-icon', function(){
        var dec_value = --input_value;
        $(".interest-value").val(dec_value + '%');
        })
    });
    $(".form-values-container input").focus(function(){
        $(this).addClass("field-focus");
        if($(this).hasClass('lend-amount-value') || $(this).hasClass('send-denarii-amount') || $(this).hasClass('request-denarii-value') || $(this).hasClass('mint-denarii-amount')){
        if($(this).val().includes('$')){
            //
            
        }
        else{
            $(this).val('$');
        }
    }
        
        }).blur(function(){
        $(this).removeClass("field-focus");
        $(this).next('.val-button').removeClass('update-value');
        tmpval = $(this).val();
        if(tmpval == '') {
        if( $(this).hasClass('field-focus')){
            $(this).removeClass('field-focus');
        }
        }
        else if(tmpval == '$'){
            if( $(this).hasClass('field-focus')){
                $(this).removeClass('field-focus');
               
            }
            $(this).val('');
        }
        else {
            $(this).addClass('field-focus');
        }
    }); 

    $(".borrow-denarii-container input").focus(function(){
        $(this).addClass("field-focus");
        if($(this).hasClass('interest-value')){
        if($(this).val().includes('%')){
            //
            
        }
        else{
            $(this).val('%');
        }
    }
        
        }).blur(function(){
        $(this).removeClass("field-focus");
        $(this).next('.val-button').removeClass('update-value');
        tmpval = $(this).val();
        if(tmpval == '') {
        if( $(this).hasClass('field-focus')){
            $(this).removeClass('field-focus');
        }
        }
        else if(tmpval == '$'){
            if( $(this).hasClass('field-focus')){
                $(this).removeClass('field-focus');
               
            }
            $(this).val('');
        }
        else {
            $(this).addClass('field-focus');
        }
    }); 
});
