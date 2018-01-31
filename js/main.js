(function(){

	$('.nav-btn').on('click', function(e){
		console.log("click detected");
		$target = $(this);
		var $btn = $target;
		var $list = $target.next();
		if($list.is(":visible")){
			$list.slideUp("slow", function(){
				$target.parent().css('height','60px');

				$btn.html('<i class="fa fa-bars" aria-hidden="true"></i>');
				
				$list.find('a').each(function(){
					$(this).css('display','inline');
				});
				if($list.hasClass('v-center')){}
				else{
					$list.addClass('v-center').removeClass('mobile-nav');
					$btn.addClass('v-center');
				}
			});
		}
		else{
			$btn.html('<i class="fa fa-times" aria-hidden="true"></i>');
			$list.find('a').each(function(){
				$(this).css('display','block');
			});
			if($list.hasClass('v-center')){
				$list.removeClass('v-center').addClass('mobile-nav');
				$btn.removeClass('v-center');
			}
			else{}
			$target.parent().css('height','100%');
			$list.slideDown("slow");
		}
	});
})();