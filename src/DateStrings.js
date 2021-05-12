// Typescript for Date and Strings
var strLib = require('my-string-library-aa');
var D = require('date-library-aa');
var data = require('../data.json');
//String Manipulation
var firstname = strLib.capitalize(data[0].first_name);
var lastname = strLib.capitalize(data[0].last_name);
console.log("Customer Name:" + " " + firstname + " " + lastname);
// Date Manipulation
var datePurchased = new D(data[0].purchased).format('M D, Y');
console.log("Date Purchased:" + " " + datePurchased);
var lastPayment = new D(data[0].lastpayment).when();
console.log("Last Payment:" + " " + lastPayment[0]);
