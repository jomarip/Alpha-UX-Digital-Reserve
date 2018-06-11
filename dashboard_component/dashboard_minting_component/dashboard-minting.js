window.onload = function onLoad() {


    var percent = 73;



    var ratio=percent/100;

    var pie=d3.layout.pie()
            .value(function(d){return d})
            .sort(null);

    var w=140,h=97;

    var outerRadius=(w/2)-10;
    var innerRadius=50;


    var color = ['#f5f6fa','#3f9dfe','#888888'];

    var colorOld='#F00';
    var colorNew='#0F0';

    var arc=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0)
            .endAngle(Math.PI);


    var arcLine=d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius)
            .startAngle(0);

    var svg=d3.select("#minting-progress-container")
            .append("svg")
            .attr({
                width:w,
                height:h,
                class:'shadow'
            }).append('g')
            .attr({
                transform:'translate('+w/2+','+67+')'
            });



    var path=svg.append('path')
            .attr({
                d:arc,
                transform:'rotate(-90)'
            }).attr({
                'stroke-width':"0",
                stroke:"transparent"
            })
            .style({
                fill:color[0]
            });


    var pathForeground=svg.append('path')
            .datum({endAngle:0})
            .attr({
                d:arcLine,
                transform:'rotate(-90)'
            })
            .style({
                fill: function (d,i) {
                    return color[1];
                }
            });


    var middleCount=svg.append('text')
            .datum(0)
            .text(function(d){
                return d;
            })
            .attr({
                class:'middleText',
                'text-anchor':'middle',
                dy:0,
                dx:2
            })
            .style({
                fill:d3.rgb('#333'),
                'font-size':'36px',
                'font-family':'AvertaBold'


            });

    var oldValue=0;
    var arcTween=function(transition, newValue,oldValue) {
        transition.attrTween("d", function (d) {
            var interpolate = d3.interpolate(d.endAngle, ((Math.PI))*(newValue/100));

            var interpolateCount = d3.interpolate(oldValue, newValue);

            return function (t) {
                d.endAngle = interpolate(t);
                middleCount.text(Math.floor(interpolateCount(t))+'%');

                return arcLine(d);
            };
        });
    };


    pathForeground.transition()
            .duration(750)
            .ease('cubic')
            .call(arcTween,percent,oldValue);
        };