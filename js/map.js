google.load('visualization', '1', { 'packages': ['geochart'] });
    google.setOnLoadCallback(drawMap);

    function drawMap() {
        var data = google.visualization.arrayToDataTable([
    ['State', 'Tweets'],
        ['Alabama'	,130],
        ['Arizona',	816],
        ['Arkansas',	718],
        ['California',	7405],
        ['Colorado'	,970],
        ['Connecticut',	666],
        ['Delaware'	,229],
        ['District of Columbia',624],
        ['Florida',	2609],
        ['Georgia'	,1332],
        ['Hawaii', 361],
        ['Idaho'	,216],
        ['Illinois',	2113],
        ['Indiana',	427],
        ['Iowa'	,711],
        ['Kansas',	881],
        ['Kentucky',	696],
        ['Louisiana',	1720],
        ['Maine'	,300],
        ['Montana',	140],
        ['Nebraska ',	625],
        ['Nevada'	,318],
        ['New Hampshire',	158],
        ['New Jersey'	,1780],
        ['New Mexico',	170],
        ['New York	',10997],
        ['North Carolina'	,1310],
        ['North Dakota',	402],
         ['Ohio'	,1832],
        ['Oklahoma'	,580],
        ['Oregon',	949],
        ['Maryland'	,1003],
        ['Massachusetts'	,1561],
        ['Michigan',	1303],
        ['Minnesota'	,978],
        ['Mississippi',	245],
        ['Missouri'	,849],
        ['Pennsylvania',	1724],
        ['Rhode Island'	,418],
        ['South Carolina	', 569],
        ['South Dakota'	,116],
        ['Tennessee',	1105],
        ['Texas',	5062],
        ['Utah'	,411],
        ['Vermont'	,92],
        ['Virginia'	,1450],
        ['Washington'	,2540],
        ['West Virginia',	161],
        ['Wisconsin',	809],
        ['Wyoming'	,60]
    ]);

        var options = {width: 1000, height: 500};
        options['region'] = 'US';
        options['resolution'] = 'provinces';
        options['colors'] = ['brown','gold' ];
       

        var container = document.getElementById('map_canvas');
        var geochart = new google.visualization.GeoChart(container);
        geochart.draw(data, options);
    };