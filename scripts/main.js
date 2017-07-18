jQuery(document).ready(function() {
	jQuery("button").on('click', function() {
		jQuery(".intro").fadeOut(1500).promise().done( function() {
			jQuery(".soon").fadeIn(1500).css('display','table-cell');
		});
	});

});