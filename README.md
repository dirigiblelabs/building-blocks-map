# Building Blocks - Map

![Dirigible Version](https://img.shields.io/badge/dirigible%20version-3.x-green.svg) [![Run on Dirigible](https://img.shields.io/badge/run%20on-dirigible-blue.svg)](https://trial.ingress.pro.promart.shoot.canary.k8s-hana.ondemand.com/services/v3/web/ide-deploy-manager/?repository=https://github.com/dirigiblelabs/building-blocks-map.git&uri=/services/v3/web/ide/&branch=demojam)

### Overview:
Embeddable Google Maps building block for displaying markers on the map.

### Setup:

1. Retrieve Addresses
    - Update ``building-blocks-map/api/addresses.js``:
    
      ```javascript
      var response = require("http/v3/response");
      var query = require("db/v3/query");

      var sql = "SELECT ADDRESSLINE1, CITY from USER_ADDRESSES";

      var addresses = query.execute(sql).map(e => {
      	return {
		          address: e.ADDRESSLINE1,
    	  	    city: e.CITY
      	};
      });

      response.println(JSON.stringify(addresses));
      ```
1. Embed into existing application
    - Update ``building-blocks-map/ui/Map/extensions/view.extension``:

      ```
      Extension Point = <your-application-extension-point> // e.g: launchpad-demo-Users-view
      ```

1. Provide Google API Key
    - Update ``building-blocks-map/ui/Map/index.html``:


      ```html
      <script async defer src="https://maps.googleapis.com/maps/api/js?callback=initMap&key=YOUR-API-KEY"></script>
      ```
      
      ``Where e.g: YOUR-API-KEY = BI2aXyCk0xMMEr2LxUYjD73weVv4hQVXD2oPw4q``
