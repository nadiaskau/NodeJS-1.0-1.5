const citites = require("cities"); 
const parameters = require("./parameters.js");

var myCity = citites.zip_lookup("10016");
console.log(myCity);

console.log( parameters.paramVal() );
console.log(parameters.paramVal(1) );
