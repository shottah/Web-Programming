$(function () {
    var c = Highcharts.chart('graph', {
        chart: {
            type: 'column'
        },
        title: {
            text: '116 Carmina Breakdown'
        },
        xAxis: {
            categories: ['Poems', 'Meters', 'Epigrams']
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        series: [{
            name: 'Catullus',
            data: [63, 33, 20]
        }]
    });
});