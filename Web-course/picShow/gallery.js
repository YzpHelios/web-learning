(function() {
	'use strict'

	// onload function will fire when the document is loaded completely
	window.onload = function() {
		var button = document.getElementById('show');
		var closeButton = document.getElementById('close-botton');
		var loadContent = document.getElementById('load-content');
        
		button.addEventListener('click', showbox, false);
		loadContent.addEventListener('click', showwords, false);
		closeButton.addEventListener('click', closebox, false);

	}

	// box的显示与隐藏
	function showbox() {
		var words = document.getElementById('words');
		var button = document.getElementById('show');
		var box = document.getElementById('box');
		if (box.style.display == 'none') {
			box.style.display = 'block';
			button.className = 'show';

		}
		else{
			box.style.display = 'none';	
			button.className = 'hide';
            words.style.opacity = "0";
			
		}
		
			}
    // 文字的显示与隐藏
	function showwords() {
		var words = document.getElementById('words');
		words.style.opacity = "1";
		
	}
    // 关闭box
	function closebox() {
		var words = document.getElementById('words');
		var box = document.getElementById('box');
		words.style.opacity = "0";
		box.style.display = 'none';

	}

})();
