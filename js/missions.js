$(document).on("click","#btn_emprunt", function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$("#missions").hide();
		$("#emprunt").show();
		return false;
	});
