$(document).ready(function() {
	calculateTotalTimeWords($('#text-container'));
	minReadLeft($('#text-container'));
});

$(document).scroll(function () {
    minReadLeft($('#text-container'));
});

//calculate how long it will take to read by word count
var calculateTotalTimeWords = function(postContent){
    var postLength = $(postContent).text().split(' ').length/300
    var total = Math.round(postLength);
    $(".min-read-text").text(total)
    return total;
};

// countdown min read left on sticky nav bar
var minReadLeft = function(textContainer){
	if ($(textContainer).length > 0){
		var postHeight 				= $(textContainer).height();
		var postOffset 				= $(textContainer).offset().top;
		var postEnd 				= postHeight + postOffset;
		var totalMins				= calculateTotalTimeWords(textContainer);
		var pixelsPerMin 			= postEnd / totalMins;
		var currPosition			= $(window).scrollTop();
		var minsToGo  				= totalMins - Math.round(currPosition / pixelsPerMin);

		if ($(window).scrollTop() == 0) {
			$('#min-read').removeClass('hidden');
			$('#min-left').addClass('hidden');
		} else {
			$('#min-left').removeClass('hidden');
			$('#min-read').addClass('hidden')
		}

		if (currPosition < postEnd){
			if ( minsToGo < 1){
				$(".min-read-text").text('< 1')
			} else {
				$(".min-read-text").text(minsToGo);
			}
		} else {
			$(".min-read-text").text("0");
		}
	}
};