$(function() {
	$(".accordionTitle").click(function() {
		var displayFlg = $(this).next().css('display');
		if (displayFlg != "none") {
			// 表示しているなら隠す
			$(this).nextAll().hide();
		} else {
			// 隠れているなら表示する
			$(this).nextAll().show();
		}
	});
});
