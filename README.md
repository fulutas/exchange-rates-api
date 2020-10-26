# exchange-rates-api
Exchange rates API is a free service for current and historical foreign exchange rates. https://exchangeratesapi.io/

Usage
Get the latest foreign exchange reference rates.

            

GET https://api.exchangeratesapi.io/latest HTTP/1.1
            

          
Get historical rates for any day since 1999.

            

GET https://api.exchangeratesapi.io/2010-01-12 HTTP/1.1
            

          
Rates are quoted against the Euro by default. Quote against a different currency by setting the base parameter in your request.

            

GET https://api.exchangeratesapi.io/latest?base=USD HTTP/1.1
            

          
Request specific exchange rates by setting the symbols parameter.

            

GET https://api.exchangeratesapi.io/latest?symbols=USD,GBP HTTP/1.1
            

          
Get historical rates for a time period.

            

GET https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01 HTTP/1.1
            

          
Limit results to specific exchange rates to save bandwidth with the symbols parameter.

            

GET https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&symbols=ILS,JPY HTTP/1.1
            

          
Quote the historical rates against a different currency.


GET https://api.exchangeratesapi.io/history?start_at=2018-01-01&end_at=2018-09-01&base=USD HTTP/1.1
            
