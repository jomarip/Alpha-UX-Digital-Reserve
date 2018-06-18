<<<<<<< HEAD
$(document).ready(function($) {
    $(".borrow-denarii-container  input").focus(function(){
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
=======
$(document).ready(function() {
>>>>>>> b608152a019c36bdef1e2265b40cc0702c734a53
     $(".amount-value").keyup(function(){
       var input_value = this.value;
       $(document).on('click','.increment-icon', function(){
            var inc_value = ++input_value;
            $(".amount-value").val('$' + inc_value);
       })
       $(document).on('click','.decrement-icon', function(){
            var dec_value = --input_value;
            $(".amount-value").val('$' + dec_value);
        })
    });
});