export default class CurrencyExchager {
  static getCurrency() {
    return new Promise(function (resolve, reject){
      let request = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
}

/*function multCurrency() {
  if(parseInt(dollar) < 0) {
    $('.showResult').html("<p>Unfortunately, we cannot process debt</p>")
  }
}*/