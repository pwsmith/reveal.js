var map2;
// var ajaxRequest;
// var plotlist;
// var plotlayers=[];

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}


function init_num_map() {
	// set up the map
	map2 = new L.Map('map2');

	// create the tile layer with correct attribution
	var osmUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
	var osmAttrib='Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors';
	var osm = new L.TileLayer(osmUrl, {minZoom: 1, maxZoom: 9, attribution: osmAttrib});		

	// start the map in South-East England
	map2.setView(new L.LatLng(0, 20),2);
	map2.addLayer(osm);

	var xhoo = L.circle([-24, 21.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	xhoo.bindPopup('!Xhoo'.capitalize());
	xhoo.on('mouseover', function (e) {
		this.openPopup();
	});
	xhoo.on('mouseout', function (e) {
		this.closePopup();
	});

	var afrikaans = L.circle([-31, 22], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	afrikaans.bindPopup('afrikaans'.capitalize());
	afrikaans.on('mouseover', function (e) {
		this.openPopup();
	});
	afrikaans.on('mouseout', function (e) {
		this.closePopup();
	});

	var mohawk = L.circle([43.5, -74.25], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	mohawk.bindPopup('Akwesansne Mohawk'.capitalize());
	mohawk.on('mouseover', function (e) {
		this.openPopup();
	});
	mohawk.on('mouseout', function (e) {
		this.closePopup();
	});

	var aleut = L.circle([54, -166], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	aleut.bindPopup('aleut'.capitalize());
	aleut.on('mouseover', function (e) {
		this.openPopup();
	});
	aleut.on('mouseout', function (e) {
		this.closePopup();
	});

	var ambai = L.circle([-1.83, 136.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	ambai.bindPopup('ambai'.capitalize());
	ambai.on('mouseover', function (e) {
		this.openPopup();
	});
	ambai.on('mouseout', function (e) {
		this.closePopup();
	});

	var awtuw = L.circle([-3.58, 142], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	awtuw.bindPopup('awtuw'.capitalize());
	awtuw.on('mouseover', function (e) {
		this.openPopup();
	});
	awtuw.on('mouseout', function (e) {
		this.closePopup();
	});

	var bardi = L.circle([-16.58, 122.92], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	bardi.bindPopup('bardi'.capitalize());
	bardi.on('mouseover', function (e) {
		this.openPopup();
	});
	bardi.on('mouseout', function (e) {
		this.closePopup();
	});

	var basque = L.circle([43, -3], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	basque.bindPopup('basque'.capitalize());
	basque.on('mouseover', function (e) {
		this.openPopup();
	});
	basque.on('mouseout', function (e) {
		this.closePopup();
	});

	var berik = L.circle([-2.25, -138.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	berik.bindPopup('berik'.capitalize());
	berik.on('mouseover', function (e) {
		this.openPopup();
	});
	berik.on('mouseout', function (e) {
		this.closePopup();
	});

	var bilua = L.circle([-7.75, 156.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	bilua.bindPopup('bilua'.capitalize());
	bilua.on('mouseover', function (e) {
		this.openPopup();
	});
	bilua.on('mouseout', function (e) {
		this.closePopup();
	});

	var biri = L.circle([-20.50, 146.50], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	biri.bindPopup('biri'.capitalize());
	biri.on('mouseover', function (e) {
		this.openPopup();
	});
	biri.on('mouseout', function (e) {
		this.closePopup();
	});

	var fijian = L.circle([-17.83, 178], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	fijian.bindPopup('Boumaa Fijian'.capitalize());
	fijian.on('mouseover', function (e) {
		this.openPopup();
	});
	fijian.on('mouseout', function (e) {
		this.closePopup();
	});

	var burushashki = L.circle([36.5, 75.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	burushashki.bindPopup('burushashki'.capitalize());
	burushashki.on('mouseover', function (e) {
		this.openPopup();
	});
	burushashki.on('mouseout', function (e) {
		this.closePopup();
	});

	var camling = L.circle([27, 86.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	camling.bindPopup('camling'.capitalize());
	camling.on('mouseover', function (e) {
		this.openPopup();
	});
	camling.on('mouseout', function (e) {
		this.closePopup();
	});

	var carib = L.circle([5.5, -56], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	carib.bindPopup('carib'.capitalize());
	carib.on('mouseover', function (e) {
		this.openPopup();
	});
	carib.on('mouseout', function (e) {
		this.closePopup();
	});

	var cavinena = L.circle([-13.33, -66.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	cavinena.bindPopup('cavineña'.capitalize());
	cavinena.on('mouseover', function (e) {
		this.openPopup();
	});
	cavinena.on('mouseout', function (e) {
		this.closePopup();
	});

	var chepang = L.circle([27.67, 84.75], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	chepang.bindPopup('chepang'.capitalize());
	chepang.on('mouseover', function (e) {
		this.openPopup();
	});
	chepang.on('mouseout', function (e) {
		this.closePopup();
	});

	var comanche = L.circle([33.5, -101.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	comanche.bindPopup('comanche'.capitalize());
	comanche.on('mouseover', function (e) {
		this.openPopup();
	});
	comanche.on('mouseout', function (e) {
		this.closePopup();
	});

	var crow = L.circle([47, -108], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	crow.bindPopup('crow'.capitalize());
	crow.on('mouseover', function (e) {
		this.openPopup();
	});
	crow.on('mouseout', function (e) {
		this.closePopup();
	});

	var dagaare = L.circle([10.50, -2.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	dagaare.bindPopup('dagaare'.capitalize());
	dagaare.on('mouseover', function (e) {
		this.openPopup();
	});
	dagaare.on('mouseout', function (e) {
		this.closePopup();
	});

	var dolakha = L.circle([27.33, 86], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	dolakha.bindPopup('dolakha Newar'.capitalize());
	dolakha.on('mouseover', function (e) {
		this.openPopup();
	});
	dolakha.on('mouseout', function (e) {
		this.closePopup();
	});

	var dumi = L.circle([27.75, 86.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	dumi.bindPopup('dumi'.capitalize());
	dumi.on('mouseover', function (e) {
		this.openPopup();
	});
	dumi.on('mouseout', function (e) {
		this.closePopup();
	});

	var dyirbal = L.circle([-17.83, 145.58], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	dyirbal.bindPopup('dyirbal'.capitalize());
	dyirbal.on('mouseover', function (e) {
		this.openPopup();
	});
	dyirbal.on('mouseout', function (e) {
		this.closePopup();
	});

	var pomo = L.circle([39, -122.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	pomo.bindPopup('Eastern Pomo'.capitalize());
	pomo.on('mouseover', function (e) {
		this.openPopup();
	});
	pomo.on('mouseout', function (e) {
		this.closePopup();
	});

	var evenki = L.circle([56, 125], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	evenki.bindPopup('evenki'.capitalize());
	evenki.on('mouseover', function (e) {
		this.openPopup();
	});
	evenki.on('mouseout', function (e) {
		this.closePopup();
	});

	var finnish = L.circle([62, 25], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	finnish.bindPopup('finnish'.capitalize());
	finnish.on('mouseover', function (e) {
		this.openPopup();
	});
	finnish.on('mouseout', function (e) {
		this.closePopup();
	});

	var enets = L.circle([67.5, 86.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	enets.bindPopup('Forest Enets'.capitalize());
	enets.on('mouseover', function (e) {
		this.openPopup();
	});
	enets.on('mouseout', function (e) {
		this.closePopup();
	});

	var gurinji = L.circle([-17.67, 130.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	gurinji.bindPopup('gurinji'.capitalize());
	gurinji.on('mouseover', function (e) {
		this.openPopup();
	});
	gurinji.on('mouseout', function (e) {
		this.closePopup();
	});

	var hawaiian = L.circle([19.58, -155.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	hawaiian.bindPopup('hawaiian'.capitalize());
	hawaiian.on('mouseover', function (e) {
		this.openPopup();
	});
	hawaiian.on('mouseout', function (e) {
		this.closePopup();
	});

	var hopi = L.circle([36, -110], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	hopi.bindPopup('hopi'.capitalize());
	hopi.on('mouseover', function (e) {
		this.openPopup();
	});
	hopi.on('mouseout', function (e) {
		this.closePopup();
	});

	var hua = L.circle([-6.33, 145.33], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	hua.bindPopup('hua'.capitalize());
	hua.on('mouseover', function (e) {
		this.openPopup();
	});
	hua.on('mouseout', function (e) {
		this.closePopup();
	});

	var isaka = L.circle([-2.83, 141.28], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	isaka.bindPopup('i\'saka'.capitalize());
	isaka.on('mouseover', function (e) {
		this.openPopup();
	});
	isaka.on('mouseout', function (e) {
		this.closePopup();
	});

	var ingush = L.circle([43.17, 45.08], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	ingush.bindPopup('ingush'.capitalize());
	ingush.on('mouseover', function (e) {
		this.openPopup();
	});
	ingush.on('mouseout', function (e) {
		this.closePopup();
	});

	var jarawara = L.circle([-7.5, -65.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	jarawara.bindPopup('jarawara'.capitalize());
	jarawara.on('mouseover', function (e) {
		this.openPopup();
	});
	jarawara.on('mouseout', function (e) {
		this.closePopup();
	});

	var jaru = L.circle([-18.75, 128], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	jaru.bindPopup('jaru'.capitalize());
	jaru.on('mouseover', function (e) {
		this.openPopup();
	});
	jaru.on('mouseout', function (e) {
		this.closePopup();
	});

	var kamas = L.circle([52, 92], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kamas.bindPopup('kamas'.capitalize());
	kamas.on('mouseover', function (e) {
		this.openPopup();
	});
	kamas.on('mouseout', function (e) {
		this.closePopup();
	});

	var kannada = L.circle([14, 76], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kannada.bindPopup('kannada'.capitalize());
	kannada.on('mouseover', function (e) {
		this.openPopup();
	});
	kannada.on('mouseout', function (e) {
		this.closePopup();
	});

	var karadjeri = L.circle([-19, 122], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	karadjeri.bindPopup('karadjeri'.capitalize());
	karadjeri.on('mouseover', function (e) {
		this.openPopup();
	});
	karadjeri.on('mouseout', function (e) {
		this.closePopup();
	});

	var kayardild = L.circle([-17.05, 139.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kayardild.bindPopup('kayardild'.capitalize());
	kayardild.on('mouseover', function (e) {
		this.openPopup();
	});
	kayardild.on('mouseout', function (e) {
		this.closePopup();
	});

	var ket = L.circle([64, 87], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	ket.bindPopup('ket'.capitalize());
	ket.on('mouseover', function (e) {
		this.openPopup();
	});
	ket.on('mouseout', function (e) {
		this.closePopup();
	});

	var kham = L.circle([28.5, 82.75], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kham.bindPopup('kham'.capitalize());
	kham.on('mouseover', function (e) {
		this.openPopup();
	});
	kham.on('mouseout', function (e) {
		this.closePopup();
	});

	var khanty = L.circle([65, 65], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	khanty.bindPopup('khanty'.capitalize());
	khanty.on('mouseover', function (e) {
		this.openPopup();
	});
	khanty.on('mouseout', function (e) {
		this.closePopup();
	});

	var kilivila = L.circle([-8.5, 151.08], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kilivila.bindPopup('kilivila'.capitalize());
	kilivila.on('mouseover', function (e) {
		this.openPopup();
	});
	kilivila.on('mouseout', function (e) {
		this.closePopup();
	});

	var koasati = L.circle([34.83, -85.17], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	koasati.bindPopup('koasati'.capitalize());
	koasati.on('mouseover', function (e) {
		this.openPopup();
	});
	koasati.on('mouseout', function (e) {
		this.closePopup();
	});

	var koromfe = L.circle([14.25, -0.92], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	koromfe.bindPopup('koromfe'.capitalize());
	koromfe.on('mouseover', function (e) {
		this.openPopup();
	});
	koromfe.on('mouseout', function (e) {
		this.closePopup();
	});

	var yalanji = L.circle([-16, 145], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	yalanji.bindPopup('Kuku-Yalanji'.capitalize());
	yalanji.on('mouseover', function (e) {
		this.openPopup();
	});
	yalanji.on('mouseout', function (e) {
		this.closePopup();
	});

	var kuna = L.circle([8, -77.33], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kuna.bindPopup('kuna (border)'.capitalize());
	kuna.on('mouseover', function (e) {
		this.openPopup();
	});
	kuna.on('mouseout', function (e) {
		this.closePopup();
	});

	var kunimaipa = L.circle([-8, 146.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kunimaipa.bindPopup('kunimaipa'.capitalize());
	kunimaipa.on('mouseover', function (e) {
		this.openPopup();
	});
	kunimaipa.on('mouseout', function (e) {
		this.closePopup();
	});

	var kwamera = L.circle([-19.58, 169.42], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kwamera.bindPopup('kwamera'.capitalize());
	kwamera.on('mouseover', function (e) {
		this.openPopup();
	});
	kwamera.on('mouseout', function (e) {
		this.closePopup();
	});

	var kwaza = L.circle([-12.58, -60.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	kwaza.bindPopup('kwaza'.capitalize());
	kwaza.on('mouseover', function (e) {
		this.openPopup();
	});
	kwaza.on('mouseout', function (e) {
		this.closePopup();
	});

	var ladakhi = L.circle([34, 78], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	ladakhi.bindPopup('ladakhi'.capitalize());
	ladakhi.on('mouseover', function (e) {
		this.openPopup();
	});
	ladakhi.on('mouseout', function (e) {
		this.closePopup();
	});

	var lavukaleve = L.circle([-9.08, 159.2], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	lavukaleve.bindPopup('lavukaleve'.capitalize());
	lavukaleve.on('mouseover', function (e) {
		this.openPopup();
	});
	lavukaleve.on('mouseout', function (e) {
		this.closePopup();
	});

	var lega = L.circle([-2.83, 27.17], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	lega.bindPopup('lega-Shabunda'.capitalize());
	lega.on('mouseover', function (e) {
		this.openPopup();
	});
	lega.on('mouseout', function (e) {
		this.closePopup();
	});

	var lele = L.circle([9.08, 15.58], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	lele.bindPopup('lele'.capitalize());
	lele.on('mouseover', function (e) {
		this.openPopup();
	});
	lele.on('mouseout', function (e) {
		this.closePopup();
	});

	var lezgian = L.circle([41.67, 47.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	lezgian.bindPopup('lezgian'.capitalize());
	lezgian.on('mouseover', function (e) {
		this.openPopup();
	});
	lezgian.on('mouseout', function (e) {
		this.closePopup();
	});

	var limbu = L.circle([27.17, 87.75], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	limbu.bindPopup('limbu'.capitalize());
	limbu.on('mouseover', function (e) {
		this.openPopup();
	});
	limbu.on('mouseout', function (e) {
		this.closePopup();
	});

	var macushi = L.circle([4, -60], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	macushi.bindPopup('macushi'.capitalize());
	macushi.on('mouseover', function (e) {
		this.openPopup();
	});
	macushi.on('mouseout', function (e) {
		this.closePopup();
	});

	var malayalam = L.circle([10, 76.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	malayalam.bindPopup('malayalam'.capitalize());
	malayalam.on('mouseover', function (e) {
		this.openPopup();
	});
	malayalam.on('mouseout', function (e) {
		this.closePopup();
	});

	var manam = L.circle([-4, 145], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	manam.bindPopup('manam'.capitalize());
	manam.on('mouseover', function (e) {
		this.openPopup();
	});
	manam.on('mouseout', function (e) {
		this.closePopup();
	});

	var maori = L.circle([-40, 176], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	maori.bindPopup('maori'.capitalize());
	maori.on('mouseover', function (e) {
		this.openPopup();
	});
	maori.on('mouseout', function (e) {
		this.closePopup();
	});

	var mapudungan = L.circle([-38, -72], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	mapudungan.bindPopup('mapudungan'.capitalize());
	mapudungan.on('mouseover', function (e) {
		this.openPopup();
	});
	mapudungan.on('mouseout', function (e) {
		this.closePopup();
	});

	var marghi = L.circle([11, 13], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	marghi.bindPopup('marghi'.capitalize());
	marghi.on('mouseover', function (e) {
		this.openPopup();
	});
	marghi.on('mouseout', function (e) {
		this.closePopup();
	});

	var martuthunira = L.circle([-20.83, 116.50], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	martuthunira.bindPopup('martuthunira'.capitalize());
	martuthunira.on('mouseover', function (e) {
		this.openPopup();
	});
	martuthunira.on('mouseout', function (e) {
		this.closePopup();
	});

	var maybrat = L.circle([-1.33, 132.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	maybrat.bindPopup('maybrat'.capitalize());
	maybrat.on('mouseover', function (e) {
		this.openPopup();
	});
	maybrat.on('mouseout', function (e) {
		this.closePopup();
	});

	var mina = L.circle([10.33, 13.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	mina.bindPopup('mina'.capitalize());
	mina.on('mouseover', function (e) {
		this.openPopup();
	});
	mina.on('mouseout', function (e) {
		this.closePopup();
	});

	var mlabri = L.circle([18.5, 101], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	mlabri.bindPopup('mlabri'.capitalize());
	mlabri.on('mouseover', function (e) {
		this.openPopup();
	});
	mlabri.on('mouseout', function (e) {
		this.closePopup();
	});

	var mokilese = L.circle([6.67, 159.75], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	mokilese.bindPopup('mokilese'.capitalize());
	mokilese.on('mouseover', function (e) {
		this.openPopup();
	});
	mokilese.on('mouseout', function (e) {
		this.closePopup();
	});

	var mongsen = L.circle([26.58, 94.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	mongsen.bindPopup('mongsen Ao'.capitalize());
	mongsen.on('mouseover', function (e) {
		this.openPopup();
	});
	mongsen.on('mouseout', function (e) {
		this.closePopup();
	});

	var navajo = L.circle([36.17, -108], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	navajo.bindPopup('navajo'.capitalize());
	navajo.on('mouseover', function (e) {
		this.openPopup();
	});
	navajo.on('mouseout', function (e) {
		this.closePopup();
	});

	var ngandi = L.circle([-13.83, 135], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	ngandi.bindPopup('ngandi'.capitalize());
	ngandi.on('mouseover', function (e) {
		this.openPopup();
	});
	ngandi.on('mouseout', function (e) {
		this.closePopup();
	});

	var ngarla = L.circle([-20, 119], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	ngarla.bindPopup('ngarla'.capitalize());
	ngarla.on('mouseover', function (e) {
		this.openPopup();
	});
	ngarla.on('mouseout', function (e) {
		this.closePopup();
	});

	var nyamal = L.circle([-21, 119], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	nyamal.bindPopup('nyamal'.capitalize());
	nyamal.on('mouseover', function (e) {
		this.openPopup();
	});
	nyamal.on('mouseout', function (e) {
		this.closePopup();
	});

	var nyigina = L.circle([-18, 124.33], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	nyigina.bindPopup('nyigina'.capitalize());
	nyigina.on('mouseover', function (e) {
		this.openPopup();
	});
	nyigina.on('mouseout', function (e) {
		this.closePopup();
	});

	var nyulnyul = L.circle([-17, 122.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	nyulnyul.bindPopup('nyulnyul'.capitalize());
	nyulnyul.on('mouseover', function (e) {
		this.openPopup();
	});
	nyulnyul.on('mouseout', function (e) {
		this.closePopup();
	});

	var nywaygi = L.circle([-19, 146.17], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	nywaygi.bindPopup('nywaygi'.capitalize());
	nywaygi.on('mouseover', function (e) {
		this.openPopup();
	});
	nywaygi.on('mouseout', function (e) {
		this.closePopup();
	});

	var paamese = L.circle([-16.5, 168.25], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	paamese.bindPopup('paamese'.capitalize());
	paamese.on('mouseover', function (e) {
		this.openPopup();
	});
	paamese.on('mouseout', function (e) {
		this.closePopup();
	});

	var pech = L.circle([15, -85.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	pech.bindPopup('pech'.capitalize());
	pech.on('mouseover', function (e) {
		this.openPopup();
	});
	pech.on('mouseout', function (e) {
		this.closePopup();
	});

	var pileni = L.circle([-10.22, 166.22], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	pileni.bindPopup('pileni'.capitalize());
	pileni.on('mouseover', function (e) {
		this.openPopup();
	});
	pileni.on('mouseout', function (e) {
		this.closePopup();
	});

	var pitta = L.circle([-22.83, 140], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	pitta.bindPopup('pitta-Pitta'.capitalize());
	pitta.on('mouseover', function (e) {
		this.openPopup();
	});
	pitta.on('mouseout', function (e) {
		this.closePopup();
	});

	var qiang = L.circle([32, 102.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	qiang.bindPopup('qiang (northern)'.capitalize());
	qiang.on('mouseover', function (e) {
		this.openPopup();
	});
	qiang.on('mouseout', function (e) {
		this.closePopup();
	});

	var rapanui = L.circle([-27.12, -109.37], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	rapanui.bindPopup('rapa nui'.capitalize());
	rapanui.on('mouseover', function (e) {
		this.openPopup();
	});
	rapanui.on('mouseout', function (e) {
		this.closePopup();
	});

	var rotuman = L.circle([-12.5, 177.07], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	rotuman.bindPopup('rotuman'.capitalize());
	rotuman.on('mouseover', function (e) {
		this.openPopup();
	});
	rotuman.on('mouseout', function (e) {
		this.closePopup();
	});

	var samoan = L.circle([-13.92, -171.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	samoan.bindPopup('samoan'.capitalize());
	samoan.on('mouseover', function (e) {
		this.openPopup();
	});
	samoan.on('mouseout', function (e) {
		this.closePopup();
	});

	var santali = L.circle([24.5, 87], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	santali.bindPopup('santali'.capitalize());
	santali.on('mouseover', function (e) {
		this.openPopup();
	});
	santali.on('mouseout', function (e) {
		this.closePopup();
	});

	var sanuma = L.circle([4.5, -64.67], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	sanuma.bindPopup('sanumá'.capitalize());
	sanuma.on('mouseover', function (e) {
		this.openPopup();
	});
	sanuma.on('mouseout', function (e) {
		this.closePopup();
	});

	var savosavo = L.circle([-9.13, 159.80], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	savosavo.bindPopup('savosavo'.capitalize());
	savosavo.on('mouseover', function (e) {
		this.openPopup();
	});
	savosavo.on('mouseout', function (e) {
		this.closePopup();
	});

	var semelai = L.circle([3, 103], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	semelai.bindPopup('semelai'.capitalize());
	semelai.on('mouseover', function (e) {
		this.openPopup();
	});
	semelai.on('mouseout', function (e) {
		this.closePopup();
	});

	var sinaugoro = L.circle([-9.83, 147.83], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	sinaugoro.bindPopup('sinaugoro'.capitalize());
	sinaugoro.on('mouseover', function (e) {
		this.openPopup();
	});
	sinaugoro.on('mouseout', function (e) {
		this.closePopup();
	});

	var sursurunga = L.circle([-4, 152.77], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	sursurunga.bindPopup('sursurunga'.capitalize());
	sursurunga.on('mouseover', function (e) {
		this.openPopup();
	});
	sursurunga.on('mouseout', function (e) {
		this.closePopup();
	});

	var tamashek = L.circle([20, -2], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	tamashek.bindPopup('tamashek'.capitalize());
	tamashek.on('mouseover', function (e) {
		this.openPopup();
	});
	tamashek.on('mouseout', function (e) {
		this.closePopup();
	});

	var tangga = L.circle([-3.47, 153.2], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	tangga.bindPopup('tangga'.capitalize());
	tangga.on('mouseover', function (e) {
		this.openPopup();
	});
	tangga.on('mouseout', function (e) {
		this.closePopup();
	});

	var thai = L.circle([16, 101], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	thai.bindPopup('thai'.capitalize());
	thai.on('mouseover', function (e) {
		this.openPopup();
	});
	thai.on('mouseout', function (e) {
		this.closePopup();
	});

	var tokelauan = L.circle([-9, -172], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	tokelauan.bindPopup('tokelauan'.capitalize());
	tokelauan.on('mouseover', function (e) {
		this.openPopup();
	});
	tokelauan.on('mouseout', function (e) {
		this.closePopup();
	});

	var toqabaqita = L.circle([-8.42, 160.58], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	toqabaqita.bindPopup('toqabaqita'.capitalize());
	toqabaqita.on('mouseover', function (e) {
		this.openPopup();
	});
	toqabaqita.on('mouseout', function (e) {
		this.closePopup();
	});

	var tuvaluan = L.circle([-8.5, 179.17], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	tuvaluan.bindPopup('tuvaluan'.capitalize());
	tuvaluan.on('mouseover', function (e) {
		this.openPopup();
	});
	tuvaluan.on('mouseout', function (e) {
		this.closePopup();
	});

	var urarina = L.circle([-4.5, -75.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	urarina.bindPopup('urarina'.capitalize());
	urarina.on('mouseover', function (e) {
		this.openPopup();
	});
	urarina.on('mouseout', function (e) {
		this.closePopup();
	});

	var wajarri = L.circle([-26, 117.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	wajarri.bindPopup('wajarri'.capitalize());
	wajarri.on('mouseover', function (e) {
		this.openPopup();
	});
	wajarri.on('mouseout', function (e) {
		this.closePopup();
	});

	var wambaya = L.circle([-18.67, 135.75], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	wambaya.bindPopup('wambaya'.capitalize());
	wambaya.on('mouseover', function (e) {
		this.openPopup();
	});
	wambaya.on('mouseout', function (e) {
		this.closePopup();
	});

	var warembori = L.circle([-1.67, 137.58], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	warembori.bindPopup('warembori'.capitalize());
	warembori.on('mouseover', function (e) {
		this.openPopup();
	});
	warembori.on('mouseout', function (e) {
		this.closePopup();
	});

	var warrwa = L.circle([-17.5, 123.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	warrwa.bindPopup('warrwa'.capitalize());
	warrwa.on('mouseover', function (e) {
		this.openPopup();
	});
	warrwa.on('mouseout', function (e) {
		this.closePopup();
	});

	var greenlandic = L.circle([64, -51], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	greenlandic.bindPopup('West Greenlandic'.capitalize());
	greenlandic.on('mouseover', function (e) {
		this.openPopup();
	});
	greenlandic.on('mouseout', function (e) {
		this.closePopup();
	});

	var yagua = L.circle([-3.5, -72], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	yagua.bindPopup('yagua'.capitalize());
	yagua.on('mouseover', function (e) {
		this.openPopup();
	});
	yagua.on('mouseout', function (e) {
		this.closePopup();
	});

	var yanyuwa = L.circle([-16.42, 137.17], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	yanyuwa.bindPopup('yanyuwa'.capitalize());
	yanyuwa.on('mouseover', function (e) {
		this.openPopup();
	});
	yanyuwa.on('mouseout', function (e) {
		this.closePopup();
	});

	var yawuru = L.circle([-18, 122.5], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	yawuru.bindPopup('yawuru'.capitalize());
	yawuru.on('mouseover', function (e) {
		this.openPopup();
	});
	yawuru.on('mouseout', function (e) {
		this.closePopup();
	});

	var yimas = L.circle([-4.67, 143.55], {
		color: 'blue',
		fillColor: 'blue',
		radius: 100000
	}).addTo(map2);
	yimas.bindPopup('yimas'.capitalize());
	yimas.on('mouseover', function (e) {
		this.openPopup();
	});
	yimas.on('mouseout', function (e) {
		this.closePopup();
	});
}

