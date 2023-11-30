var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_indeks_bahaya_banjir_1 = new ol.format.GeoJSON();
var features_indeks_bahaya_banjir_1 = format_indeks_bahaya_banjir_1.readFeatures(json_indeks_bahaya_banjir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_banjir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_banjir_1.addFeatures(features_indeks_bahaya_banjir_1);
var lyr_indeks_bahaya_banjir_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_banjir_1, 
                style: style_indeks_bahaya_banjir_1,
                interactive: true,
                title: '<img src="styles/legend/indeks_bahaya_banjir_1.png" /> indeks_bahaya_banjir'
            });
var format_indeks_bahaya_longsor_2 = new ol.format.GeoJSON();
var features_indeks_bahaya_longsor_2 = format_indeks_bahaya_longsor_2.readFeatures(json_indeks_bahaya_longsor_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_indeks_bahaya_longsor_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_indeks_bahaya_longsor_2.addFeatures(features_indeks_bahaya_longsor_2);
var lyr_indeks_bahaya_longsor_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_indeks_bahaya_longsor_2, 
                style: style_indeks_bahaya_longsor_2,
                interactive: true,
                title: '<img src="styles/legend/indeks_bahaya_longsor_2.png" /> indeks_bahaya_longsor'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_indeks_bahaya_banjir_1.setVisible(false);lyr_indeks_bahaya_longsor_2.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_indeks_bahaya_banjir_1,lyr_indeks_bahaya_longsor_2];
lyr_indeks_bahaya_banjir_1.set('fieldAliases', {'Id': 'Id', 'gridcode': 'gridcode', });
lyr_indeks_bahaya_longsor_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'gridcode': 'gridcode', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_indeks_bahaya_banjir_1.set('fieldImages', {'Id': '', 'gridcode': '', });
lyr_indeks_bahaya_longsor_2.set('fieldImages', {'OBJECTID': '', 'Id': '', 'gridcode': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_indeks_bahaya_banjir_1.set('fieldLabels', {'Id': 'inline label', 'gridcode': 'inline label', });
lyr_indeks_bahaya_longsor_2.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'gridcode': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', });
lyr_indeks_bahaya_longsor_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});