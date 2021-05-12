// Phone Number
const phone = data[0].phone
function phoneFormat(str: string) {
  const initformat = ("" + str)
  const replace = initformat.replace('/[^\d]/g');
  const match = replace.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return "(" + match[1] + ") " + match[2] + "-" + match[3];
  }
  return null;
}
console.log(
    "Phone Number:" + " " + phoneFormat(phone)
)