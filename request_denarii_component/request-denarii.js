$(document).ready(function($) {
    $(".request-denarii-value").keyup(function(){
      var input_value = this.value;
      $(document).on('click','.increment-icon', function(){
          var inc_value = ++input_value;
          $(".request-denarii-value").val('$'  + inc_value);
      })
      $(document).on('click','.decrement-icon', function(){
          var dec_value = --input_value;
          $(".request-denarii-value").val('$' + dec_value);
      })
    });
});