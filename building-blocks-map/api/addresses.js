var response = require("http/v3/response");
var query = require("db/v3/query");

var sql = "SELECT ADDRESSLINE1, CITY from SUCCESSFACTORS_USER where COUNTRY = 'Australia' and CITY like '%Sydney%'";

var addresses = query.execute(sql).map(e => {
	return {
		address: e.ADDRESSLINE1,
		city: e.CITY
	};
});

response.println(JSON.stringify(addresses));
