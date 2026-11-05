var wms_layers = [];

var format_ThavinhalGramaPanchayatWardBoundary_0 = new ol.format.GeoJSON();
var features_ThavinhalGramaPanchayatWardBoundary_0 = format_ThavinhalGramaPanchayatWardBoundary_0.readFeatures(json_ThavinhalGramaPanchayatWardBoundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ThavinhalGramaPanchayatWardBoundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ThavinhalGramaPanchayatWardBoundary_0.addFeatures(features_ThavinhalGramaPanchayatWardBoundary_0);
var lyr_ThavinhalGramaPanchayatWardBoundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ThavinhalGramaPanchayatWardBoundary_0, 
                style: style_ThavinhalGramaPanchayatWardBoundary_0,
                popuplayertitle: 'Thavinhal Grama Panchayat - Ward Boundary',
                interactive: true,
    title: 'Thavinhal Grama Panchayat - Ward Boundary<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_0.png" /> Aalattil<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_1.png" /> Ambalakkolli<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_2.png" /> Chulli<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_3.png" /> Edathana<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_4.png" /> Idikkara<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_5.png" /> Irumanathoor<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_6.png" /> Kaithakolli<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_7.png" /> Karachal<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_8.png" /> Kattimoola<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_9.png" /> Kolangodu<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_10.png" /> Muthirery<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_11.png" /> Periya<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_12.png" /> Porur<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_13.png" /> Puthiyidam<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_14.png" /> Puthoor<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_15.png" /> Thalappuzha<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_16.png" /> Thavirhal<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_17.png" /> Thazheperiya<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_18.png" /> Valad<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_19.png" /> Vallithoud<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_20.png" /> Varayal<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_21.png" /> Vattoli<br />\
    <img src="styles/legend/ThavinhalGramaPanchayatWardBoundary_0_22.png" /> <br />' });

lyr_ThavinhalGramaPanchayatWardBoundary_0.setVisible(true);
var layersList = [lyr_ThavinhalGramaPanchayatWardBoundary_0];
lyr_ThavinhalGramaPanchayatWardBoundary_0.set('fieldAliases', {'admin_level': 'admin_level', 'boundary': 'boundary', 'local_authority:IN': 'local_authority:IN', 'name': 'name', 'type': 'type', 'ward': 'ward', 'id': 'id', });
lyr_ThavinhalGramaPanchayatWardBoundary_0.set('fieldImages', {'admin_level': 'TextEdit', 'boundary': 'TextEdit', 'local_authority:IN': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'ward': 'TextEdit', 'id': 'TextEdit', });
lyr_ThavinhalGramaPanchayatWardBoundary_0.set('fieldLabels', {'admin_level': 'no label', 'boundary': 'no label', 'local_authority:IN': 'no label', 'name': 'inline label - always visible', 'type': 'no label', 'ward': 'no label', 'id': 'no label', });
lyr_ThavinhalGramaPanchayatWardBoundary_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});