function getEle(id) {
  return document.getElementById(id);
}
var listNumber = [];
function themSo() {
  var number = Number(getEle("inputNum").value);
  listNumber.push(number);
  getEle("showKQ").innerHTML = listNumber.join(", ");
}

function tinhTong() {
  if (listNumber.length == 0) {
    return;
  }
  var total = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      total += listNumber[i];
    }
  }
  getEle("showKQ1").innerHTML = total;
}

function demSo() {
  if (listNumber.length == 0) {
    return;
  }
  var count = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] > 0) {
      count++;
    }
  }
  getEle("showKQ2").innerHTML = count;
}

function timSoNN() {
  if (listNumber.length == 0) {
    return;
  }
  var min = listNumber[0];
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < min) {
      min = listNumber[i];
    }
  }
  getEle("showKQ3").innerHTML = min;
}

function timSoDuongNN() {
  if (listNumber.length == 0) {
    return;
  }
  var minPositive = Infinity;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] < minPositive && listNumber[i] > 0) {
      minPositive = listNumber[i];
    }
  }
  getEle("showKQ4").innerHTML = minPositive;
}

function timSoChan() {
  if (listNumber.length == 0) {
    return;
  }
  var lastEven = 0;
  for (var i = 0; i < listNumber.length; i++) {
    if (listNumber[i] % 2 == 0) {
      lastEven = listNumber[i];
    }
  }
  getEle("showKQ5").innerHTML = lastEven;
}

function doiCho() {
  var inputNum1 = Number(document.getElementById("inputNum1").value);
  var inputNum2 = Number(document.getElementById("inputNum2").value);

  if (
    isNaN(inputNum1) ||
    isNaN(inputNum2) ||
    inputNum1 < 0 ||
    inputNum1 >= listNumber.length ||
    inputNum2 < 0 ||
    inputNum2 >= listNumber.length
  ) {
    alert("Vui lòng nhập vị trí hợp lệ!");
    return;
  }

  var swapPosition = listNumber[inputNum1];
  listNumber[inputNum1] = listNumber[inputNum2];
  listNumber[inputNum2] = swapPosition;

  getEle("showKQ6").innerHTML = lastEven;
}

function sapXep() {
  listNumber.sort((a, b) => a - b);
  getEle("showKQ7").innerHTML = listNumber;
}

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function findFirstPrime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return arr[i];
    }
  }
  return -1;
}
function soNguyenTo() {
  var firstPrime = findFirstPrime(listNumber);
  getEle("showKQ8").innerHTML = firstPrime;
}
