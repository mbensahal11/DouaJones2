$(document).on("click","#btn_emprunt", function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$.mobile.changePage("#emprunt");
		return false;
	});
	
$(document).on("click","#btn_achat_vente", function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$.mobile.changePage("achat_vente");
		return false;
	});





