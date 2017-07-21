;(function slider3 () {
	
var	rightArrow3 = document.getElementById('rightArrow3'),
	leftArrow3 = document.getElementById('leftArrow3'),
	minImg = 1,
	maxImg = 3;
	
	rightArrow3.addEventListener('click', nextSlide3);
	leftArrow3.addEventListener('click', previousSlide3);
	function nextSlide3 () {
				
		var image3 = document.getElementById('image3');
			minImg++;
				if(minImg > maxImg)
					minImg = 1;
					image3.setAttribute('src', 'img/slide3/' + minImg + '.jpg');
		};

		function previousSlide3 () {
			
			var image3 = document.getElementById('image3');
			minImg--;
				if(minImg == 0)
				minImg = maxImg;
			image3.setAttribute('src', 'img/slide3/' + minImg + '.jpg');
			};
			})();