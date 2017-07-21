;(function slider2 () {
	
var	rightArrow2 = document.getElementById('rightArrow2'),
	leftArrow2 = document.getElementById('leftArrow2'),
	minImg = 1,
	maxImg = 3;

	rightArrow2.addEventListener('click', nextSlide2);
	leftArrow2.addEventListener('click', previousSlide2);

	function nextSlide2 () {
		
		var image2 = document.getElementById('image2');
			minImg++;
				if(minImg > maxImg)
					minImg = 1;
					image2.setAttribute('src', 'img/slide2/' + minImg + '.jpg');
		};

		function previousSlide2 () {
			
			var image2 = document.getElementById('image2');
			minImg--;
				if(minImg == 0)
				minImg = maxImg;
			image2.setAttribute('src', 'img/slide2/' + minImg + '.jpg');
			};
})();