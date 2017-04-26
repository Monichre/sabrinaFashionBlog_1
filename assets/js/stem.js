$(function(){
	var controller = new ScrollMagic.Controller();
	var timeLine = $('#timeline');
	var ion = $('.ion-container');
	console.log($('#scroll-body').height());
	console.log(controller);
	console.log(timeLine);
	TweenMax.set(timeLine, {height: '0'});



	var tweenOne = TweenMax.fromTo(timeLine, 5, {height: '0%'}, {height: '20%'});


	var scene1 = new ScrollMagic.Scene({
		offset: 100,
	  triggerElement: '#scroll-body',
  }).setTween(tweenOne).addTo(controller);

	var ionTween = TweenMax.to(ion, 5, {borderRadius: '50%', border: '2px solid #333'});

	var sceneIon = new ScrollMagic.Scene({

	  triggerElement: '#post-2',
	}).setTween(sceneIon).addTo(controller);


	var tweenTwo = TweenMax.fromTo(timeLine, 1,{height:"20%"}, {height:"40%"});

	var scene2 = new ScrollMagic.Scene({
	  triggerElement: '#post-2',
	}).setTween(tweenTwo).addTo(controller);


	var tweenThree = TweenMax.fromTo(timeLine, 1,{height:"40%"}, {height:"60%"});

	var scene3 = new ScrollMagic.Scene({
	  triggerElement: '#post-3',
	}).setTween(tweenThree).addTo(controller);


	var tweenFour = TweenMax.fromTo(timeLine, 1,{height:"60%"}, {height:"80%"});

	var scene4 = new ScrollMagic.Scene({
	  triggerElement: '#post-4',
	}).setTween(tweenFour).addTo(controller);

	var tweenFive = TweenMax.fromTo(timeLine, 1,{height:"80%"}, {height:"100%"});

	var scene4 = new ScrollMagic.Scene({
	  triggerElement: '#post-5',
  }).setTween(tweenFive).addTo(controller);

});
