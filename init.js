(function() {

	var userDataForm = null;

	function init() {
		var mainCnt = $('#main_cnt');
		userDataForm = new Table();
		mainCnt.append(userDataForm.render());
		_.each(new Array(5).fill(), function(value, index) {
			if (index % 2 === 0) {
				userDataForm.addChild();
			} else {
				userDataForm.addExtendedChild();
			}
		});
		console.log(userDataForm);
	};

	init();
})();
