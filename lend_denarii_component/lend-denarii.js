$(document).ready(function($) {	
    
	$(".lend-amount-value").keyup(function(){	
		var input_raw_val = this.value;
    var input_value = input_raw_val.replace('$','');
		$(document).on('click','.increment-icon', function(){	
			var inc_value = ++input_value;	
			$(".lend-amount-value").val('$' + inc_value);	
		})	
		$(document).on('click','.decrement-icon', function(){	
			var dec_value = --input_value;	
			$(".lend-amount-value").val('$' + dec_value);
		})	
	});	
});
