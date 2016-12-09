var stepOne, stepTwo, stepThree;

stepOne = function(){
	$('.page-1 .pic').css('transform', 'translate(100vw, -100vw)');
	$('.page-1 .stripes').css('transition', '.7s');
	$('.page-1 .content').css('transition', '1s');
	$('.page-1 .title').css('transition', '.9s');
	//$('.page-2 .pic').css('transform', 'translate(100vw, 100vw)');
	//$('.page-2 .content').css('left', '100vw');
	//$('.page-2 .content').css('top', '100vw');
	//$('.page-3 .content').css('left', '-100vw');
	//$('.page-3 .content').css('top', '100vw');
}

stepTwo = function() {
	$('.page-2 .pic').css('transform', 'translate(-100vw, -100vw)');
	$('.page-2 .stripes').css('transition', '.7s');
	$('.page-2 .content').css('transition', '1s');
	$('.page-2 .title').css('transition', '.9s');
	//$('.page-1 .content').css('left', '-100vw');
	//$('.page-1 .content').css('top', '100vw');
	//$('.page-3 .content').css('left', '-100vw');
	//$('.page-3 .content').css('top', '100vw');
}

stepThree = function() {
	$('.page-3 .pic').css('transform', 'translate(100vw, -100vw)');
	$('.page-3 .stripes').css('transition', '.7s');
	$('.page-3 .content').css('transition', '1s');
	$('.page-3 .title').css('transition', '.9s');
	//$('.page-1 .content').css('left', '-100vw');
	//$('.page-1 .content').css('top', '100vw');
	//$('.page-2 .content').css('left', '100vw');
	//$('.page-2 .content').css('top', '100vw');
}

var sliderInitAnimations = function(screen) {
	switch(screen) {
		case 1 :
		  console.log("1 ok");
		  stepOne();
		  break;
		case 2 :
		  console.log("2 ok");
		  stepTwo();
		  break;
		case 3 :
		  console.log("3 ok");
		  stepThree();
		  break;
	}
};

var returnOne, returnTwo, returnThree;

returnOne = function() {

}

var contentReturn = function(screen) {
	switch(screen) {
		case 1 :
		  
		  break;
		case 2 :
		  
		  break;
		case 3 :
		  
		  break;
	}
};

var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function(swiper, event){
   		contentReturn(swiper.activeIndex);
   		console.log(swiper.translate);
    },
    onSlideChangeStart: function(swiper, event){
    	sliderInitAnimations(swiper.activeIndex);
   		console.log('第' + swiper.activeIndex + '屏开始加载');
    }
});