$(function() {
	// 初期表示
	$("#contents").children().hide();
	$("#home").show();
});

/* 表示内容切り替えメソッド */
function changeView(pageId) {
	// 一旦すべて非表示にしてから対象のみ表示させる
	$("#contents").children().hide();
	$(pageId).show();
}
