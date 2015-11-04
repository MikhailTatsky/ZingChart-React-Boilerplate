var React = require('react');
var ZingChart = require('zingchart-react').core;
var LineChart =  require('zingchart-react').line;
var AreaChart =  require('zingchart-react').area;
var PieChart =  require('zingchart-react').pie;
var BarChart =  require('zingchart-react').bar;
var ScatterChart =  require('zingchart-react').scatter;

var myValues1 = [
    { text : "First Series", values : [0,1,2,2,4,6,7] },
    { text : "Second Series", values : [18,12,7,14,1,19,4] },
    { text : "Third Series", values : [0,1,12,12,4,6,17] },
    { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
]

var myValues2 = [
    { text : "First Series", values : [0,1,2,2,4,6,7] },
    { text : "Second Series", values : [18,12,7,14,1,19,4] },
    { text : "Third Series", values : [0,1,12,12,4,6,17] },
    { text : "Fourth Series", values : [18,22,17,4,1,9,4] },
    { text : "Fifth Series", values : [4,2,7,3,23,7,2] },
    { text : "Sixth Series", values : [10,6,8,2,6,3,9] },
];

var myValues3 = [
    { text : "First Series", values : [ [5,2], [8,1], [2,6], [9,1] ] },
    { text : "Second Series", values : [ [8,3], [2,8], [6,9], [3,5] ] },
    { text : "Third Series", values : [ [18,3], [22,8], [16,9], [13,5] ] },
    { text : "Fourth Series", values : [ [18,3], [12,8], [26,9], [32,5] ] },
];

var myValues4 = [
    { text : "First Slice", values : [10] },
    { text : "Second Slice", values : [20] },
    { text : "Third Slice", values : [30] },
    { text : "Fourth Slice", values : [40] },
];


////////////////////////////////////////////
//Core Component Configurations
////////////////////////////////////////////
//Used for the core component. You can utilize zingchart's full library through the core component.
var myDataSimple = {
 	type: "bar",
	series : [
        {values : [35,42,67,89,25,34,67,85]}
	]
};

var myDataComplex = {
    type: "area",
    backgroundColor: "#4DAE50",
    plot: {
        aspect: "spline",
        lineColor: "#FFF",
        backgroundColor: "#419D45",
        alphaArea: 1,
        marker: {
            visible: "false"
        },
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingTop: 0,
    },
    plotarea: {
        margin: "40 20 40 40",
    },
    tooltip: {
        visible: false,
        callout: 1,
        placement: "vertical"
    },
    crosshairX: {
        marker: {
            visible: false
        },
        lineColor: "none",
        scaleLabel: {
            visible: false
        },
        plotLabel: {
            multiple: true,
            fontSize: "10px",
            color: "#000",
            backgroundColor: "#ffffff",
            callout: true,
            alpha: 0.8,
            calloutPosition: "bottom",
            shadow: 1,
            placement: "node-top",
            borderRadius: 4,
            padding: 6,
            rules: [{
                "rule": "%p == 0",
                "visible": false
            }]
        }
    },
    scaleX: {
        lineWidth: 1,
        lineColor: "white",
        guide: {
            visible: "false"
        },
        tick: {
            lineWidth: 1,
            lineColor: "white"
        },
        item: {
            color: "white"
        }
    },
    scaleY: {
        lineWidth: 1,
        lineColor: "white",
        guide: {
            lineStyle: "solid",
            lineColor: "white"
        },
        tick: {
            lineWidth: 1,
            lineColor: "white"
        },
        item: {
            color: "white"
        }
    },
    series: [{
        values: [35, 80, 67, 89, 25, 34, 67, 85]
    }]
};

React.render(<ZingChart id="chart1" height="300" width="600" data= {myDataSimple}/>, document.getElementById('component-1'));
React.render(<ZingChart id="chart2" height="300" width="600" data= {myDataComplex}/>, document.getElementById('component-2'));

React.render(<BarChart id="chart4" height="300" width="600" series={myValues2} legend="true" theme="light" title="Light"/>, document.getElementById('component-4'));
React.render(<AreaChart id="chart5" height="300" width="600" series={myValues1} legend="true" theme="dark" title="Dark"/>, document.getElementById('component-5'));
React.render(<PieChart id="chart6" height="300" width="600" series={myValues4} legend="true" theme="light" title="Light"/>, document.getElementById('component-6'));
React.render(<ScatterChart id="chart7" height="300" width="600" series={myValues3} legend="true" theme="dark" title="Dark"/>, document.getElementById('component-7'));
