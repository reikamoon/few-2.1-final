// Phone Number
var phone = data[0].phone;
function phoneFormat(str) {
    var initformat = ("" + str);
    var replace = initformat.replace('/[^\d]/g');
    var match = replace.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }
    return null;
}
console.log("Phone Number:" + " " + phoneFormat(phone));
