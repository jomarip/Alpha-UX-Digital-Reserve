$(document).ready(function($) {
     $(".amount-value").keyup(function(){
        var input_raw_val = this.value;
        var input_value = input_raw_val.replace('$','');
       $(document).on('click','.inc-commit-value', function(){
            if(input_value >= 0){
                var inc_value = ++input_value;
                $(".amount-value").val('$' + inc_value);	
            }
       })
       $(document).on('click','.dec-commit-value', function(){
            if(input_value > 0){
                var dec_value = --input_value;
                $(".amount-value").val('$'+ dec_value);
            }
        })
    });
    $(".duration-value").keyup(function(){
        var input_month_val = this.value;
        var input_duration_value = input_month_val.replace('Month','');
        $(document).on('click','.inc-duration-month', function(){
            if(input_duration_value < 12 ){
                var inc_value = ++input_duration_value;
                $(".duration-value").val(inc_value + 'Month');	
            }
            else{

            }
        })
        $(document).on('click','.dec-duration-month', function(){
            if(input_duration_value > 1){
                var inc_value = --input_duration_value;
                $(".duration-value").val(inc_value + 'Month');	    
            }
        })
    });
    $(".estimated-value").keyup(function(){
        var input_raw_val = this.value;
        var input_value = input_raw_val.replace('$','');
       $(document).on('click','.inc-estimate-value', function(){
           if(input_value >= 0){
            var inc_value = ++input_value;
            $(".estimated-value").val('$' + inc_value);	
           }
            
       })
       $(document).on('click','.dec-estimate-value', function(){
            if(input_value > 0){
                var dec_value = --input_value;
                $(".estimated-value").val('$'+ dec_value);
            }
        })
    });
    $(".mint-reward-field").keyup(function(){
        var input_raw_val = this.value;
        var input_value = input_raw_val.replace('$','');
       $(document).on('click','.reward-inc-btn', function(){
           if(input_value >= 0){
            var inc_value = ++input_value;
            $(".mint-reward-field").val('$' + inc_value);	
           }
            
       })
       $(document).on('click','.reward-dec-btn', function(){
            if(input_value > 0){
                var dec_value = --input_value;
                $(".mint-reward-field").val('$'+ dec_value);
            }
        })
    });
});