$(function () {
	// nav bar
	$("ul.sub").hide();
	$("#menu li").hover(
		function () {
			$("ul:not(:animated)", this).slideDown("fast");
		},
		function () {
			$("ul", this).slideUp("fast");
		});

	// game report accordion.
	$(".game-report-detail h3").next().slideToggle(0);
	$(".game-report-detail h3").on('click', function () {
		$(this).next().slideToggle(500);
		$(this).toggleClass('open', 500);
	})
});