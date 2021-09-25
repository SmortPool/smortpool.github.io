
let canvas = document.getElementById("myChart").getContext("2d");

let myLineChart = new Chart(canvas, {
    options: {scales: {
        yAxes: [{
            ticks: {
                fontSize: 40
            }
        }]
    },
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20
                    }
                }
            }
        }
    },
    type: "line",
    data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [
            {
                label: "Electricity consumption MWH",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [20, 20, 30, 40, 50, 20, 50, 90, 60, 70, 10, 110]
            },
            {
                label: "Secondary consumption MWH",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,12,19,0.4)",
                borderColor: "rgba(75,12,19,1)",
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,12,19,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 10,
                pointHoverBackgroundColor: "rgba(75,12,19,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,
                data: [50, 70, 110, 120, 40, 60, 50, 40, 30, 60, 20, 10]
            }

        ]

    },
    

});

$("#janElectricityConsumption, #febElectricityConsumption, #marElectricityConsumption, #aprElectricityConsumption, #mayElectricityConsumption, #junElectricityConsumption, #julElectricityConsumption, #augElectricityConsumption, #sepElectricityConsumption, #octElectricityConsumption, #novElectricityConsumption, #decElectricityConsumption").keyup(function() {
    
    if ($('#janElectricityConsumption').val() != "") {
        var janElectricityConsumption = parseInt($('#janElectricityConsumption').val());
        myLineChart.data.datasets[0].data[0] = janElectricityConsumption;
        myLineChart.update();
    }
    if ($('#febElectricityConsumption').val() != "") {
        var febElectricityConsumption = parseInt($('#febElectricityConsumption').val());
        myLineChart.data.datasets[0].data[1] = febElectricityConsumption;
        myLineChart.update();
    }
    if ($('#marElectricityConsumption').val() != "") {
        var marElectricityConsumption = parseInt($('#marElectricityConsumption').val());
        myLineChart.data.datasets[0].data[2] = marElectricityConsumption;
        myLineChart.update();
    }
    if ($('#aprElectricityConsumption').val() != "") {
        var aprElectricityConsumption = parseInt($('#aprElectricityConsumption').val());
        myLineChart.data.datasets[0].data[3] = aprElectricityConsumption;
        myLineChart.update();
    }
    if ($('#mayElectricityConsumption').val() != "") {
        var mayElectricityConsumption = parseInt($('#mayElectricityConsumption').val());
        myLineChart.data.datasets[0].data[4] = mayElectricityConsumption;
        myLineChart.update();
    }
    if ($('#junElectricityConsumption').val() != "") {
        var junElectricityConsumption = parseInt($('#junElectricityConsumption').val());
        myLineChart.data.datasets[0].data[5] = junElectricityConsumption;
        myLineChart.update();
    }
    if ($('#julElectricityConsumption').val() != "") {
        var julElectricityConsumption = parseInt($('#julElectricityConsumption').val());
        myLineChart.data.datasets[0].data[6] = julElectricityConsumption;
        myLineChart.update();
    }
    if ($('#augElectricityConsumption').val() != "") {
        var augElectricityConsumption = parseInt($('#augElectricityConsumption').val());
        myLineChart.data.datasets[0].data[7] = augElectricityConsumption;
        myLineChart.update();
    }
    if ($('#sepElectricityConsumption').val() != "") {
        var sepElectricityConsumption = parseInt($('#sepElectricityConsumption').val());
        myLineChart.data.datasets[0].data[8] = sepElectricityConsumption;
        myLineChart.update();
    }
    if ($('#octElectricityConsumption').val() != "") {
        var octElectricityConsumption = parseInt($('#octElectricityConsumption').val());
        myLineChart.data.datasets[0].data[9] = octElectricityConsumption;
        myLineChart.update();
    }
    if ($('#novElectricityConsumption').val() != "") {
        var novElectricityConsumption = parseInt($('#novElectricityConsumption').val());
        myLineChart.data.datasets[0].data[10] = novElectricityConsumption;
        myLineChart.update();
    }
    if ($('#decElectricityConsumption').val() != "") {
        var decElectricityConsumption = parseInt($('#decElectricityConsumption').val());
        myLineChart.data.datasets[0].data[11] = decElectricityConsumption;
        myLineChart.update();
    }
    
});
    
$("#janSecondaryConsumption, #febSecondaryConsumption, #marSecondaryConsumption, #aprSecondaryConsumption, #maySecondaryConsumption, #junSecondaryConsumption, #julSecondaryConsumption, #augSecondaryConsumption, #sepSecondaryConsumption, #octSecondaryConsumption, #novSecondaryConsumption, #decSecondaryConsumption").keyup(function() {
    
    if ($('#janSecondaryConsumption').val() != "") {
        var janSecondaryConsumption = parseInt($('#janSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[0] = janSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#febSecondaryConsumption').val() != "") {
        var febSecondaryConsumption = parseInt($('#febSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[1] = febSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#marSecondaryConsumption').val() != "") {
        var marSecondaryConsumption = parseInt($('#marSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[2] = marSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#aprSecondaryConsumption').val() != "") {
        var aprSecondaryConsumption = parseInt($('#aprSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[3] = aprSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#maySecondaryConsumption').val() != "") {
        var maySecondaryConsumption = parseInt($('#maySecondaryConsumption').val());
        myLineChart.data.datasets[1].data[4] = maySecondaryConsumption;
        myLineChart.update();
    }
    if ($('#junSecondaryConsumption').val() != "") {
        var junSecondaryConsumption = parseInt($('#junSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[5] = junSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#julSecondaryConsumption').val() != "") {
        var julSecondaryConsumption = parseInt($('#julSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[6] = julSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#augSecondaryConsumption').val() != "") {
        var augSecondaryConsumption = parseInt($('#augSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[7] = augSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#sepSecondaryConsumption').val() != "") {
        var sepSecondaryConsumption = parseInt($('#sepSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[8] = sepSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#octSecondaryConsumption').val() != "") {
        var octSecondaryConsumption = parseInt($('#octSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[9] = octSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#novSecondaryConsumption').val() != "") {
        var novSecondaryConsumption = parseInt($('#novSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[10] = novSecondaryConsumption;
        myLineChart.update();
    }
    if ($('#decSecondaryConsumption').val() != "") {
        var decSecondaryConsumption = parseInt($('#decSecondaryConsumption').val());
        myLineChart.data.datasets[1].data[11] = decSecondaryConsumption;
        myLineChart.update();
    }
    
});


