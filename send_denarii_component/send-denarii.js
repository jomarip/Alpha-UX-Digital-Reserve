$(document).ready(function($) {
     $(".send-denarii-amount").keyup(function(){
        var input_raw_val = this.value;
        var input_value = input_raw_val.replace('$','');
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