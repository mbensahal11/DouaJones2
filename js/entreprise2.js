var argentDispOrdre;
var qteMaxVendue;
var dateProchBilanReel;
var coursEntrep;
// JavaScript Document
$(document).on("pageinit", "#Entreprise", function() {

var socket = io.connect(adresse_serveur);

//Onglet Perfomances infos 

		
socket.on("resultGetPerfEntreprise", function(data) {
	dateProchBilanReel = new Date(data.dateProchainBilanReel);
	var dividende="100"+" ฿";
	coursEntrep=data.coursActuel;
	coursEntrepAAfficher=coursEntrep+" ฿";
	$('#affiche_dividende').text();	
	$('#affiche_checkin').text(data.checkinExercicePrecedent);	
	$('#affiche_valCours').text(coursEntrepAAfficher);	
	$('#affiche_actMaj').text(data.actionnaireMajoritaire.pseudo);	
	$('#affiche_socMaj').text(data.societeMajoritaire.nomSociete);	
	$('#affiche_dateBilan').text(data.dateProchainBilan);
		
});			

//Fin Performances infos

//Affichage de l'argent disponible

socket.on('resultGetArgentDisponibleJoueur', function(data) {
	argentDispOrdre=data.argent_disponible
	argentDispOrdreAAfficher="Argent disponible : "+argentDispOrdre+" ฿"
	$("#consult_argentDisp").text(argentDispOrdreAAfficher);	
});


socket.on('resultGetNombreTitresJoueurEntreprise', function(data) {
	qteMaxVendue=data.quantite;
});
//


//

//Dans le cas d'une vente on limite le slider à la quantité possédée par le joueur
	$(document).on("change","#select-custom-17", function() {
			if ($('#select-custom-17 option:selected').val()=="vente") {
				$('#Nombre').prop("max",qteMaxVendue);
				$('#Nombre').val(1).slider("refresh");
			}
	});

			
			
			//Graphe page performance
			$(function() {
		
					
		var btGetCours = document.getElementById("btGetCours");

		var values;
	
		socket.on("resultGetCoursEntreprise", function(datas){
	
			values = [{ data: datas, label: "Cours", }];

			$.plot("#placeholder", values, {
				xaxis: {
					mode: "time",
					min: (new Date(currentYear,currentMonth,currentDay)).getTime(),
					max: (new Date(currentYear,currentMonth,currentDay+1)).getTime(),
				},
				lines: {fill:true},
				legend: {position:"nw", backgroundOpacity:0.3}		
				//	zoom: {interactive: true},
				//	pan: {interactive: true}
			});	
		});
		
		socket.on("resultGetActualiteEntreprise", function (value) {
			$('#texte_actualites_entreprise').html(value);
		});
			
		var currentMonth=(new Date()).getMonth() ;
		var currentDay=(new Date()).getDate();
		var currentYear=(new Date()).getFullYear();
				
		$("#today").click(function (event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			$.plot("#placeholder", values, {
				xaxis: {
					mode: "time",
					min: (new Date(currentYear,currentMonth,currentDay)).getTime(),
					max: (new Date(currentYear,currentMonth,currentDay+1)).getTime(),
				},
				lines: {fill:true},
				legend: {position:"nw", backgroundOpacity:0.3},
			});
			return false;
		});

		
		$("#lastweek").click(function (event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			$.plot("#placeholder", values, {
				xaxis: {
					mode: "time",
					minTickSize: [1, "day"],
					min: (new Date(currentYear,currentMonth,currentDay-7)).getTime(),
					max: (new Date(currentYear,currentMonth,currentDay+1)).getTime(),
					timeformat: "%e/%m",
				//	dayNames: ["dim", "lun", "mar", "mer", "jeu", "ven", "sam"]
				},
				lines: {fill:true},
				legend: {position:"nw", backgroundOpacity:0.3},
			});
			return false;
		});
		
		$("#lastmonth").click(function (event) {
			event.preventDefault();
			event.stopImmediatePropagation();
			$.plot("#placeholder", values, {
				xaxis: {
					mode: "time",
					min: (new Date(currentYear, currentMonth-1, currentDay)).getTime(),
					max: (new Date(currentYear, currentMonth, currentDay)).getTime(),
				timeformat: "%e/%m",
				},
				lines: {fill:true},
				legend: {position:"nw", backgroundOpacity:0.3},
			});
			return false;
		});

	});
			
			
          //Champ désactivé lors du chargement de la page
              $( "#saisiedate" ).prop( "disabled", true );
              
              //Initialisation du datepicker lors du chargement de la page
              $('#saisiedate').datepicker("setDate", new Date());
        
              // Changement du label en fonction du click pour la date de validité, le clik sur Date rend abled la zone input, le datepicker peut apparaître sur click de l'utilisateur
  
              $("#validite input").on("click",function(event) { 
  
                  if(event.target.id == "radio-choice-2") {
                      $( "#saisiedate" ).prop( "disabled", false );
                      $( "#legendedate" ).text("Sélectionner la date");
                  } else {
                      $( "#legendedate" ).text('');
                      $( "#saisiedate" ).prop( "disabled", true );
                      if(event.target.id == "radio-choice-1") {
                          $('#saisiedate').datepicker("setDate", new Date());	
                      }
                      if(event.target.id == "radio-choice-3"){
                          $('#saisiedate').datepicker("setDate", dateProchBilanReel);
						  $('#saisiedate').datepicker("refresh");
                      }
                  }
              });
			
			  //Gestion de l'affichage des champs en fonction du type d'ordre choisi 
			  
			  $("#selectordre").on("change",function() {

					//On remet le formulaire à zéro lorsque l'on change de type d'ordre, sauf le sens de l'ordre et le type d'ordre
					  	//Prix
					  $("#Prix").val('');
					  	//Slider Nombre
					  $('#Nombre').val(1).slider("refresh");
					  	//Date de validite
					  $("#validite input").prop("checked",false).checkboxradio("refresh");
					  $("#radio-choice-1").prop("checked",true).checkboxradio("refresh");
					  //DatePicker
						$('#saisiedate').datepicker("setDate", new Date()).datepicker("refresh");
					//Type de déclenchement
					$("#typedeclenchement input").prop("checked",false).checkboxradio("refresh");
					$("#radio-choice-h-2a").prop("checked",true).checkboxradio("refresh");
					//Seuil qui réapparaît, Plage qui disparaît
					$("#vplage").hide();
					$("#vplagelabel").hide();
					$("#vseuil").show();	
					$("#vseuillabel").show();					
					//Valeur du seuil
					$('#vseuil').val('');
					//Initialiser la plage
					$('#range-10a').val(1).slider("refresh");
					$('#range-10b').val(100).slider("refresh");
				  
			//Ordre à cours limité
				   if ($(this).val() === 'cours_limite') { 
					  $("#declenchement").hide();
					  $("#Prix").prop("disabled",false);
				  }
			//ordre au marché
				  if ($(this).val() === 'au_marche') { 
					  $("#declenchement").hide();
					  $("#Prix").prop("disabled",true);
				  }
			//Ordre à déclenchement
				  if ($(this).val() === 'seuil_declenchement') {
					  $("#declenchement").show();
					  $("#Prix").prop("disabled",true);

				  }
			//Ordre à la meilleure limite
				  if ($(this).val() === 'meilleure_limite') { 
					  $("#declenchement").hide();
					  $("#Prix").prop("disabled",true);
				  }  
				});
			
			//Champs et valeurs selon le type de déclenchement
			$("#typedeclenchement input").on("click",function(event) { 								                //seuil
				if (event.target.id=="radio-choice-h-2a") {
				$("#vplage").hide();
				$("#vplagelabel").hide();
				$("#vseuil").show();	
				$("#vseuillabel").show();
				//On nettoie ce que le joueur a entré dans plage
				$('#range-10a').val(1).slider("refresh");
				$('#range-10b').val(100).slider("refresh");
				}
				//plage
				if (event.target.id=="radio-choice-h-2b") {
				$("#vseuil").hide();
				$("#vseuillabel").hide();
				$("#vplage").show();
				$("#vplagelabel").show();	
					//On nettoie ce que le joueur a entré dans seuil et le label saisir un seuil ! en cas d'oubli	
				$('#vseuil').val('');	
				//On initialise les valeurs du slider à plus ou moins 5,5%
				var coursMoins=Math.round(coursEntrep*0.80*100)/100;
				var coursPlus=Math.round(coursEntrep*1.2*100)/100;
				$('#range-10a').prop('min',coursMoins).slider("refresh");
				$('#range-10a').prop('max',coursPlus).slider("refresh");
				$('#range-10b').prop('min',coursMoins).slider("refresh");
				$('#range-10b').prop('max',coursPlus).slider("refresh");
				//coursEntrep	
				}					
			});
	
             
                 
              // Pas de texte dans des input nombres
              $(document).on("keypress","#Prix, #Nombre,#vplage, #vseuil",function (e){
                  var ev= e||window.event;
                  var k=ev.keyCode || ev.which; 
                  if ((k>57 || k<46) && (k!=8)) {
                      ev.returnValue=false; 
                      if (ev.preventDefault) 
                          ev.preventDefault(); 
                  }
              });	
           //Gestion de l'affichage des article en vente en cours
			  // getSelingGoods: function(page, pagesize, fn){
        //var pagesize = Number(pagesize),
           // page = Number(page);
        //page = (isNaN(page) || page < 1) ? 1 : page;
        //pagesize = (isNaN(pagesize) || pagesize < 5) ? 5 : pagesize;
        //this.find({ 'stocks':{$gt: 0}, 'on_sale': true }).skip((page-1)*pagesize).limit(pagesize).sort('created_at', -1).toArray(function(err, goods){
           // fn && fn(err, goods);
       // });       
                 
				 
              // Envoi et réinitialisation du formulaire
              
              $('#commentForm').submit(function(event) {
				  event.preventDefault();
				  event.stopImmediatePropagation();
				  	var peutAcheter=false;
					var radio_type_date = $("input:radio[name='radio-choice-type-date']");
					var index_type_date = radio_type_date.index(radio_type_date.filter(':checked'));
					
					//On récupère l'index actif du type de déclenchement
					var radio_type_declenchement = $("input:radio[name='radio-choice-type-declenchement']");
					var index_type_declenchement = radio_type_declenchement.index(radio_type_declenchement.filter(':checked'));
					//On s'assure que le joueur ait rempli le champ prix (seul champ qui peut-être vide) en cas de choix de choix de l'ordre à cours limité
					if ( !$('#Prix').val() && $('#selectordre').val()==='cours_limite' ){
					alert('Il faut saisir un prix !');
					}
					else if ( !$('#vseuil').val() && $('#selectordre').val()==='seuil_declenchement' && index_type_declenchement==0  ) {
					alert('Il faut saisir le seuil !');
					}	
					else {	
					 
						 //On récupère la valeur de la borne inférieure ou du seuil que l'on nommera minimum (et de même pour la borne sup lors d'une vente)
						var minimum = $('#range-10a').val();
						var maximum = $('#range-10b').val();
						if ($('#selectordre').val() == 'seuil_declenchement') {
							//si c'est un seuil
							if (index_type_declenchement == 0) {
								//si c'est un achat	
								if ($('#select-custom-17').val() == 'achat') {
									minimum = parseFloat($('#vseuil').val());
									maximum = parseFloat($('#range-10b').val());
								}
								//si c'est une vente
								else {
									minimum = parseFloat($('#range-10a').val());
									maximum = parseFloat($('#vseuil').val());
								}
							}
	
						}
						
						//Si le prix est nul, on le fixe à zéro
						var prix_action
						if (!$('#Prix').val()) {
							prix_action = 0;
						}
						else {
							prix_action = parseFloat($('#Prix').val());
						}
						
					
						//si vente, pas de tests
						if ($('#select-custom-17 option:selected').val()=="vente") {
					
							peutAcheter=true;

						} 
						//sinon, si achat, tests sur la nature de l'ordre et la capacite du joueur à acheter
						else {
							//si ordre à cours limité 
							if($('#selectordre option:selected').val()=="cours_limite")   {

								if(argentDispOrdre < $("#Prix").val() * $("#Nombre").val()) {
									alert("Vous n'avez pas l'argent disponible pour acheter");
								}
								else {
									peutAcheter=true;
								}
							}
							//ordre meilleure limite ou au marché
							else if ($('#selectordre option:selected').val()=="meilleure_limite" || $('#selectordre option:selected').val()=="au_marche") {
								
								if(argentDispOrdre < coursEntrep * $("#Nombre").val()) {
									
								}
								else {
									peutAcheter=true;
								}
								
							
							}
							// ordre à déclenchement
							else  {
								//Seuil	
								if ($("#typedeclenchement input:checked").val()=="Seuil") {

									if(argentDispOrdre < $("#Nombre").val() * $("#vseuil").val()) 		{
		
									alert("Vous n'avez pas l'argent disponible pour acheter");
		
									}
									else {
										peutAcheter=true;
									}
								}
								else {
									if(argentDispOrdre < $("#Nombre").val() * $("#range-10b").prop('max')) {
		
										alert("Vous n'avez pas l'argent disponible pour acheter");
		
									}
									else {
										peutAcheter=true;
									}								
								}
							}
							//
						}
						
						if (peutAcheter) {
														//On envoie les données de l'ordre
							var dateAEnvoyer=new Date($('#saisiedate').datepicker("getDate"))	;					
							socket.emit('setOrdre',{
								idJoueur:idJoueur,
								idEntreprise:$('#entreprise_active').data('id_entreprise'),
								//parseFloat($('#entreprise_active').data("id_entreprise")),
								sens:$('#select-custom-17').val(),
								typeOrdre:$('#selectordre').val(),
								prix:prix_action,
								quantite:parseFloat($('#Nombre').val()),
								borneInf:minimum,
								borneSup:maximum,
								dateValidite:dateAEnvoyer
								});
				
							//On remet le formulaire à zéro après validation
								//Sens de l'ordre
							var myselectun = $( "#select-custom-17" );
							myselectun[0].selectedIndex = 0;
							myselectun.selectmenu( "refresh" );
								//Type de l'ordre
							var myselectdeux = $( "#selectordre" );
							myselectdeux[0].selectedIndex = 0;
							myselectdeux.selectmenu( "refresh" );
								//Valeur du prix
							$("#Prix").val('');
								//Slider Nombre
							$('#Nombre').val(1).slider("refresh");
								//Date de validite
							$("#validite input").prop("checked",false).checkboxradio("refresh");
							$("#radio-choice-1").prop("checked",true).checkboxradio("refresh");
							  //DatePicker
							$('#saisiedate').datepicker("setDate", new Date()).datepicker("refresh");
							//Type de déclenchement
							$("#typedeclenchement input").prop("checked",false).checkboxradio("refresh");
							$("#radio-choice-h-2a").prop("checked",true).checkboxradio("refresh");
							//Valeur du seuil
							$('#vseuil').val('');
							//Initialiser la plage
							$('#range-10a').val(1).slider("refresh");
							$('#range-10b').val(100).slider("refresh");
							
							//Cacher la div déclenchement
							$('#declenchement').hide();
							
							//Prix able
							$("#Prix").prop("disabled",false);
							
							}
						
						
					}

				  //On envoie le résultat par défaut de la fonction submit, on est passé par socket.io
				  return false;
				});		
});
//get inventory infos
    //getInventories: function(page, pagesize, fn){
     //  var pagesize = Number(pagesize),
      //      page = Number(page);
      //  page = (isNaN(page) || page < 1) ? 1 : page;
      //  pagesize = (isNaN(pagesize) || pagesize < 5) ? 5 : pagesize;
      //  this.find().skip((page-1)*pagesize).limit(pagesize).sort('created_at', -1).toArray(function(err, inventories){
     //     fn && fn(err, inventories);
      //  });
    //}
    

$(document).on("pageshow", "#Entreprise", function() {
	var socket = io.connect(adresse_serveur);			
	socket.emit("getPerfEntreprise", $('#entreprise_active').data('id_entreprise'));
	socket.emit("getArgentDisponibleJoueur",idJoueur);
	
	//On récupère la quantité max vendue par le joueur pour une entreprise donnée
	socket.emit("getNombreTitresJoueurEntreprise",idJoueur,$('#entreprise_active').data('id_entreprise')); 

	socket.emit("getCoursEntreprise", $('#entreprise_active').data('id_entreprise'));
	socket.emit("getActualiteEntreprise", $('#entreprise_active').data('id_entreprise'));

});
