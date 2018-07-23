
var strInput;
var reverseInput;
var reverseOutput;
var FactInput;
var FactOutput;
var PerfInput;
var PerfOutput="some output";

function strFunction() {
  strInput=document.getElementById("userInput").value;
  strOutput=reverseFunction(strInput);
  console.log(strOutput);
  // document.getElementById("str").innerHTML = input.split(" ").reverse();
  // console.log(input);
  // document.getElementById("str").innerHTML = reverseFunction(input);
  // console.log(reverseFunction("reverse me"));

}
function simpleReverseFunction(){
  var input
}
function reverseFunction(reverseInput) {
  var reverseInput= document.getElementById("reverseTestInput").value;
  var reverseOutput=reverseInput.split(" ");
  var tempArray=[];
    for(i=reverseOutput.length-1; i>=0; i--){
      tempArray.push(reverseOutput[i]);
    }
  reverseOutput=tempArray;
  document.getElementById("reverseTest").innerHTML = reverseOutput;
  return reverseOutput;
}

function factorialFunction() {
  FactInput=parseInt(document.getElementById("FactInput").value);
  document.getElementById("YourNumber").innerHTML = FactInput;
  if(FactInput >=1 && FactInput <= 18){
    FactOutput=1;
    for(var i=FactInput; i>=1; i--){
      FactOutput=FactOutput*(i);
    }
  } else {
    alert("Enter a number between 1 and 18");
  }
  document.getElementById("FactOutput").innerHTML = FactOutput;
}

function PerfectSquareFunction(){
  PerfInput = parseInt(document.getElementById("PerfectSquareInput").value);
  if(PerfInput==0){
    document.getElementById("hide").innerHTML = "You can't use 0";
    var hide = document.getElementById("SquareFactor");
    hide.style.display="none";
  } else {
    // for(){}
  }
  // for(i=PerfInput; i>0)
  document.getElementById("SquareFactor").innerHTML = PerfOutput;

}
