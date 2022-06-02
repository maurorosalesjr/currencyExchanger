import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyExchager  from './currency.js';


function clearFields() {
  $('#dollar').val("");
  $('.showErrors').text("");
  $('.showResult').append("");
}

$(document).ready(function() {
  $('#currencyExchange').click(function(){
    let dollar = $(`#dollar`).val("");
    clearFields();
    let promise = CurrencyExchager.getCurrency(dollar);

    
  })
});