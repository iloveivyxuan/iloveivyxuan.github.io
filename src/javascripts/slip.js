var stepOne, stepTwo, stepThree;

stepOne = function(){
	$('.page-1 .pic').css('transform', 'translate(100vw, -100vw)');
	$('.page-1 .stripes').css('transition', '1s');
	$('.page-1 .content').css('transition', '.9s');
	$('.page-1 .title').css('transition', '1.1s');
}

stepTwo = function() {
	$('.page-2 .pic').css('transform', 'translate(-100vw, -100vw)');
	$('.page-2 .stripes').css('transition', '.1s');
	$('.page-2 .content').css('transition', '.9s');
	$('.page-2 .title').css('transition', '1.1s');
}

stepThree = function() {
	$('.page-3 .pic').css('transform', 'translate(100vw, -100vw)');
	$('.page-3 .stripes').css('transition', '1s');
	$('.page-3 .content').css('transition', '.9s');
	$('.page-3 .title').css('transition', '1.1s');
}

stepFour = function() {
	$('.page-4 .pic').css('transform', 'translate(-100vw, -100vw)');
	$('.page-4 .stripes').css('transition', '1s');
	$('.page-4 .content').css('transition', '.9s');
	$('.page-4 .title').css('transition', '1.1s');
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
		case 4 :
		  stepFour();
		  break;
	}
};

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    touchRatio : 1.2,
    onSlideChangeEnd: function(swiper, event){
   		if (swiper.activeIndex == 4) {
   			$('#arrow').fadeOut(0);
   			//window.clearInterval('#arrow');
   			console.log('hello');
   		} else {
   			//arrowDisplay();
   		};
    },
    onSlideChangeStart: function(swiper, event){
    	sliderInitAnimations(swiper.activeIndex);
    }
});

// window.location.search.substr(1,window.location.search.length).split('=')[1]