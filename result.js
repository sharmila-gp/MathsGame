var score1 = document.getElementById("scor"); 
var result1 = document.getElementById("result"); 
var questiondiv = document.getElementById("question")

var playscore = localStorage.getItem("sco");

//var var1 = localStorage.getItem("x");
//var var2 = localStorage.getItem("y");
//var symbol = localStorage.getItem("a");
var answer = localStorage.getItem("result");
var statment = localStorage.getItem("question");
var count = localStorage.getItem("count");
console.log(count);
if(count==11){
 questiondiv.innerHTML = "Welldone...";
 document.getElementById("change").style.display = "none";
}
else{
    score1.innerHTML = playscore;
    result1.innerHTML = statment + " = " +answer;
}
