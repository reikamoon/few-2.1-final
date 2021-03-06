// FEW 2.1 FINAL
// Solve the problems below. Feel free to use the libraries you have written in class!
// The stretch challenge is to use TypeScript to solve the problems. It's listed last below but I'm mentioning it here since if you want to try this challenge you may want to start with TypeScript from the beginning.
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

// Phone Number
const phone = data[0].phone
function phoneFormat(str) {
  const replace = ("" + str).replace(/[^\d]/g);
  const match = replace.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}
console.log(
    "Phone Number:" + " " + phoneFormat(phone)
)


module.exports = {
    phoneFormat
}