// JavaScript Document

//On attend le chargement de la page avant de lancer la fonction d'initialisation
$(document).on("pageshow", "#map", function() {
	if ($("#map-canvas").html() === '') {
		initialize();
	}
	google.maps.event.trigger(map, "resize");
});

	
function initialize() {
	
	//le style de la carte
	var myStyles =[
    	{
        	featureType: "poi",
        	elementType: "labels",
        	stylers: [
       					{ visibility: "off" }
       				 ]
    	}
	];
	
	//Les options de la carte
	 mapOptions = {
    	zoom: 14,
    	center: new google.maps.LatLng(45.7840383, 4.8776921),
		styles : myStyles,
		streetViewControl: false
  		};
	
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	 
	 // On définit les coordonnées de chaque zone
  		var GICoords = [
    		new google.maps.LatLng(45.78279609583433, 4.872613258335832),
			new google.maps.LatLng(45.78311783435683, 4.873997223942524),
			new google.maps.LatLng(45.78298309235994, 4.87404547752385),
			new google.maps.LatLng(45.78309725873358, 4.874528310388882),
			new google.maps.LatLng(45.78190573133237, 4.8750915652206),
			new google.maps.LatLng(45.78163633893279, 4.873903333536418),
			new google.maps.LatLng(45.782549131528334, 4.873530493392991),
			new google.maps.LatLng(45.78241448091351, 4.872795608335878)
  		];
  
  		var BMCCoords = [
     		new google.maps.LatLng(45.78274366611187, 4.8757513624575495),
			new google.maps.LatLng(45.78299812165077, 4.876979840367085),
			new google.maps.LatLng(45.78242574172158, 4.877205145924336),
			new google.maps.LatLng(45.78216757006048, 4.8760625389161305)
  		];
		
		var GENCoords = [
    		new google.maps.LatLng(45.783147752451555, 4.872468419049028),
			new google.maps.LatLng(45.783454524884284, 4.873868514155561),
			new google.maps.LatLng(45.78311783435683, 4.873997223942524),
			new google.maps.LatLng(45.78279609583433, 4.872613258335832)
  		];
		
		var TCCoords = [
    		new google.maps.LatLng(45.783880986774086, 4.872114367459062),
			new google.maps.LatLng(45.78416529952895, 4.873519844982866),
			new google.maps.LatLng(45.783454524884284, 4.873868514155561),
			new google.maps.LatLng(45.783147752451555, 4.872468419049028)
  		];
		
		var GECoords = [
    		new google.maps.LatLng(45.783574226649186, 4.870773262951616),
			new google.maps.LatLng(45.783880986774086, 4.872114367459062),
			new google.maps.LatLng(45.78291207043258, 4.872560950760203),
			new google.maps.LatLng(45.782624012725876, 4.871210454021366)
  		];
		
		var RotondeCoords = [
    		new google.maps.LatLng(45.78416529952895, 4.873519844982866),
			new google.maps.LatLng(45.784329910948536, 4.874276209925824),
			new google.maps.LatLng(45.78371639403171, 4.874544394581562),
			new google.maps.LatLng(45.783566744673855, 4.873820252392534)
  		];
		
		var EFICoords = [
    		new google.maps.LatLng(45.78483118425365, 4.870150990460161),
			new google.maps.LatLng(45.785324981272936, 4.872586436245683),
			new google.maps.LatLng(45.78408294347568, 4.873133526458787),
			new google.maps.LatLng(45.783574226649186, 4.870773262951616)
  		];
		
		var CBCoords = [
    		new google.maps.LatLng(45.785324981272936, 4.872586436245683),
			new google.maps.LatLng(45.78596841715052, 4.8753705512039005),
			new google.maps.LatLng(45.7846890397969, 4.875928414433247),
			new google.maps.LatLng(45.78408294347568, 4.873133526458787)
  		];
		
		var HumasCoords = [
    		new google.maps.LatLng(45.783566744673855, 4.873820252392534),
			new google.maps.LatLng(45.78409797238965, 4.876185942744428),
			new google.maps.LatLng(45.78349941689201, 4.876432669728047),
			new google.maps.LatLng(45.78298309235994, 4.87404547752385)
  		];
		
		var KfetCoords = [
    		new google.maps.LatLng(45.784329910948536, 4.874276209925824),
			new google.maps.LatLng(45.7846890397969, 4.875928414433247),
			new google.maps.LatLng(45.78409797238965, 4.876185942744428),
			new google.maps.LatLng(45.78371639403171, 4.874544394581562)
  		];
		
		var BSCoords = [
    		new google.maps.LatLng(45.78241448091351, 4.872795608335878),
			new google.maps.LatLng(45.782549131528334, 4.873530493392991),
			new google.maps.LatLng(45.78163633893279, 4.873903333536418),
			new google.maps.LatLng(45.781486661440596, 4.873197899475144)
  		];
		
		var IFCoords = [
    		new google.maps.LatLng(45.78254539047193, 4.872414694442796),
			new google.maps.LatLng(45.78260717301228, 4.8727044534423385),
			new google.maps.LatLng(45.781486661440596, 4.873197899475144),
			new google.maps.LatLng(45.78119485273164, 4.871829972877549),
			new google.maps.LatLng(45.781823427004845, 4.871561814402753),
			new google.maps.LatLng(45.78204789292776, 4.872634661762959)
  		];
		
		var BeurkCoords = [
    		new google.maps.LatLng(45.781398800019176, 4.872784919712785),
			new google.maps.LatLng(45.78162888921024, 4.873889971827566),
			new google.maps.LatLng(45.78067115486669, 4.874260080425984),
			new google.maps.LatLng(45.780454100687905, 4.873213992729234)
  		];
		
		var CDCoords = [
    		new google.maps.LatLng(45.78021471872471, 4.871931977246049),
			new google.maps.LatLng(45.78067115486669, 4.874260080425984),
			new google.maps.LatLng(45.77957871895478, 4.874716055958515),
			new google.maps.LatLng(45.7791745967048, 4.8724039656069635)
  		];
		
		var GCUCoords = [
    		new google.maps.LatLng(45.7846890397969, 4.875928414433247),
			new google.maps.LatLng(45.78492845760968, 4.876936961268484),
			new google.maps.LatLng(45.783746321846614, 4.877441180317646),
			new google.maps.LatLng(45.78349941689201, 4.876432669728047)
  		];
		
		var GMCCoords = [
    		new google.maps.LatLng(45.78309725873358, 4.874528310388882),
			new google.maps.LatLng(45.783574236610406, 4.876711655711233),
			new google.maps.LatLng(45.78299812165077, 4.876979840367085),
			new google.maps.LatLng(45.78274366611187, 4.8757513624575495),
			new google.maps.LatLng(45.78216757006048, 4.8760625389161305),
			new google.maps.LatLng(45.78190573133237, 4.8750915652206)
  		];
		
		var DirCoords = [
    		new google.maps.LatLng(45.783574236610406, 4.876711655711233),
			new google.maps.LatLng(45.78404559903309, 4.878857422923261),
			new google.maps.LatLng(45.78290456332772, 4.8793535822549075),
			new google.maps.LatLng(45.78242574172158, 4.877205145924336),
  		];
		
		var CapelleCoords = [
    		new google.maps.LatLng(45.78368645615884, 4.879002280209306),
			new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.783357258997576, 4.881378663151509),
			new google.maps.LatLng(45.78290456332772, 4.8793535822549075)
  		];
		
		var CDSCoords = [
    		new google.maps.LatLng(45.78596841715052, 4.8753705512039005),
			new google.maps.LatLng(45.78649961201979, 4.877752352809011),
			new google.maps.LatLng(45.78404559903309, 4.878857422923261),
			new google.maps.LatLng(45.783746321846614, 4.877441180317646),
			new google.maps.LatLng(45.78492845760968, 4.876936961268484),
			new google.maps.LatLng(45.7846890397969, 4.875928414433247)
  		];
		
		var GJCoords = [
    		new google.maps.LatLng(45.78649961201979, 4.877752352809011),
			new google.maps.LatLng(45.78675772102882, 4.879117606197269),
			new google.maps.LatLng(45.78460670204622, 4.880155589872857),
			new google.maps.LatLng(45.784711433870484, 4.8807805244670135),
			new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.78368645615884, 4.879002280209306)
  		];
		
		var GMDCoords = [
    		new google.maps.LatLng(45.785402604269905, 4.879750616524461),
			new google.maps.LatLng(45.78578137549828, 4.8815718184462185),
			new google.maps.LatLng(45.78441214639291, 4.882113562240875),
			new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.784711433870484, 4.8807805244670135),
			new google.maps.LatLng(45.78460670204622, 4.880155589872857)
  		];
		
		var TravCoords = [
    		new google.maps.LatLng(45.78415782759384, 4.881003190135061),
			new google.maps.LatLng(45.78441214639291, 4.882113562240875),
			new google.maps.LatLng(45.78421020088481, 4.882194072814855),
			new google.maps.LatLng(45.78441408202078, 4.883159658998807),
			new google.maps.LatLng(45.7837799906191, 4.883460057347065),
			new google.maps.LatLng(45.783357258997576, 4.881378663151509)
  		];
		
		var FermatCoords = [
    		new google.maps.LatLng(45.78531189818733, 4.881762255286276),
			new google.maps.LatLng(45.785541961267846, 4.8826929818144436),
			new google.maps.LatLng(45.78441408202078, 4.883159658998807),
			new google.maps.LatLng(45.78421020088481, 4.882194072814855)
  		];
		
		var batABCoords = [
    		new google.maps.LatLng(45.78519779154962, 4.882843203518632),
			new google.maps.LatLng(45.785394197284596, 4.883808780764639),
			new google.maps.LatLng(45.78396885117591, 4.884451117450794),
			new google.maps.LatLng(45.7837799906191, 4.883460057347065)
  		];
		
		
		var gymBCoords = [
    		new google.maps.LatLng(45.785541961267846, 4.8826929818144436),
			new google.maps.LatLng(45.78575512451616, 4.883639739170121),
			new google.maps.LatLng(45.785394197284596, 4.883808780764639),
			new google.maps.LatLng(45.78519779154962, 4.882843203518632)
  		];
		
		var SGMCoords = [
    		new google.maps.LatLng(45.782624012725876, 4.871210454021366),
			new google.maps.LatLng(45.78291207043258, 4.872560950760203),
			new google.maps.LatLng(45.78260717301228, 4.8727044534423385),
			new google.maps.LatLng(45.78254539047193, 4.872414694442796),
			new google.maps.LatLng(45.78204789292776, 4.872634661762959),
			new google.maps.LatLng(45.781823427004845, 4.871561814402753)
  		];


  		// On définit les zones
  		var GI = new google.maps.Polygon({
    		paths: GICoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#D61818',
    		fillOpacity: 0.35
  		});
  
   		var BMC = new google.maps.Polygon({
    		paths: BMCCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#DB8B23',
    		fillOpacity: 0.35
  		});
		
		var GEN = new google.maps.Polygon({
    		paths: GENCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#10FF3F',
    		fillOpacity: 0.35
  		});
		
		var TC = new google.maps.Polygon({
    		paths: TCCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#1E70FC',
    		fillOpacity: 0.35
  		});
		
		var GE = new google.maps.Polygon({
    		paths: GECoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#EBD91C',
    		fillOpacity: 0.35
  		});
		
		var Rotonde = new google.maps.Polygon({
    		paths: RotondeCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#6B1CEB',
    		fillOpacity: 0.35
  		});
		
		var EFI = new google.maps.Polygon({
    		paths: EFICoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#0E2380',
    		fillOpacity: 0.35
  		});
		
		var CB = new google.maps.Polygon({
    		paths: CBCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#09BD21',
    		fillOpacity: 0.35
  		});
		
		var Humas = new google.maps.Polygon({
    		paths: HumasCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#3B8223',
    		fillOpacity: 0.35
  		});
		
		var Kfet = new google.maps.Polygon({
    		paths: KfetCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#F70505',
    		fillOpacity: 0.35
  		});
		
		var BS = new google.maps.Polygon({
    		paths: BSCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#05CBF7',
    		fillOpacity: 0.35
  		});
		
		var IF = new google.maps.Polygon({
    		paths: IFCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#FFFFFF',
    		fillOpacity: 0.35
  		});
		
		var Beurk = new google.maps.Polygon({
    		paths: BeurkCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#EDDE11',
    		fillOpacity: 0.35
  		});
		
		var CD = new google.maps.Polygon({
    		paths: CDCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#6DDE47',
    		fillOpacity: 0.35
  		});
		
		var GCU = new google.maps.Polygon({
    		paths: GCUCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#505250',
    		fillOpacity: 0.35
  		});
		
		var GMC = new google.maps.Polygon({
    		paths: GMCCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#000000',
    		fillOpacity: 0.35
  		});
		
		var Dir = new google.maps.Polygon({
    		paths: DirCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#3A15BF',
    		fillOpacity: 0.35
  		});
		
		var Capelle = new google.maps.Polygon({
    		paths: CapelleCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#F5D442',
    		fillOpacity: 0.35
  		});
		
		var CDS = new google.maps.Polygon({
    		paths: CDSCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#2B52ED',
    		fillOpacity: 0.35
  		});
		
		var GJ = new google.maps.Polygon({
    		paths: GJCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#C90404',
    		fillOpacity: 0.35
  		});
		
		var GMD = new google.maps.Polygon({
    		paths: GMDCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#0404C9',
    		fillOpacity: 0.35
  		});
		
		var Trav = new google.maps.Polygon({
    		paths: TravCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#575757',
    		fillOpacity: 0.35
  		});
		
		var Fermat = new google.maps.Polygon({
    		paths: FermatCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#BD84C4',
    		fillOpacity: 0.35
  		});
		
		var batAB = new google.maps.Polygon({
    		paths: batABCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#F23F2C',
    		fillOpacity: 0.35
  		});
		
		
		var gymB = new google.maps.Polygon({
    		paths: gymBCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#2451E3',
    		fillOpacity: 0.35
  		});
		
		var SGM = new google.maps.Polygon({
    		paths: SGMCoords,
    		strokeColor: '#000000',
    		strokeOpacity: 0.8,
    		strokeWeight: 2,
    		fillColor: '#D41E69',
    		fillOpacity: 0.35
  		});

  		//On stocke toutes les entreprises dans un tableau d'objets possédant des informations propres aux zones
		var Entreprise = [];
		Entreprise[0] = {Objet :GI,
						 nom : "Total Logistics",
						 srcImagecarte : 'img/logo_carte_entreprise/GI.png',
						 srcImageentreprise : 'img/logo_entreprise/GI.png',
						 //Coordonnées sud-ouest de l'image
						 swBound : new google.maps.LatLng(45.781879478444075,4.873852358474778),
						 //Coordonnées nord est de l'image
						 neBound : new google.maps.LatLng(45.782339697090755,4.8745712529174625),
						 //On initialise l'image à null, on l'a crée ligne 789
						 bounds : null,
						 Overlay : null,
						 texteProfil : "« Notre clientèle attend de nous une fiabilité, une ponctualité et une qualité de livraison exceptionnelles. » sont les paroles du président de Total Logistics qui su convaincre totalement ses clients. Grâce à son Lean Management, Total Logistics connecte toute la France et ouvre des portes au monde entier pour les produits français."
						 };
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
		Entreprise[2] = {Objet :GEN,
						 nom : "Green Energy & Co",
						 srcImagecarte : 'img/logo_carte_entreprise/GEN.png',
						 srcImageentreprise : 'img/logo_entreprise/GEN.png',
						 swBound : new google.maps.LatLng(45.783001797491934,4.873004780426072),
						 neBound : new google.maps.LatLng(45.78324502874469,4.873439360713178),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Approvisionner l’électricité dans la région et avoir un impact positif sur la préservation de l’environnement, impossible ? Pourtant, Green Energy & Co. le fait. Sa production est basée sur des ressources naturelles et toutes ses pratiques visent une vraie durabilité."
						 };
		Entreprise[3] = {Objet :TC,
						 nom : "Blue Telecom",
						 srcImagecarte : 'img/logo_carte_entreprise/TC.png',
						 srcImageentreprise : 'img/logo_entreprise/TC.png',
						 swBound : new google.maps.LatLng(45.78350870418728,4.872889445438432),
						 neBound : new google.maps.LatLng(45.78391653590745,4.87362711534422),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Blue Telecom est leader sur le marché français des télécommunications. L’entreprise dynamique offre des supports filaires, optiques, radio à des prix défiant toute concurrence. Les particuliers peuvent eux aussi profiter de solutions multimédia inventives. Toutes les grandes entreprises laissent installer leurs intranets par Blue Telecom..."
						 };
		Entreprise[4] = {Objet :GE,
						 nom : "Genius Electrics",
						 srcImagecarte : 'img/logo_carte_entreprise/GE.png',
						 srcImageentreprise :'img/logo_entreprise/GE.png',
						 swBound : new google.maps.LatLng(45.78299057441293,4.8712720734024515),
						 neBound : new google.maps.LatLng(45.78348445283917,4.872044612025434),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Genius Electrics sert actuellement un quart du marché de l’installation électrique. Ses systèmes électroniques intégrés sont très prisés et les nouveautés du secteur télécommunications viennent d’être lancées. L’augmentation visée de leur part de marché semble tout à fait réaliste dans les prochaines années."
						 };
		Entreprise[5] = {Objet :Rotonde,
						 nom : "Brodewei",
						 srcImagecarte : 'img/logo_carte_entreprise/Rotonde.png',
						 srcImageentreprise : 'img/logo_entreprise/Rotonde.png',
						 swBound : new google.maps.LatLng(45.78386970872993,4.873761163368272),
						 neBound : new google.maps.LatLng(45.78416156854144,4.874286938761884),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Depuis la rénovation du bâtiment, le Broodewei illustre parfaitement par son apparence la magnificence qu’on pouvait admirer depuis plusieurs années déjà. Tous les spectacles, que ce soir du théâtre, une bonne comédie musicale ou bien même un fameux opéra, ont toujours été recommandés par des critiques les plus durs. Les billets se font rares ! Mais les soirées passées au Broodewei sont inoubliables..."
						 };
		Entreprise[6] = {Objet :EFI,
						 nom : "Hill Tone",
						 srcImagecarte : 'img/logo_carte_entreprise/EFI.png',
						 srcImageentreprise : 'img/logo_entreprise/EFI.png',
						 swBound : new google.maps.LatLng(45.784243804234606,4.870687351837205),
						 neBound : new google.maps.LatLng(45.784816230599766,4.871615458583051),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Vous avez toujours voulu vivre comme Louis XIV? Un séjour au Hill Tone est le luxe à l’état pur. Dans les chambres on trouve un équipement moderne et agréable. Chaque hôtel de la chaîne possède un restaurant gastronomique et un spa. Présente partout dans le monde et adaptée aux différentes cultures, la chaîne d’hôtels Hill Tone offre tout le luxe possible pour faire de votre séjour un moment inoubliable."
						 };
						 
		Entreprise[7] = {Objet :CB,
						 srcImagecarte : 'img/logo_carte_entreprise/colette.png',
						 srcImageentreprise : 'img/logo_entreprise/colette.png',
						 nom : "Wilbedon & Co",
						 swBound : new google.maps.LatLng(45.784909688021635,4.873836265220689),
						 neBound : new google.maps.LatLng(45.78548210754941,4.874764371966535),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "L’association nationale du tennis a depuis peu décidé de s’établir au Wilbedon & Co. Cette entreprise a mis en lumière la plupart des plus grands athlètes célèbres du monde du tennis. Grâce aux nombreux investisseurs, le Wilbedon & Co est une entreprise avec beaucoup de succès."
						 };
						 
		Entreprise[8] = {Objet :Humas,
						 srcImagecarte : 'img/logo_carte_entreprise/Humas.png',
						 srcImageentreprise : 'img/logo_entreprise/Humas.png',
						 nom : "Center Park",
						 swBound : new google.maps.LatLng(45.783312301771254,4.874753580703782),
						 neBound : new google.maps.LatLng(45.78377250859037,4.875472475146466),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Le Center Park est le plus grand fournisseur de services de ressources humaines du pays. Caractérisé par une grande connaissance des entreprises et des hommes, les agents du Center Park ne cherchent jamais longtemps une solution pour un problème de management. Leurs services sont fortement demandés, mais il ne faut pas être trop pressés…"
						 };
						 
		Entreprise[9] = {Objet :Kfet,
						 srcImagecarte : 'img/logo_carte_entreprise/MDE.png',
						 srcImageentreprise : 'img/logo_entreprise/MDE.png',
						 nom : "Club Mad",
						 swBound : new google.maps.LatLng(45.78404553392958,4.875150547637986),
						 neBound : new google.maps.LatLng(45.78450573469595,4.8758694420806705),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Le centre de loisirs est un lieu de rencontre pour les jeunes et les seniors. En plus du cinéma, le bowling, les caféterias, les restaurants et autre convivialité, il y a toujours des animations ou des expositions organisées par les associations étudiantes."
						 };
						 
		Entreprise[10] = {Objet :BS,
						 srcImagecarte : 'img/logo_carte_entreprise/BS.png',
						 srcImageentreprise : 'img/logo_entreprise/BS.png',
						 nom : "Biotech",
						 swBound : new google.maps.LatLng(45.782167542488075,4.873004780426072),
						 neBound : new google.maps.LatLng(45.78244444695973,4.8735466490737736),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Biotech est le plus grand centre de recherche de biochimie et phamarcologie de France. Les dernières recherches en matière de biologie moléculaire ont déjà suscité beaucoup d’intérêt à l’international. C’est pour cette raison que Biotech est devenu un nom très réputé. Leur crédo “la nature comme modèle” plaît aux investisseurs et Biotech vise une augmentation du capital dans les prochains mois, grâce à son ingénierie des systèmes naturels."
						 };
						 
		Entreprise[11] = {Objet :IF,
						 srcImagecarte : 'img/logo_carte_entreprise/IF.png',
						 srcImageentreprise : 'img/logo_entreprise/IF.png',
						 nom : "ITech",
						 swBound : new google.maps.LatLng(45.78148292031208,4.872299359455155),
						 neBound : new google.maps.LatLng(45.78188889630108,4.872978020762616),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Lorsque un investisseur cherche une entreprise en pleine expansion sans aucun risque, I-Tech est une parfaite alternative. Cela fait à peine 10 ans que ses créateurs ont commencé à développer des logiciels systèmes et réseaux dans un garage. Aujourd’hui, l’entreprise est cotée en bourse et elle fournit des produits d’informatique décisionnelle et des systèmes d’information pour des projets industriels."
						 };
						 
		Entreprise[12] = {Objet :Beurk,
						 srcImagecarte : 'img/logo_carte_entreprise/Miam.png',
						 srcImageentreprise : 'img/logo_entreprise/Miam.png',
						 nom : "Miam Inc.",
						 swBound : new google.maps.LatLng(45.78079641914237,4.8731201154137125),
						 neBound : new google.maps.LatLng(45.78132585783069,4.873951662635022),
						 bounds : null,
						 Overlay : null,
						 texteProfil: "Même si Miam Inc. est la plus grande chaîne de pizzeria du pays, son cadre authentique rappelle toujours la convivialité que l’on retrouve dans les ruelles de Naples. Les responsables sont contents que leur expansion au sein du marché européen se soit conclue avec succès. Même en Italie, on peut désormais trouver des restaurants de Miam Inc !"
						 };
						 
		Entreprise[13] = {Objet :CD,
						 nom : "Campanule",
						 srcImagecarte : 'img/logo_carte_entreprise/CD.png',
						 srcImageentreprise : 'img/logo_entreprise/CD.png',
						 swBound : new google.maps.LatLng(45.779862988460735,4.873130844249772),
						 neBound : new google.maps.LatLng(45.780392436012725,4.873962391471082),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "La société officielle du logement offre un espace de vie à de nombreuses citoyens. Grâce à un loyer bas et un bon entretien, Companule est très populaire pour ses locataires. Des nouveaux projets de construction ont même suscité beaucoup d’intérêt pour les investisseurs."
						 };
						 
		Entreprise[14] = {Objet :GCU,
						 nom : "Leonard Construction",
						 srcImagecarte : 'img/logo_carte_entreprise/GCU.png',
						 srcImageentreprise : 'img/logo_entreprise/GCU.png',
						 swBound : new google.maps.LatLng(45.78369762395447,4.876397774829911),
						 neBound : new google.maps.LatLng(45.78422703509279,4.877229322051221),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Même si la plupart des gens ne connaissent pas Leonard Construction, ils contemplent tous les jours leur infrastructures et ouvrages d’art - tout à fait inconsciemment. Leonard Construction apporte une contribution essentielle à l'embellissement de la région année après année. Tous les projets entamés par l’entreprise transforment le quotidien en or, pierre ou matériaux modernes."
						 };
						 
		Entreprise[15] = {Objet :GMC,
						 nom : "Mech. Enterprise",
						 srcImagecarte : 'img/logo_carte_entreprise/GMC.png',
						 srcImageentreprise : 'img/logo_entreprise/GMC.png',
						 swBound : new google.maps.LatLng(45.78258654207694,4.874868915691422),
						 neBound : new google.maps.LatLng(45.78311596376634,4.875700462912732),
						 bounds : null,
						 Overlay : null,
						 texteProfil: "Depuis plus de 50 ans, Mech. Entreprise produit des pièces d’exception en acier. C’est une PME familiale reconnue pour ses valeurs et ses traditions. L’entreprise évolue avec le temps, en utilisant des simulations numériques modernes et une automatique industrielle.  Ses clients la récompensent par une fidélité durable."
						 };
						 
		Entreprise[16] = {Objet :Dir,
						 Chemin : "Dir.html",
						 nom : "Doua Postal",
						 srcImagecarte : 'img/logo_carte_entreprise/direction.png',
						 srcImageentreprise : 'img/logo_entreprise/direction.png',
						 swBound : new google.maps.LatLng(45.782938200015685,4.877556489124345),
						 neBound : new google.maps.LatLng(45.783606034993184,4.878709901427442),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "La Doua Postal est une nouvel alternative au service de livraison national. Grâce à un réseau étroit et une bonne administration, les retards n’existent plus ! Qui l’aurait cru? Leurs service sont rendus à des prix abordables, car la direction financière de cette société a inventé un système révolutionnaire de comptabilité dans lequel tous les acteurs profitent d’une répartition des coûts plus juste. Enfin une vraie révolution dans le service postal !"
						 };
						 
		Entreprise[17] = {Objet :Capelle,
						 nom : "Palais des Congrès",
						 srcImagecarte : 'img/logo_carte_entreprise/Capelle.png',
						 srcImageentreprise : 'img/logo_entreprise/Capelle.png',
						 swBound : new google.maps.LatLng(45.78316266137002,4.87942867101674),
						 neBound : new google.maps.LatLng(45.78373322834793,4.8803138624183475),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Au début du projet du Palais des Congrès, la plupart des gens étaient mitigés quant à l’utilité de ce lieu. Tous les doutes se sont finalement relevé infondés. C’est l’endroit où se tiennent les évènements phare de l’année, grâce à quoi le Palais fait  beaucoup de bénéfices. Ce concept serait même bientôt repris dans d’autres villes du monde..."
						 };
						 
		Entreprise[18] = {Objet :CDS,
						 nom : "Sport Center",
						 srcImagecarte : 'img/logo_carte_entreprise/CDS.png',
						 srcImageentreprise : 'img/logo_entreprise/CDS.png',
						 swBound : new google.maps.LatLng(45.78484235181969,4.877073691501664),
						 neBound : new google.maps.LatLng(45.785532609127586,4.878135908698255),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Cette chaîne de fitness est tellement plébiscitée que les files d’attente devant les salles de sport deviennent indécentes. Son programme offre un choix tellement large d’activités sportives qu’à première vue, on ne sait plus où donner de la tête. De plus, ses transmissions des plus grands matchs en direct sont suivies par un grand nombre de fans."
						 };
						 
		Entreprise[19] = {Objet :GJ,
						 nom : "ORPIste",
						 srcImagecarte : 'img/logo_carte_entreprise/GJ.png',
						 srcImageentreprise : 'img/logo_entreprise/GJ.png',
						 swBound : new google.maps.LatLng(45.785616713223426,4.878210948123979),
						 neBound : new google.maps.LatLng(45.78630696094315,4.879273165320569),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Orpiste est l’exemple parfait d’une entreprise qui a bien profité du boom immobilier. La société immobilière fait le commerce des bâtiments de plusieurs millions d’euros ! Leur slogan initial “un toit sur votre tête” n’est plus pertinent, car Orpiste ne fournis plus à l’heure actuelle de logements pour les particuliers. Ses toits couvrent désormais des gratte-ciels, des stades ou des centres commerciaux."
						 };
						 
		Entreprise[20] = {Objet :GMD,
						 nom : "Airboost",
						 srcImagecarte : 'img/logo_carte_entreprise/GMD.png',
						 srcImageentreprise : 'img/logo_entreprise/GMD.png',
						 swBound : new google.maps.LatLng(45.78473386554657,4.880571292057084),
						 neBound : new google.maps.LatLng(45.78542412419778,4.881633509253675),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Le fabricant de turbines s’est fermement établi comme l’un des leaders mondiaux du marché. Ses compétences en matière de résistance des matériaux et de mécanique des fluides sont très fortement demandée dans la construction de centrales électriques. Une nouvelle génération de turbines anti-vibrations va bientôt lui donner l’accès au marché de l’aéronautique."
						 };
						 
		Entreprise[21] = {Objet :Trav,
						 nom : "Lion Formation",
						 srcImagecarte : 'img/logo_carte_entreprise/LN.png',
						 srcImageentreprise : 'img/logo_entreprise/LN.png',
						 swBound : new google.maps.LatLng(45.783677048565046,4.882067964687394),
						 neBound : new google.maps.LatLng(45.78408487905373,4.882805634593183),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Dans les bâtiments du Lion Formation on acquiert toute sorte de compétences. L’établissement le plus prestigieux de la région offre le choix entre plusieurs filières différentes. Si vous vous intéressez à la physique, aux langues ou aux cultures étrangères, vous trouverez le cursus qu’il vous faut au Lion Formation."
						 }; 
						 
		Entreprise[22] = {Objet :Fermat,
						 Chemin : "Fermat.html",
						 nom : "Pedro de Fermat",
						 srcImagecarte : 'img/logo_carte_entreprise/Fermat.png',
						 srcImageentreprise : 'img/logo_entreprise/Fermat.png',
						 swBound : new google.maps.LatLng(45.78484235182056,4.881995545043992),
						 neBound : new google.maps.LatLng(45.78535491818525,4.882714439486676),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Pedro de Fermat, ou l’entreprise qui aide tout élève à réussir son apprentissage. Grâce à son soutien scolaire et ses professeurs d’une qualité rare, l’entreprise connait énormément de succès auprès des étudiants en classe préparatoire. Tous sont habitués à arpenter ses salles de travail. Sans cette entreprise, le métier d’ingénieur se perd…"
						 }; 
						 
		Entreprise[23] = {Objet :batAB,
						 nom : "Formula One",
						 srcImagecarte : 'img/logo_carte_entreprise/AB.png',
						 srcImageentreprise : 'img/logo_entreprise/AB.png',
						 swBound : new google.maps.LatLng(45.783970714764045,4.883486853256272),
						 neBound : new google.maps.LatLng(45.78436732030299,4.88411455259245),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Formula One. Ce nom doux qui nous rappelle les circuits automobiles n’est que trop modeste pour désigner ces hotels qui fleurissent aux abords du campus. Dignes des plus grands, c’est avec une simplicité et une convivialité débordante qu’ils accueillent leurs hôtes, en toute intimité."
						 };
						 
						 
		Entreprise[24] = {Objet :gymB,
						 nom : "Badison Square Garden",
						 srcImagecarte : 'img/logo_carte_entreprise/GymB.png',
						 srcImageentreprise : 'img/logo_entreprise/GymB.png',
						 swBound : new google.maps.LatLng(45.78530996265055,4.882859216346787),
						 neBound : new google.maps.LatLng(45.78557188810294,4.883288432215863),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "Dans l’opinion commune, le Badison Square Garden est uniquement populaire pour ses évènements sportifs. Mais le BSG a bien plus à offrir que le sport. Des concerts des plus grands groupes de rock ont y lieu, ainsi que de grands spectacles ou des galas. Il n’y a plus un soir durant lesquelles les lumières restent éteintes !"
						 };
						 
		Entreprise[25] = {Objet :SGM,
						 nom : "SoTech Materials",
						 srcImagecarte : 'img/logo_carte_entreprise/SGM.png',
						 srcImageentreprise : 'img/logo_entreprise/SGM.png',
						 swBound : new google.maps.LatLng(45.78220495329441,4.871588574066209),
						 neBound : new google.maps.LatLng(45.78269509763412,4.87238793477934),
						 bounds : null,
						 Overlay : null,
						 texteProfil : "D’un petit bureau d’études, SO Tech Materials s’est métamorphosée en compagnie internationale et les commandes arrivent par milliers. SO Tech Materials résoud à la fois des problèmes mathématiques et statistiques mais aussi des questions d'ingénierie des matériaux. L’entreprise fournit des expertises excellentes en matière d’analyse des matériaux. Leurs laboratoires de recherche structurale et micro-structurale sont les plus modernes et avancés au monde."
						 };

	 
	 
	//On charge la carte une fois à l'ouverture de la page 
	loadmap();
	
	
	//On simule la position du joueur à un point hors du campus pour qu'il puisse consulter la carte sans pouvoir réaliser de check-in
	var coordonnees_joueur = {
		latitude : 0,
		longitude : 0
	}
	
	var position_joueur = new google.maps.LatLng(coordonnees_joueur.latitude,coordonnees_joueur.longitude);

	//On actualise la position du joueur sans recharger toute la carte
	navigator.geolocation.watchPosition(onSuccess, onError),{maximumAge:600000, timeout:10000, enableHighAccuracy: true};
  
  	//géolocalisation : off
    function onError(error) {
		alert(' activer geolocalisation');		
 	} 
  
	var marker = new google.maps.Marker({
		clickable : false
	});
  	//géolocalisation : on
  	function onSuccess(position) { 
		coordonnees_joueur.latitude = position.coords.latitude;  	
		coordonnees_joueur.longitude = position.coords.longitude;
		/*coordonnees_joueur.latitude = 45.782549;  	
		coordonnees_joueur.longitude = 4.876893;*/
 		position_joueur = new google.maps.LatLng(coordonnees_joueur.latitude, coordonnees_joueur.longitude);
		marker.setMap(null);
		marker.setPosition(position_joueur);
		marker.setMap(map);
		setcircle();
	}

	//Distance à laquelle le joueur peut se localiser (rayon du cercle)
	var precision_metre = 30;
	
	var displaycurrentposition = new google.maps.Circle();
	
	//Lorsque l'on récupère la position du joueur on affiche le cercle
	function setcircle() {
		var position_options = {
	  		strokeColor: '#FF0000',
      		strokeOpacity: 0.8,
      		strokeWeight: 2,
      		fillColor: '#FF0000',
      		fillOpacity: 0.35,
      		map: map,
      		center: position_joueur,
      		radius: precision_metre,
			clickable : false
   	 	};
		//On efface l'ancien cercle pour ne pas surcharger la carte
		displaycurrentposition.setMap(null);
		displaycurrentposition = new google.maps.Circle(position_options);
	}
		
	//fonction appelé au chargement de la carte
	function loadmap() {

		//On affiche chaque entreprise ainsi que son image sur la carte 
		for (var i=0;i<Entreprise.length;i++) {
  			Entreprise[i].Objet.setMap(map);
			Entreprise[i].bounds = new google.maps.LatLngBounds(Entreprise[i].swBound, Entreprise[i].neBound);
			Entreprise[i].Overlay = new google.maps.GroundOverlay(Entreprise[i].srcImagecarte,Entreprise[i].bounds);
			Entreprise[i].index = i;
			//Entreprise[i].Overlay.setMap(map);
		};

		//fin loadmap()
	};
	
		//Fonction permettant de récupérer les coordonnées sur le cercle pour savoir si ce cerlce intersecte une autre zone
		function findCoordinates(pos, radius)
		{
   			 	// Combien de points décrivent le cercle? 
    			var numberOfPoints = 30;
    			var degreesPerPoint = 360 / numberOfPoints;

  			  	// Angle courrant (incrémenté de 0 à 360)
    			var currentAngle = 0;

   			 	// Coordonnées des points sur le cerlce
   			 	
    			//On sauvegarde les points dans un tableau
   			 	var points = new Array();

   			 	for(var i=0; i < numberOfPoints; i++) {
       			 	 

        			//On crée le point puis on l'ajoute dans le tableau    
					    
       			 	p = google.maps.geometry.spherical.computeOffset(pos, radius, currentAngle);
					points.push(p);
	
        			// On incrémente l'angle
        			currentAngle += degreesPerPoint;
   				 }
    			// On renvoie le tableau de points
    			return points;
			}
	
		//On vérifie si l'entreprise est accessible par le joueur
		function location_contained_or_edge (entreprise) {
			//On regarde s'il on se trouve dans la zone en question
			if (google.maps.geometry.poly.containsLocation(position_joueur,entreprise)) {
				return true;
			}
			//On regarde si la zone n'est pas accessible via le cercle
	 		else {
					var points = findCoordinates(position_joueur,precision_metre); 
					var i = 0;
					var ok = false;
					var marker;
					while (i<points.length && !(ok)) {
						if (google.maps.geometry.poly.containsLocation(points[i],entreprise)) {
							ok = true
						}
						else {
							i = i+1;
						}
					}
					return ok;
			}
		}
		
		//On crée une infowindow permettant le check-in ou la demande d'informations
		var infowindow = new google.maps.InfoWindow();
		
		var content_infowindow
		

		function show_myInfowindow(entreprise,position) {
			infowindow.close(map);
			content_infowindow = '<div style="line-height:1.35;overflow:hidden;white-space:nowrap"><center class="departement"><b>'+entreprise.nom+'</b><br/></center><button id="checkin" disabled>Check-in</button><button id="info">Fiche entreprise</button></div>'
			$('#infowindow_content').html(content_infowindow);
			infowindow.setContent($('#infowindow_content').html());
			// Replace our Info Window's position
			infowindow.setPosition(position);
			
			
			infowindow.open(map);
			//Si la zone est accessible par le joueur, on autorise le check-in (si le joueur est la BMC, on autorise le checkin partout
			if ((location_contained_or_edge(entreprise.Objet)) ||(google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet))) {
				document.getElementById('checkin').disabled = false;
			}
			
		} 
		
		
		// Lors d'un click sur une entreprise, on affiche l'infowindow et on écoute un click possible sur "informations" ou "checkin"
		google.maps.event.addListener(Entreprise[0].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[0],event.latLng);
			domlistener(Entreprise[0]);	
  		})
		
		google.maps.event.addListener(Entreprise[1].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[1],event.latLng);
			domlistener(Entreprise[1]);	
  		})
		
		google.maps.event.addListener(Entreprise[2].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[2],event.latLng);	
			domlistener(Entreprise[2]);	
  		})
		
		google.maps.event.addListener(Entreprise[3].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[3],event.latLng);	
			domlistener(Entreprise[3]);		
  		})
		
		google.maps.event.addListener(Entreprise[4].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[4],event.latLng);	
			domlistener(Entreprise[4]);	
  		})
		
		google.maps.event.addListener(Entreprise[5].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[5],event.latLng);	
			domlistener(Entreprise[5]);		
  		})
		
		google.maps.event.addListener(Entreprise[6].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[6],event.latLng);	
			domlistener(Entreprise[6]);	
  		})
		
		google.maps.event.addListener(Entreprise[7].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[7],event.latLng);	
			domlistener(Entreprise[7]);	
  		})
		
		google.maps.event.addListener(Entreprise[8].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[8],event.latLng);	
			domlistener(Entreprise[8]);		
  		})
		
		google.maps.event.addListener(Entreprise[9].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[9],event.latLng);	
			domlistener(Entreprise[9]);		
  		})
		
		google.maps.event.addListener(Entreprise[10].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[10],event.latLng);	
			domlistener(Entreprise[10]);		
  		})
		
		google.maps.event.addListener(Entreprise[11].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[11],event.latLng);	
			domlistener(Entreprise[11]);		
  		})
		
		google.maps.event.addListener(Entreprise[12].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[12],event.latLng);	
			domlistener(Entreprise[12]);		
  		})
		
		google.maps.event.addListener(Entreprise[13].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[13],event.latLng);	
			domlistener(Entreprise[13]);	
  		})
		
		google.maps.event.addListener(Entreprise[14].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[14],event.latLng);	
			domlistener(Entreprise[14]);		
  		})
		
		google.maps.event.addListener(Entreprise[15].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[15],event.latLng);	
			domlistener(Entreprise[15]);	
  		})
		
		google.maps.event.addListener(Entreprise[16].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[16],event.latLng);	
			domlistener(Entreprise[16]);		
  		})
		
		google.maps.event.addListener(Entreprise[17].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[17],event.latLng);	
			domlistener(Entreprise[17]);		
  		})
		
		google.maps.event.addListener(Entreprise[18].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[18],event.latLng);	
			domlistener(Entreprise[18]);	
  		})
		
		google.maps.event.addListener(Entreprise[19].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[19],event.latLng);	
			domlistener(Entreprise[19]);		
  		})
		
		google.maps.event.addListener(Entreprise[20].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[20],event.latLng);	
			domlistener(Entreprise[20]);	
  		})
		
		google.maps.event.addListener(Entreprise[21].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[21],event.latLng);	
			domlistener(Entreprise[21]);		
  		})
		
		google.maps.event.addListener(Entreprise[22].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[22],event.latLng);	
			domlistener(Entreprise[22]);	
  		})
		
		google.maps.event.addListener(Entreprise[23].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[23],event.latLng);	
			domlistener(Entreprise[23]);	
  		})
		
		google.maps.event.addListener(Entreprise[24].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[24],event.latLng);	
			domlistener(Entreprise[24]);		
  		})
		
		google.maps.event.addListener(Entreprise[25].Objet,'click', function(event) {
			show_myInfowindow(Entreprise[25],event.latLng);	
			domlistener(Entreprise[25]);		
  		})
		
		function domlistener(entreprise) {
			google.maps.event.addDomListener(document.getElementById('info'), 'click', function(){openinfo(entreprise)})
			google.maps.event.addDomListener(document.getElementById('checkin'), 'click', function(){checkin(entreprise)})	
		}
		var socket = io.connect(adresse_serveur);
		function checkin(entreprise) {
			var teleportation = false;
			//Si le joueur se trouve à la BMC et qu'il fait un checkin dans une société à laquelle il n'a pas accès, on met le booléen "teleportation" à vrai
			if (google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet)) {
				if (!(location_contained_or_edge (entreprise.Objet))) {
					teleportation = true;
				}
			}
			//On envoie les données du checkin
			socket.emit('setCheckin',{
			idEntreprise : entreprise.index,
			idJoueur : idJoueur,
			teleportation : teleportation
			});
			
			
		}
		socket.on('resultSetCheckin', function (result) {
			alert(result);
			socket.emit('getArgentDisponibleJoueur',idJoueur);
			});
			
		var ok_ordre = false
		function openinfo(entreprise) {
			//On charge l'image de l'entreprise sur la page de l'entreprise
			document.getElementById('image_entreprise').setAttribute('src',entreprise.srcImageentreprise);
			if (entreprise.index == 1) {
				document.getElementById('image_bmc').setAttribute('src',entreprise.srcImageentreprise);
			}
			//On écrit le nom de l'entreprise dans le header
			$('#nom_entreprise').html(entreprise.nom);
			//On écrit le nom de l'entreprise dans le champ nom où il faut passer l'ordre
			$('#entreprise_active').html(entreprise.nom);
			//On stocke l'id de l'entreprise sélectionnée
			$('#entreprise_active').data("id_entreprise", entreprise.index);
			//On modifie le texte du profil de l'entreprise
			$('#texte_fiche_entreprise').text(entreprise.texteProfil);
			
			
			//On regarde si le joueur se trouve à la BMC
			var isAtBMC = false;
			if (google.maps.geometry.poly.containsLocation(position_joueur,Entreprise[1].Objet)) {
				isAtBMC = true;
			}
			
			
			//On affecte la variable isAtBMC à la page BMC profil pour savoir si on peut intéragir avec la boutique
			
			$('#bmcprofil').data("isAtBMC", isAtBMC);
			
			//On vérifie que l'on puisse bien passer un ordre
				ok_ordre = true;		
			if (document.getElementById('checkin').disabled == true) {				
				ok_ordre = false;
			}
			
			//On ferme l'infowindow	
			infowindow.close(map);
			//On affiche la page entreprise ou la page BMC
			if (entreprise.index != 1 && isAtBMC && !(location_contained_or_edge (entreprise.Objet)) ) {
				//si le joueur se trouve à la bmc et qu'il sélectionne une autre entreprise, il ne peut pas passer d'ordre
				ok_ordre = false;
			}
			if (entreprise.index != 1) {
				$.mobile.changePage("#Entreprise");
			}
			else {
				$.mobile.changePage("#bmcprofil");
			}
		}
		 	
			//On grise(respectivement dégrise) l'onglet passer un ordre si on est pas sur la zone
			$(document).on("pagebeforeshow", "#Entreprise", function() {
				$( "#tabs_entreprise" ).tabs({ active: 1 });
				
				if (ok_ordre==false) {	
					$("#tabs_entreprise").tabs("option", "disabled", [2]);
				}
				else {
					$( "#tabs_entreprise" ).tabs( "enable", 2 );
				}
				
				//On affiche l'onglet profil par défaut
				
				
				$("#tabs_entreprise").tabs( "option", "active", 1 );
				
			});
			
			$('#geolocation_icon').click(function (e) {
				e.stopImmediatePropagation();
				e.preventDefault();
				if ((coordonnees_joueur.latitude !=0 ) && (coordonnees_joueur.longitude !=0) ) {
					map.panTo(position_joueur);
					map.setZoom(17);
				}
				return false;
				
				$(document).on("click","#btn_achat_vente", function(event) {
        					openinfo(Entreprise[1]);
								 return false;
					 });
			});

	
//fin initialize
}


