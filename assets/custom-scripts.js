(function(){
  let links = document.querySelectorAll('[id$="__e872992d-fdc4-400e-bb9a-593cb783766f"] .title-link');
  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      let selector = this.attributes.href.value;
      let table = document.querySelector(selector);
      this.classList.toggle('active');
      table.classList.toggle('active');
    });
  });


  // Auto convert currency
  var isCurrencySet = localStorage.getItem('currencySet');
  if (!isCurrencySet) {
    var checkCurrencyObject = setInterval(function(){
      if (typeof DoublyGlobalCurrency !== 'undefined') {
        var country = Shopify.country;
        var countryName = 'United-States';
        var currency = DoublyGlobalCurrency.currentCurrency;
        switch (country) {
          case 'CA':
            currency = 'CAD';
            countryName = 'Canada';
            break;
          case 'GB':
            currency = 'GBP';
            countryName = 'United-Kingdom';
            break;
          case 'AU':
            currency = 'AUD';
            countryName = 'Australia';
            break;
        }
        // DoublyGlobalCurrency.currentCurrency = currency;
        // DoublyGlobalCurrency.convertAll(currency);
        $('[name=doubly-currencies]').val(currency).trigger('change');
        $('.currency-switcher .current').html('<span class="flags flags-' + countryName + '"></span> &nbsp;' + currency);
        localStorage.setItem('currencySet', true);
        clearInterval(checkCurrencyObject);
      }
    }, 1000);
  }
  

})();
