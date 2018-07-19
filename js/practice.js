
function strFunction() {
  var input ="";
  input=document.getElementById("userInput").innerHTML.value;
  console.log(input)
  var newStr = input.split(" ").reverse();
  document.getElementById("str").innerHTML = newStr;
}
