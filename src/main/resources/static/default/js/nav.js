$(function(){
	
	//nav load script
	$('nav dl dt').each(function(){
		if($(this).attr('class')=='on'){
			
		}
	});
	
	//nav click script
	$('nav dl dt').click(function(){
		var classVar = $(this).attr('class');
		if(classVar == 'on'){
			$(this).removeClass();
			$(this).parent().find('dd').slideUp();
			
			$(this).find('source').removeClass();
			$(this).find('source').addClass('icon-angle-right');
		}else{
			$(this).addClass('on');
			$(this).parent().find('dd').slideDown();
			
			$(this).find('source').removeClass();
			$(this).find('source').addClass('icon-angle-down');
		}
	});
});