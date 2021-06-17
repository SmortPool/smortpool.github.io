$("#singleMonthConsumption, #priceofElectricity").keyup(function() {
    if($('#singleMonthConsumption').val() != "" && $('#priceofElectricity').val() != "") {
      var result = parseInt($('#singleMonthConsumption').val()) + parseInt($('#priceofElectricity').val());
      $('#results').text(result);
    }
  });