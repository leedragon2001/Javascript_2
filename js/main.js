function getEle(id) {
  return document.getElementById(id);
}
var listNumber = [];
function themSo() {
  var number = Number(getEle("inputNum").value);
  listNumber.push(number);
  getEle("showKQ1").innerHTML = listNumber.join(", ");
}
