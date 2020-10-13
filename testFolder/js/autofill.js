function autofill(name, arr){
  var limit=0;
  var tempText;
  var toRet=[];
  for (i = 0; i < arr.length; i++) {
    /*check if the item starts with the same letters as the text field value:*/
    if (arr[i].substr(0, name.length).toUpperCase() == name.toUpperCase()) {
      limit++;
      tempText = "<strong>" + arr[i].substr(0, name.length) + "</strong>";
      tempText += arr[i].substr(name.length);
      tempText += "<input type='hidden' value='" + arr[i] + "'>";
      toRet.push(tempText);
      }
      if (limit >= 10) break;
    }
    return toRet;
}
module.exports = autofill;
