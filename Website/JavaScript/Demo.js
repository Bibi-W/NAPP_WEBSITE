function do_calc(){
  var num = Number(document.getElementById("in").value);

  if(num >= 0) {
    document.getElementById("res1").innerHTML = "Max gram of Fat = " + (num * 0.02) + "g <br>";
    document.getElementById("res2").innerHTML = "Max gram of Added Sugar = " + (num * 0.02) + "g <br>";
    document.getElementById("res3").innerHTML = "Max milligram of Sodium = " + num + "mg <br>";
    document.getElementById("res4").innerHTML = "Ideal minimum amount of Fiber = " + (num * 0.03) + "g <br>";
  } else {
    alert("Input is invalid. Try again!");
  }
}
