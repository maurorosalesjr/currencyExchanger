import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import CurrencyExchager  from './currency.js';


function clearFields() {
  $('#dollar').val();
  $('.showErrors').text("");
  $('.showResult').html("");
}


$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let dollar = $('#dollar').val();
    clearFields();
    let promise = CurrencyExchager.getCurrency(dollar);

    promise.then(function(response) {
      const body = JSON.parse(response);
      if(parseInt(dollar) < 0) {
        $('.showResult').html("<p>Unfortunately, we cannot process debt at this time.</p>");
      } else {
        $('.showResult').html(parseInt(dollar) + "<p> US Dollars gets YOU: </p>" + "\n" + Math.round(`${body.conversion_rates.JPY}` * parseInt(dollar) * 100) / 100 + "<p> Japanese Yen,</p>" + "\n" + Math.round(`${body.conversion_rates.EUR}` * parseInt(dollar) * 100) / 100 + "<p>Euros,</p>" + "\n" + Math.round(`${body.conversion_rates.MXN}` * parseInt(dollar) * 100) / 100 + "<p>Mexican Pesos,</p>" + "\n" + Math.round(`${body.conversion_rates.UAH}` * parseInt(dollar) * 100) / 100 + "<p>Ukrainian Hyrvnia</p>" + Math.round(`${body.conversion_rates.CAD}` * parseInt(dollar) * 100 ) / 100 + "<p>Canadian Dollars</p>" + "\n" );
      }
    }, function(error) {
      $('.showErrors').text(`there was an error processing your request: ${error}`);
    });
  });
});