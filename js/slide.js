;(function slider () {
	
var	rightArrow = document.getElementById('rightArrow'),
	leftArrow = document.getElementById('leftArrow' );
	minImg = 1,
	maxImg = 3;
	
	rightArrow.addEventListener('click', nextSlide);
	leftArrow.addEventListener('click', previousSlide);
	function nextSlide () {
		
		var image = document.getElementById('image');
			minImg++;
				if(minImg > maxImg)
					minImg = 1;
					image.setAttribute('src', 'img/slide1/' + minImg + '.jpg');
							
		};

	function previousSlide () {
		
			var image = document.getElementById('image');
			minImg--;
				if(minImg == 0)
				minImg = maxImg;
			image.setAttribute('src', 'img/slide1/' + minImg + '.jpg');
			};



})();

