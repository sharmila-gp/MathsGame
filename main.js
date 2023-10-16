let score = document.getElementById("score");
let time = document.getElementById("timer");
let que = document.getElementById("question");

let clear = document.getElementById("clear");
var inputnum = document.getElementById("inputnumber");

let displayTimer;
let refunction;
var res = "";
var dig = 0;
var mark = 0;
score.innerHTML = mark;
var result = "";
var sec = 10;
let count = 0;

/* clear button*/
function clearDiv() {
  console.log(inputnum);
  inputnum.value = null;
}

function calculateResult(val) {
  inputnum.value += val;
  if (digit(inputnum.value) == dig) {
    if (inputnum.value == res) {
      mark++;
      score.innerHTML = mark;
      displayQuestion(10);
    } else {
      clearPage();
    }
  }
}

function displayQuestion(timer) {
  sec = timer;
  inputnum.value = "";
  count++;
  if (count == 11) {
    exitPage();
  }
  var x = Math.floor(Math.random() * (15 - 1)) + 1;
  var y = Math.floor(Math.random() * (15 - 1)) + 1;
  const sym = ["+", "-", "*", "%", "/"];
  let a = sym[Math.floor(Math.random() * (5 - 0)) + 0];

  if (a == "+") {
    res = add(x, y);
  } else if (a == "-") {
    res = sub(x, y);
  } else if (a == "%") {
    res = modulo(x, y);
  } else if (a == "/") {
    res = divide(x, y);
  } else if (a == "*") {
    res = multiply(x, y);
  }
  dig = digit(res);
}

function digit(res) {
  var final = res.toString();
  var d = final.length;
  return d;
}

function exitPage() {
  localStorage.setItem("question", que.innerHTML);
  localStorage.setItem("result", res);
  localStorage.setItem("sco", score.innerHTML);
  localStorage.setItem("count",count);
  window.location.href = "result.html";
}

function clearPage() {
  inputnum.value = "";
}

function add(x, y) {
  let text = "x + y";
  que.innerHTML = x + " + " + y;
  result = eval(text);
  return result;
}

function sub(x, y) {
  if (y > x) {
    x = x + y;
    y = x - y;
    x = x - y;
  }
  let text = "x - y";
  que.innerHTML = x + " - " + y;
  result = eval(text);
  return result;
}

function modulo(x, y) {
  if (y > x) {
    x = x + y;
    y = x - y;
    x = x - y;
  }
  let text = "x % y";
  que.innerHTML = x + " % " + y;
  result = eval(text);
  return result;
}

function divide(x, y) {
  if (x < y) {
    x = x + y;
    y = x - y;
    x = x - y;
  }
  if (x % y != 0) {
    let temp = x % y;
    x = x - temp;
  }
  let text = "x / y";
  que.innerHTML = x + " / " + y;
  result = eval(text);
  return result;
}

function multiply(x, y) {
  let text = "x * y";
  que.innerHTML = x + " * " + y;
  result = eval(text);
  return result;
}

function displayTime() {
  sec--;
  document.getElementById("timer").innerHTML = +sec;
  if (sec < 0) {
    // displayQuestion(10);
    // document.getElementById("timer").innerHTML = +sec;
    exitPage();
  }
}

document.getElementById("timer").innerHTML = +sec;
displayTimer = setInterval(displayTime, 1000);
displayQuestion(10);
