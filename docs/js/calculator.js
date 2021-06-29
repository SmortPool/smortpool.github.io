



$("#singleMonthConsumption, #priceofElectricity, #poolTemperature, #airTemperature, #airRelativeHumidity, #waterVaporPartialPressureInSaturatedHumidAir, #waterVaporPartialPressureAtGivenTemperature, #waterVaporPartialPressureAbovePool, #amountOfEvaporatingWaterVDI, #poolArea, #airFlowRate, #airDensity, #objectsAltitude").keyup(function() {
  
  // Constants and variables
  const kelvinConstant = 273.15
  const waterPhaseTransferCoef = 28 // one of the five different pool types
  const specificGasConstantForDryAir = 287.058 // Specific gas constant for dry air [J/(kg*K)]
  const specificGasConstantOfWaterVapor = 461.52 // Speficif gas constant of water vapour [J/(kg*K)]
  var singleMonthConsumption = parseInt($('#singleMonthConsumption').val())
  var priceOfElectricty = parseInt($('#priceofElectricity').val())
  var poolTemperature = parseInt($('#poolTemperature').val())
  var airTemperature = parseInt($('#airTemperature').val())
  var airRelativeHumidity = parseInt($('#airRelativeHumidity').val())
  var objectsAltitude = parseInt($('#objectsAltitude').val())
  var waterVaporPartialPressureInSaturatedHumidAir = parseInt($('#waterVaporPartialPressureInSaturatedHumidAir').val())
  var waterVaporPartialPressureAtGivenTemperature = parseInt($('#waterVaporPartialPressureAtGivenTemperature').val())
  var waterVaporPartialPressureAbovePool = parseInt($('#waterVaporPartialPressureAbovePool').val())
  var amountOfEvaporatingWaterVDI = parseInt($('#amountOfEvaporatingWaterVDI').val())
  var poolArea = parseInt($('#poolArea').val())
  var airFlowRate = parseInt($('#airFlowRate').val())
  var airDensity = parseInt($('#airDensity').val())
  

    // Price
    if($('#singleMonthConsumption').val() != "" && $('#priceofElectricity').val() != "") {
      var priceResult = singleMonthConsumption * priceOfElectricty;
      $('#priceResult').text(priceResult);
    }
    
    // Converting to Kelvin
    if($('#poolTemperature').val() != "") {
      var poolResultAsKelvin =  poolTemperature + kelvinConstant;
      $('#poolResultAsKelvin').text(poolResultAsKelvin);
    }
    
    if($('#airTemperature').val() != "") {
      var airResultAsKelvin = airTemperature + kelvinConstant;
      $('#airResultAsKelvin').text(airResultAsKelvin);
    }
    
    // Õhu tihedus [kg/l] - air Density
    if($('#objectsAltitude').val() != "" && $('#airTemperature').val() != "" && $('#airRelativeHumidity').val() != "") {
      var ambientPressure = 1013 * ( 1 - Math.pow((6.5 * objectsAltitude / 288000), 5.255))    //  Ambient pressure [hPa]
      var ambientPressureConverted = ambientPressure * 100 //  Ambient pressure [Pa]
      var saturationPressureOfIndoorAir = (611.2 * Math.exp((17.62 * airTemperature) / (243.12 + airTemperature))) / 100 // Saturation pressure of indoor air [hPa]
      var airRelativeHumidityConverted = airRelativeHumidity / 100 // from 55% to 0.55
      var specificGasConstantForIndoorAir = specificGasConstantForDryAir / (1 - airRelativeHumidityConverted * saturationPressureOfIndoorAir / ambientPressure * (1 - specificGasConstantForDryAir / specificGasConstantOfWaterVapor))   // Specific gas constant for indoor air [J/(kg*K)]
      
      var airDensity = ambientPressureConverted / (airResultAsKelvin * specificGasConstantForIndoorAir) // Air density [kg/l]
      $('#airDensity').text(airDensity);
    }

    // Ruumiohu niiskussisaldus[g/kg] - indoor Air Humidity
    if($('#airRelativeHumidity').val() != "" && $('#airTemperature').val() != "") {
      var indoorAirHumidity =  (6.112 * Math.exp((17.67 * airTemperature)/(airTemperature + 243.5)) * airRelativeHumidity * 2.1674) / (airResultAsKelvin) / airDensity 
      $('#indoorAirHumidity').text(indoorAirHumidity);
    }
    
    // Veeauru osarõhk veeauruga küllastunud niiskes õhus [Pa] - water Vapor Partial Pressure In Saturated Humid Air
    if($('#airTemperature').val() != "") {
      var waterVaporPartialPressureInSaturatedHumidAir =  Math.exp(77.345 + 0.0057 * airResultAsKelvin - 7235 / airResultAsKelvin) / Math.pow(airResultAsKelvin, 8.2)
      $('#waterVaporPartialPressureInSaturatedHumidAir').text(waterVaporPartialPressureInSaturatedHumidAir);
    }
    
    // Veeauru osarõhk antud temperatuuril [Pa] - water Vapor Partial Pressure At Given Temperature
    if($('#airTemperature').val() != "" && $('#airRelativeHumidity').val() != "") {
      var waterVaporPartialPressureAtGivenTemperature = waterVaporPartialPressureInSaturatedHumidAir * airRelativeHumidity / 100 
      $('#waterVaporPartialPressureAtGivenTemperature').text(waterVaporPartialPressureAtGivenTemperature);
    }
    
    // Veeauru osarõhk basseinpinna kohal [Pa] - water Vapor Partial Pressure Above Pool
    if($('#poolTemperature').val() != "") {
      var waterVaporPartialPressureAbovePool = Math.exp(77.345 + 0.0057 * poolResultAsKelvin - 7235 / poolResultAsKelvin) / Math.pow(poolResultAsKelvin, 8.2)
      $('#waterVaporPartialPressureAbovePool').text(waterVaporPartialPressureAbovePool);
    }

    // Aurustuva vee kogus VDI järgi kasutusajal [kg/h] - amount Of Evaporating Water VDI
    if($('#poolTemperature').val() != "" && $('#airTemperature').val() != "" && $('#poolArea').val() != "" && $('#airRelativeHumidity').val() != "") {
      var amountOfEvaporatingWaterVDI = waterPhaseTransferCoef * (waterVaporPartialPressureAbovePool - waterVaporPartialPressureAtGivenTemperature) * poolArea / (461.52 * (airResultAsKelvin + poolResultAsKelvin) / 2)
      $('#amountOfEvaporatingWaterVDI').text(amountOfEvaporatingWaterVDI);
    }

    // Õhuvooluhulk [m3/h] - air Flow Rate
    if($('#poolTemperature').val() != "" && $('#airTemperature').val() != "" && $('#poolArea').val() != "" && $('#airRelativeHumidity').val() != "") {
      var airFlowRate = amountOfEvaporatingWaterVDI * 1000 / (indoorAirHumidity - 9) / 1.16
      $('#airFlowRate').text(airFlowRate);
    }

    








  });


