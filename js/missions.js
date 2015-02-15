$(document).on("click","#btn_emprunt", function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		$.mobile.changePage("#emprunt");
		return false;
	});
	


		var Entreprise = [];
		Entreprise[1] = {Objet :BMC,
						 nom : "Banque Mondiale du Commerce",
						 srcImagecarte : 'img/logo_carte_entreprise/BMC.png',
						 srcImageentreprise : 'img/logo_entreprise/BMC.png',
						 swBound : new google.maps.LatLng(45.78235459626573,4.876164422645616),
						 neBound : new google.maps.LatLng(45.78279984683528,4.876861859416181),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "La Banque Mondiale du Commerce est le cœur financier de la région. Elle est un pilier monétaire important aux entreprises environnantes et de nombreux citoyens lui confient ses épargnes. Durement frappée par la crise économique en 2008, la banque s’est bien remise et planifie d’intensifier ses affaires internationales dans un avenir proche."
						 };
						 
	var ok_ordre = false
	function openinfo2(entreprise) {					 
	document.getElementById('image_entreprise').setAttribute('src',entreprise.srcImageentreprise);
			if (entreprise.index == 1) {
				document.getElementById('image_bmc').setAttribute('src',entreprise.srcImageentreprise);
			}
			//On écrit le nom de l'entreprise dans le header
			$('#nom_entreprise2').html(entreprise.nom);
			//On écrit le nom de l'entreprise dans le champ nom où il faut passer l'ordre
			$('#entreprise_active2').html(entreprise.nom);
			//On stocke l'id de l'entreprise sélectionnée
			$('#entreprise_active2').data("id_entreprise", entreprise.index);
			//On modifie le texte du profil de l'entreprise
			$('#texte_fiche_entreprise2').text(entreprise.texteProfil);
			
			ok_ordre = true;		
			if (document.getElementById('checkin').disabled == true) {				
				ok_ordre = false;
			}
			
			
	};
	
	$(document).on("click","#btn_achat_vente", function(event) {
		event.preventDefault();
		event.stopImmediatePropagation();
		openinfo2(Entreprise[1]);
		return false;
		$.mobile.changePage("#emprunt");
	});
	
			
			



