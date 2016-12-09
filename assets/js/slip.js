var stepOne, stepTwo, stepThree;

stepOne = function(){
	$('.page-1 .pic').css('transform', 'translate(100vw, -100vw)');
	$('.page-1 .stripes').css('transition', '.7s');
	$('.page-1 .content').css('transition', '1s');
	$('.page-1 .title').css('transition', '.9s');
}

stepTwo = function() {
	$('.page-2 .pic').css('transform', 'translate(-100vw, -100vw)');
	$('.page-2 .stripes').css('transition', '.7s');
	$('.page-2 .content').css('transition', '1s');
	$('.page-2 .title').css('transition', '.9s');
}

stepThree = function() {
	$('.page-3 .pic').css('transform', 'translate(100vw, -100vw)');
	$('.page-3 .stripes').css('transition', '.7s');
	$('.page-3 .content').css('transition', '1s');
	$('.page-3 .title').css('transition', '.9s');
}

var sliderInitAnimations = function(screen) {
	switch(screen) {
		case 1 :
		  stepOne();
		  break;
		case 2 :
		  stepTwo();
		  break;
		case 3 :
		  stepThree();
		  break;
	}
};

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    touchRatio : 1.2,
    onSlideChangeEnd: function(swiper, event){
   		if (swiper.activeIndex == 3) {
   			$('#arrow').fadeOut(0);
   			console.log('hello');
   		} else {
   			//window.onload = arrowDisplay;
   		};
    },
    onSlideChangeStart: function(swiper, event){
    	sliderInitAnimations(swiper.activeIndex);
    }
});