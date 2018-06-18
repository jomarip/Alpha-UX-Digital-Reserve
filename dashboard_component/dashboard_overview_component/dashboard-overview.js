
window.onload = function onLoad() {
  setTimeout(function(){
    
    var your_overview_options = new CanvasJS.Chart("your-overview-chart-container", {
        animationEnabled: true,  
        title:{
            text: false
        },
        axisX: {
            valueFormatString: "MMM",
            labelFontColor: "#878fa4",
            lineColor: "#eeeeee",
            gridThickness: 1,
            tickLength: 10,
            tickColor: "transparent",
            gridColor: "#eeeeee"
        },
        axisY: {
            lineColor: "#eeeeee",
            labelFontColor: "#878fa4",
            tickColor: "transparent",
            includeZero: false,
            prefix: "$",
            gridColor: "#eeeeee"
        },
        axisY2: {
            lineColor: "#eeeeee",
            labelFontColor: "transparent",
            tickColor: "transparent",
            includeZero: false,
            gridColor: "#eeeeee"
        },
        legend: {
            cursor: "pointer",
        },
        data: [{
            type: "spline",
            name: "Transaction 1",
            showInLegend: false,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,###",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 120 },
                { x: new Date(2016, 1, 1), y: 135 },
                { x: new Date(2016, 2, 1), y: 144 },
                { x: new Date(2016, 3, 1),  y: 103 },
                { x: new Date(2016, 4, 1),  y: 93 },
                { x: new Date(2016, 5, 1),  y: 129 },
                { x: new Date(2016, 6, 1), y: 143 },
                { x: new Date(2016, 7, 1), y: 156 },
                { x: new Date(2016, 8, 1),  y: 122 },
                { x: new Date(2016, 9, 1),  y: 106 },
                { x: new Date(2016, 10, 1),  y: 137 },
                { x: new Date(2016, 11, 1), y: 142 }
            ]
        },
        {
            type: "spline",
            name: "Transaction 2",
            axisYType: "secondary",
            showInLegend: false,
            xValueFormatString: "MMM YYYY",
            yValueFormatString: "$#,###",
            dataPoints: [
                { x: new Date(2016, 0, 1),  y: 19034.5 },
                { x: new Date(2016, 1, 1), y: 20015 },
                { x: new Date(2016, 2, 1), y: 27342 },
                { x: new Date(2016, 3, 1),  y: 20088 },
                { x: new Date(2016, 4, 1),  y: 20234 },
                { x: new Date(2016, 5, 1),  y: 29034 },
                { x: new Date(2016, 6, 1), y: 30487 },
                { x: new Date(2016, 7, 1), y: 32523 },
                { x: new Date(2016, 8, 1),  y: 20234 },
                { x: new Date(2016, 9, 1),  y: 27234 },
                { x: new Date(2016, 10, 1),  y: 33548 },
                { x: new Date(2016, 11, 1), y: 32534 }
            ]
        }]
    });
    your_overview_options.render();

        var network_overview_options = new CanvasJS.Chart("network-chart-container", {
            animationEnabled: true,  
            title:{
                text: false
            },
            axisX: {
                valueFormatString: "MMM",
                labelFontColor: "#878fa4",
                lineColor: "#eeeeee",
                gridThickness: 1,
                tickLength: 20,
                tickColor: "transparent",
                gridColor: "#eeeeee"
            },
            axisY: {
                lineColor: "#eeeeee",
                labelFontColor: "#878fa4",
                tickColor: "transparent",
                includeZero: false,
                prefix: "$",
                gridColor: "#eeeeee"
            },
            data: [{
                type: "spline",
                name: "Transaction",
                showInLegend: false,
                yValueFormatString: "$#,###",
                xValueFormatString: "MMMM",
                dataPoints: [
                    { x: new Date(2016, 0, 1),  y: 19034.5 },
                    { x: new Date(2016, 1, 1), y: 20015 },
                    { x: new Date(2016, 2, 1), y: 27342 },
                    { x: new Date(2016, 3, 1),  y: 20088 },
                    { x: new Date(2016, 4, 1),  y: 20234 },
                    { x: new Date(2016, 5, 1),  y: 29034 },
                    { x: new Date(2016, 6, 1), y: 30487 },
                    { x: new Date(2016, 7, 1), y: 32523 },
                    { x: new Date(2016, 8, 1),  y: 20234 },
                    { x: new Date(2016, 9, 1),  y: 27234 },
                    { x: new Date(2016, 10, 1),  y: 33548 },
                    { x: new Date(2016, 11, 1), y: 32534 }
                    ]
            }]
        });
        
        network_overview_options.render();
    }, 2000)

}
