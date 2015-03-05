google.load("visualization", "1.1", {packages:["bar"]});
      google.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Movie', 'Tweets'],
          ['Birdman', 6802],
          ['The Theory of Everything', 5163],
          ['The Grand Budapest Hotel', 3619],
          ['Selma', 3552],
          ['Whiplash', 2994],
          ['American Sniper', 2777],
          ['Boyhood', 2593],
          ['The Imitation Game', 2051]
        ]);

        var options = {
          chart: {
            title: 'Tweets on Best Picture Nominees',
            subtitle: 'Estimated total tweets based on common movie nicknames',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }



