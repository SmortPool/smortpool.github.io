const def = {    
    value: 0,
    min: 0,
    max: 100,
    decimals: 2,
    gaugeWidthScale: 0.6,
    width:300,

}
var gauges = [new JustGage({
    ...def,
    id: "gauge_1", 
    label:'Gauge 1'
}),new JustGage({
    ...def,
    id: "gauge_2",
    label:'Gauge 2'
}),new JustGage({
    ...def,
    id: "gauge_3",
    label:'Gauge 3'
}),
new JustGage({
    ...def,
    id: "gauge_4",
    label: new Date().toLocaleTimeString()
})]


// 4 gauges 
// total gauge
// value + 'kw'
// time stamp
