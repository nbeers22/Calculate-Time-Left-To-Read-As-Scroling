$(document).ready(function() {
	calculateTotalTimeWords($('#text-container'));
	minReadLeft($('#text-container'));
});

$(document).scroll(function () {
    minReadLeft($('#text-container'));
});