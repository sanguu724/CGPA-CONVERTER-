function convert(){
  let val = parseFloat(document.getElementById("inputValue").value);
  let mode = document.getElementById("mode").value;

  if(isNaN(val)){
    document.getElementById("result").innerText = "Enter valid number";
    return;
  }

  let result;

  if(mode === "cgpaToMarks"){
    result = val * 9.5 * 10;
    document.getElementById("result").innerText =
      "Marks: " + result.toFixed(2);
  }
  else{
    result = val / 95;
    document.getElementById("result").innerText =
      "CGPA: " + result.toFixed(2);
  }
}

function resetAll(){
  document.getElementById("inputValue").value = "";
  document.getElementById("result").innerText = "";
}