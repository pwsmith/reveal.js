var map;
var ajaxRequest;
var plotlist;
var plotlayers=[];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function initmap() {
	// set up the map
	map = new L.Map('map');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 9, attribution: osmAttrib});		

	// start the map in South-East England
	map.setView(new L.LatLng(9.58, -0.5),6);
	map.addLayer(osm);

		var dagbani = L.circle([9.58, -0.5], {
		color: 'red',
		fillColor: '#f03',
		fillOpacity: 0.5,
		radius: 10000
	}).addTo(map);

// 	var aari = L.circle([6.00, 36.58], {
// 		color: 'red',
// 		fillColor: '#f03',
// 		fillOpacity: 0.5,
// 		radius: 100000
// 	}).addTo(map);

// 	var english = L.circle([52.00, 0.00], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);

// 	var dutch = L.circle([52.50, 6.00], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	// var popup = L.popup()
// 	// .setLatLng([51.5, -0.09])
// 	// .setContent("I am a standalone popup.")
// 	// .openOn(map);

// 	aari.bindPopup("Aari.");
// 	aari.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	aari.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var afrikaans = L.circle([-31, 22], {
// 		color: 'red',
// 		fillColor: '#f03',
// 		radius: 100000
// 	}).addTo(map);

// 	afrikaans.bindPopup("afrikaans.");
// 	afrikaans.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	afrikaans.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// var mohawk = L.circle([43.50, -75.25, ], {
// 	color: 'red',
// 	fillColor: '#f03',
// 	radius: 100000
// }).addTo(map);
// mohawk.bindPopup('Akwesanse Mohawk');
// mohawk.on('mouseover', function (e) {
// 	this.openPopup();
// });
// mohawk.on('mouseout', function (e) {
// 	this.closePopup();
// });


// 	english.bindPopup("English");
// 	english.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	english.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	dutch.bindPopup("Dutch");
// 	dutch.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	dutch.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var aleut = L.circle([54, -166], {
// 		color: 'red',
// 		fillColor: '#f03',
// 		fillOpacity: 0.5,
// 		radius: 100000
// 	}).addTo(map);
// 	aleut.bindPopup('aleut');
// 	aleut.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	aleut.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ambai = L.circle([-1.83, 136.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ambai.bindPopup('ambai'.capitalize());
// 	ambai.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ambai.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var awtuw = L.circle([-3.58, 142], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	awtuw.bindPopup('awtuw'.capitalize());
// 	awtuw.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	awtuw.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var bardi = L.circle([-16.58, 122.92], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	bardi.bindPopup('bardi'.capitalize());
// 	bardi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	bardi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var basque = L.circle([43, -3], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	basque.bindPopup('basque'.capitalize());
// 	basque.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	basque.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var berik = L.circle([-2.15, 138.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	berik.bindPopup('berik'.capitalize());
// 	berik.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	berik.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var bilua = L.circle([-7.75, 156.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	bilua.bindPopup('bilua'.capitalize());
// 	bilua.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	bilua.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var biri = L.circle([-20.5, 146.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	biri.bindPopup('biri'.capitalize());
// 	biri.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	biri.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var fijian = L.circle([-17.83, 178], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	fijian.bindPopup('fijian'.capitalize());
// 	fijian.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	fijian.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var burushashki = L.circle([36.5, 74.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	burushashki.bindPopup('burushashki'.capitalize());
// 	burushashki.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	burushashki.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var camling = L.circle([27, 86.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	camling.bindPopup('camling'.capitalize());
// 	camling.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	camling.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var carib = L.circle([5.5, -56], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	carib.bindPopup('carib'.capitalize());
// 	carib.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	carib.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var cavinena = L.circle([-13.33, -66.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	cavinena.bindPopup('cavineña'.capitalize());
// 	cavinena.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	cavinena.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var chepang = L.circle([27.67, 84.75], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	chepang.bindPopup('chepang'.capitalize());
// 	chepang.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	chepang.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var comanche = L.circle([33.5, -101.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	comanche.bindPopup('comanche'.capitalize());
// 	comanche.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	comanche.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var crow = L.circle([47, -108], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	crow.bindPopup('crow'.capitalize());
// 	crow.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	crow.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var dagaare = L.circle([10.5, -2.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	dagaare.bindPopup('dagaare'.capitalize());
// 	dagaare.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	dagaare.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var dolakha = L.circle([27.33, 86], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	dolakha.bindPopup('dolakha Newar'.capitalize());
// 	dolakha.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	dolakha.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var dumi = L.circle([27.25, 86.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	dumi.bindPopup('dumi'.capitalize());
// 	dumi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	dumi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var dyirbal = L.circle([-17.83, 145.58], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	dyirbal.bindPopup('dyirbal'.capitalize());
// 	dyirbal.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	dyirbal.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var pomo = L.circle([39, -122.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	pomo.bindPopup('eastern Pomo'.capitalize());
// 	pomo.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	pomo.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var evenki = L.circle([56, 125], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	evenki.bindPopup('evenki'.capitalize());
// 	evenki.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	evenki.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var finnish = L.circle([62, 25], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	finnish.bindPopup('finnish'.capitalize());
// 	finnish.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	finnish.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var enets = L.circle([67.50, 86.50], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	enets.bindPopup('Forest Enets'.capitalize());
// 	enets.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	enets.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var gurinji = L.circle([-17.67, 130.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	gurinji.bindPopup('gurinji'.capitalize());
// 	gurinji.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	gurinji.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var hawaiian = L.circle([19.58, -155.50], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	hawaiian.bindPopup('hawaiian'.capitalize());
// 	hawaiian.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	hawaiian.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var hopi = L.circle([36, -110], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	hopi.bindPopup('hopi'.capitalize());
// 	hopi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	hopi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var hua = L.circle([-6.33, 145.33], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	hua.bindPopup('hua'.capitalize());
// 	hua.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	hua.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var isaka = L.circle([-2.83, 141.28], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	isaka.bindPopup('i\'saka'.capitalize());
// 	isaka.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	isaka.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ingush = L.circle([43.17, 45.08], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ingush.bindPopup('ingush'.capitalize());
// 	ingush.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ingush.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var jarawara = L.circle([-7.5, -65.50], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	jarawara.bindPopup('jarawara'.capitalize());
// 	jarawara.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	jarawara.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var jaru = L.circle([-18.75, 128], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	jaru.bindPopup('jaru'.capitalize());
// 	jaru.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	jaru.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kamas = L.circle([52, 92], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kamas.bindPopup('kamas'.capitalize());
// 	kamas.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kamas.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kannada = L.circle([14, 76], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kannada.bindPopup('kannada'.capitalize());
// 	kannada.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kannada.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var karadjeri = L.circle([-19, 122], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	karadjeri.bindPopup('karadjeri'.capitalize());
// 	karadjeri.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	karadjeri.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kayardild = L.circle([-17.05, 139.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kayardild.bindPopup('kayardild'.capitalize());
// 	kayardild.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kayardild.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ket = L.circle([64, 87], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ket.bindPopup('ket'.capitalize());
// 	ket.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ket.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kham = L.circle([28.5, 82.75], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kham.bindPopup('kham'.capitalize());
// 	kham.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kham.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var khanty = L.circle([65, 65], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	khanty.bindPopup('khanty'.capitalize());
// 	khanty.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	khanty.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kilivila = L.circle([-8.5, 151.8], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kilivila.bindPopup('kilivila'.capitalize());
// 	kilivila.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kilivila.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var koasati = L.circle([34.83, -85.17], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	koasati.bindPopup('koasati'.capitalize());
// 	koasati.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	koasati.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var koromfe = L.circle([14.25, -0.92], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	koromfe.bindPopup('koromfe'.capitalize());
// 	koromfe.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	koromfe.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var yalanji = L.circle([-16, 145], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	yalanji.bindPopup('kuku-Yalanji'.capitalize());
// 	yalanji.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	yalanji.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kuna = L.circle([8, -77.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kuna.bindPopup('kuna (border)'.capitalize());
// 	kuna.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kuna.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kunimaipa = L.circle([-8, 146.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kunimaipa.bindPopup('kunimaipa'.capitalize());
// 	kunimaipa.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kunimaipa.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kwamera = L.circle([-19.58, 169.42], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kwamera.bindPopup('kwamera'.capitalize());
// 	kwamera.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kwamera.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var kwaza = L.circle([-12.58, 60.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	kwaza.bindPopup('kwaza'.capitalize());
// 	kwaza.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	kwaza.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ladakhi = L.circle([34, 78], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ladakhi.bindPopup('ladakhi'.capitalize());
// 	ladakhi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ladakhi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var lavukaleve = L.circle([-9.08, 159.2], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	lavukaleve.bindPopup('lavukaleve'.capitalize());
// 	lavukaleve.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	lavukaleve.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var lega = L.circle([-2.83, 27.17], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	lega.bindPopup('lega-Shabunda'.capitalize());
// 	lega.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	lega.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var lele = L.circle([9.08, 15.58], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	lele.bindPopup('lele'.capitalize());
// 	lele.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	lele.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var lezgian = L.circle([41.67, 47.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	lezgian.bindPopup('lezgian'.capitalize());
// 	lezgian.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	lezgian.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var limbu = L.circle([27.17, 87.75], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	limbu.bindPopup('limbu'.capitalize());
// 	limbu.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	limbu.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var macushi = L.circle([4, -60], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	macushi.bindPopup('macushi'.capitalize());
// 	macushi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	macushi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var malayalam = L.circle([10, 76.50], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	malayalam.bindPopup('malayalam'.capitalize());
// 	malayalam.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	malayalam.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var manam = L.circle([-4, 145], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	manam.bindPopup('manam'.capitalize());
// 	manam.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	manam.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var mangarayi = L.circle([-14.67, 133.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	mangarayi.bindPopup('mangarayi'.capitalize());
// 	mangarayi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	mangarayi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var maori = L.circle([-40, 176], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	maori.bindPopup('maori'.capitalize());
// 	maori.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	maori.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var mapudungan = L.circle([-38, -72], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	mapudungan.bindPopup('mapudungan'.capitalize());
// 	mapudungan.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	mapudungan.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var marghi = L.circle([11, 13], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	marghi.bindPopup('marghi'.capitalize());
// 	marghi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	marghi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var martunthunira = L.circle([-20.83, 116.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	martunthunira.bindPopup('martunthunira'.capitalize());
// 	martunthunira.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	martunthunira.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var maybrat = L.circle([-1.33, 132.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	maybrat.bindPopup('maybrat'.capitalize());
// 	maybrat.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	maybrat.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var mina = L.circle([10.33, 13.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	mina.bindPopup('mina'.capitalize());
// 	mina.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	mina.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var mlabri = L.circle([18.5, 101], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	mlabri.bindPopup('mlabri'.capitalize());
// 	mlabri.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	mlabri.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var mokilese = L.circle([6.67, 159.75], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	mokilese.bindPopup('mokilese'.capitalize());
// 	mokilese.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	mokilese.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ao = L.circle([26.58, 94.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ao.bindPopup('ao'.capitalize());
// 	ao.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ao.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var navajo = L.circle([36.17, -108], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	navajo.bindPopup('navajo'.capitalize());
// 	navajo.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	navajo.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ngandi = L.circle([-13.83, 135.00], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ngandi.bindPopup('ngandi'.capitalize());
// 	ngandi.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ngandi.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var ngarla = L.circle([-20, 119], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	ngarla.bindPopup('ngarla'.capitalize());
// 	ngarla.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	ngarla.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var nyamal = L.circle([-21, 119], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	nyamal.bindPopup('nyamal'.capitalize());
// 	nyamal.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	nyamal.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var nyigina = L.circle([-18, 124.33], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	nyigina.bindPopup('nyigina'.capitalize());
// 	nyigina.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	nyigina.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var nyulnyul = L.circle([-17, 122.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	nyulnyul.bindPopup('nyulnyul'.capitalize());
// 	nyulnyul.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	nyulnyul.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var paamese = L.circle([-16.5, 168.25], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	paamese.bindPopup('paamese'.capitalize());
// 	paamese.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	paamese.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var pech = L.circle([15, -85.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	pech.bindPopup('pech'.capitalize());
// 	pech.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	pech.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var pileni = L.circle([-10.22, 166.22], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	pileni.bindPopup('pileni'.capitalize());
// 	pileni.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	pileni.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var pitta = L.circle([-22.83, 140], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	pitta.bindPopup('Pitta Pitta'.capitalize());
// 	pitta.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	pitta.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var qiang = L.circle([32, 102.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	qiang.bindPopup('qiang (northern)'.capitalize());
// 	qiang.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	qiang.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var rapanui = L.circle([-27.12, -109.37], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	rapanui.bindPopup('rapanui'.capitalize());
// 	rapanui.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	rapanui.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var rotuman = L.circle([-12.50, 177.07], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	rotuman.bindPopup('rotuman'.capitalize());
// 	rotuman.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	rotuman.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var samoan = L.circle([-13.92, -171.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	samoan.bindPopup('samoan'.capitalize());
// 	samoan.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	samoan.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var santali = L.circle([24.5, 87], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	santali.bindPopup('santali'.capitalize());
// 	santali.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	santali.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var sanuma = L.circle([4.5, -64.67], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	sanuma.bindPopup('sanumá'.capitalize());
// 	sanuma.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	sanuma.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var savosavo = L.circle([-9.13, 159.8], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	savosavo.bindPopup('savosavo'.capitalize());
// 	savosavo.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	savosavo.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var semelai = L.circle([3, 103], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	semelai.bindPopup('semelai'.capitalize());
// 	semelai.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	semelai.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var sinaugoro = L.circle([-9.83, 147.83], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	sinaugoro.bindPopup('sinaugoro'.capitalize());
// 	sinaugoro.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	sinaugoro.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var sursurunga = L.circle([-4, 152.77], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	sursurunga.bindPopup('sursurunga'.capitalize());
// 	sursurunga.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	sursurunga.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var tamashek = L.circle([20, -2], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	tamashek.bindPopup('tamashek'.capitalize());
// 	tamashek.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	tamashek.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var tangga = L.circle([-3.47, 153.2], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	tangga.bindPopup('tangga'.capitalize());
// 	tangga.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	tangga.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var thai = L.circle([16, 101], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	thai.bindPopup('thai'.capitalize());
// 	thai.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	thai.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var tokelauan = L.circle([-9, -172], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	tokelauan.bindPopup('tokelauan'.capitalize());
// 	tokelauan.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	tokelauan.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var toqabaqita = L.circle([-8.42, 160.58], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	toqabaqita.bindPopup('toqabaqita'.capitalize());
// 	toqabaqita.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	toqabaqita.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var tuvaluan = L.circle([-8.5, 179.17], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	tuvaluan.bindPopup('tuvaluan'.capitalize());
// 	tuvaluan.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	tuvaluan.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var urarina = L.circle([-4.5, -75.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	urarina.bindPopup('urarina'.capitalize());
// 	urarina.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	urarina.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var wambaya = L.circle([-18.67, 135.75], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	wambaya.bindPopup('wambaya'.capitalize());
// 	wambaya.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	wambaya.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var warembori = L.circle([-1.67, 137.58], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	warembori.bindPopup('warembori'.capitalize());
// 	warembori.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	warembori.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var warrwa = L.circle([-17.5, 123.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	warrwa.bindPopup('warrwa'.capitalize());
// 	warrwa.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	warrwa.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var greenlandic = L.circle([64, -51], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	greenlandic.bindPopup('West Greenlandic'.capitalize());
// 	greenlandic.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	greenlandic.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var yagua = L.circle([-3.5, -72], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	yagua.bindPopup('yagua'.capitalize());
// 	yagua.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	yagua.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var yanyuwa = L.circle([-16.42, 137.17], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	yanyuwa.bindPopup('yanyuwa'.capitalize());
// 	yanyuwa.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	yanyuwa.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var yawuru = L.circle([-18, 122.5], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	yawuru.bindPopup('yawuru'.capitalize());
// 	yawuru.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	yawuru.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

// 	var yimas = L.circle([-4.67, 143.55], {
// 		color: 'red',
// 		fillColor: 'red',
// 		radius: 100000
// 	}).addTo(map);
// 	yimas.bindPopup('yimas'.capitalize());
// 	yimas.on('mouseover', function (e) {
// 		this.openPopup();
// 	});
// 	yimas.on('mouseout', function (e) {
// 		this.closePopup();
// 	});

	
}

