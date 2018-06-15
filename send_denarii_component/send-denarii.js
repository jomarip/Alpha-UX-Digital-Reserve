$(document).ready(function($) {
    $(".send-denarii-container  input").focus(function(){
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
    
     $(".send-denarii-amount").keyup(function(){
        var input_value = this.value;
       $(document).on('click','.increment-icon', function(){
            var inc_value = ++input_value;
            $(".send-denarii-amount").val('$' + inc_value);
       })
       $(document).on('click','.decrement-icon', function(){
            var dec_value = --input_value;
            $(".send-denarii-amount").val('$' + dec_value);
        })
      });
   });  