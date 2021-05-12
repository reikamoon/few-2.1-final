// Typescript for Date and Strings

const strLib = require('my-string-library-aa');
const D = require('date-library-aa');
const data = require('../data.json');
//String Manipulation
const firstname = strLib.capitalize(data[0].first_name);
const lastname = strLib.capitalize(data[0].last_name);
console.log(
    "Customer Name:" + " " + firstname + " " + lastname);

// Date Manipulation
const datePurchased = new D(data[0].purchased).format('M D, Y')
console.log(
    "Date Purchased:" + " " + datePurchased
)
const lastPayment = new D(data[0].lastpayment).when();
console.log(
    "Last Payment:" + " " + lastPayment[0]
)