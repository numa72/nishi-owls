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
});