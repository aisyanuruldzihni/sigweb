var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KabupatenBekasi_1 = new ol.format.GeoJSON();
var features_KabupatenBekasi_1 = format_KabupatenBekasi_1.readFeatures(json_KabupatenBekasi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenBekasi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenBekasi_1.addFeatures(features_KabupatenBekasi_1);
var lyr_KabupatenBekasi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenBekasi_1, 
                style: style_KabupatenBekasi_1,
                popuplayertitle: 'Kabupaten Bekasi',
                interactive: true,
    title: 'Kabupaten Bekasi<br />\
    <img src="styles/legend/KabupatenBekasi_1_0.png" /> 0 - 2<br />\
    <img src="styles/legend/KabupatenBekasi_1_1.png" /> 2 - 4,6<br />\
    <img src="styles/legend/KabupatenBekasi_1_2.png" /> 4,6 - 765<br />' });
var format_LokasiPenting_2 = new ol.format.GeoJSON();
var features_LokasiPenting_2 = format_LokasiPenting_2.readFeatures(json_LokasiPenting_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiPenting_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiPenting_2.addFeatures(features_LokasiPenting_2);
var lyr_LokasiPenting_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiPenting_2, 
                style: style_LokasiPenting_2,
                popuplayertitle: 'Lokasi Penting',
                interactive: true,
    title: 'Lokasi Penting<br />\
    <img src="styles/legend/LokasiPenting_2_0.png" /> Kesehatan<br />\
    <img src="styles/legend/LokasiPenting_2_1.png" /> Pemerintahan<br />\
    <img src="styles/legend/LokasiPenting_2_2.png" /> Transportasi<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_KabupatenBekasi_1.setVisible(true);lyr_LokasiPenting_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_KabupatenBekasi_1,lyr_LokasiPenting_2];
lyr_KabupatenBekasi_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'kepadatan': 'kepadatan', });
lyr_LokasiPenting_2.set('fieldAliases', {'No': 'No', 'Nama Lokasi': 'Nama Lokasi', 'Jenis': 'Jenis', 'Longitude (X)': 'Longitude (X)', 'Latitude (Y)': 'Latitude (Y)', 'field_6': 'field_6', 'field_7': 'field_7', });
lyr_KabupatenBekasi_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'kepadatan': 'TextEdit', });
lyr_LokasiPenting_2.set('fieldImages', {'No': 'Range', 'Nama Lokasi': 'TextEdit', 'Jenis': 'TextEdit', 'Longitude (X)': 'TextEdit', 'Latitude (Y)': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', });
lyr_KabupatenBekasi_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'inline label - always visible', 'WADMKD': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'UUPP': 'hidden field', 'LUAS': 'hidden field', 'kepadatan': 'inline label - always visible', });
lyr_LokasiPenting_2.set('fieldLabels', {'No': 'no label', 'Nama Lokasi': 'inline label - always visible', 'Jenis': 'inline label - always visible', 'Longitude (X)': 'no label', 'Latitude (Y)': 'no label', 'field_6': 'no label', 'field_7': 'no label', });
lyr_LokasiPenting_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});