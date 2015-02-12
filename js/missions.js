$(document).on("click","#btn_emprunt", function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$.mobile.changePage("#emprunt");
		return false;
	});
