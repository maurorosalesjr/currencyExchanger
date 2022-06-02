import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/styles.css';
import CurrencyExchager  from './currency.js';


function clearFields() {
  $('#dollar').val("");
  $('.showErrors').text("");
  $('.showResult').html("");
}


$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let dollar = $(`#dollar`).val("");
    clearFields();
    let promise = CurrencyExchager.getCurrency(dollar);

    promise.then(function(response) {
      const body = JSON.parse(response);
      $('.showResult').html(`${body.conversion_rates.USD}` + "<p> US Dollars gets YOU: </p>" + "\n" + `${body.conversion_rates.JPY}` + "<p> Japanese Yen,</p>" + "\n" + `${body.conversion_rates.EUR}` + "<p>Euros,</p>" + "\n" + `${body.conversion_rates.MXN}` + "<p>Mexican Pesos,</p>" + "\n" + `${body.conversion_rates.UAH}` + "<p>Ukrainian Hyrvnia</p>" +`${body.conversion_rates.CAD}` + "<p>Canadian Dollars</p>" + "\n" );
    }, function(error) {
      $('.showErrors').text(`there was an error processing your request: ${error}`);
    });
  });
});