$(document).ready(function() {
    $(".interest-value").keyup(function(){
    var input_value = this.value;
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
    //   $(this).next('.val-button').addClass('update-value');
        
        }).blur(function(){
        $(this).removeClass("field-focus");
        $(this).next('.val-button').removeClass('update-value');
        tmpval = $(this).val();
        if(tmpval == '') {
        if( $(this).hasClass('field-focus')){
            $(this).removeClass('field-focus');
            // $(this).next('.val-button').removeClass('update-value');
        }
        }
        else {
            $(this).addClass('field-focus');
        //   $(this).next('.val-button').removeClass('update-value');
        }
    }); 
});
  