var response = require("http/v3/response");
var query = require("db/v3/query");

// TODO Retrieve Addresses
var sql = "";

var addresses = query.execute(sql).map(e => {
	return {
		address: e.ADDRESSLINE1,
		city: e.CITY
	};
});

response.println(JSON.stringify(addresses));