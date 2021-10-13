function do_calc(){
  var num = Number(document.getElementById("in").value);

  if(num >= 0) {
    document.getElementById("res1").innerHTML = num + "cal/lb";
    document.getElementById("res2").innerHTML = Math.round(num * 0.02) + "g";
    document.getElementById("res3").innerHTML = Math.round(num * 0.005) + "g";
    document.getElementById("res4").innerHTML = 0 + "g";
    document.getElementById("res5").innerHTML = 25 + "mg/day";
    document.getElementById("res6").innerHTML = Math.round(num * 0.02) + "g";
    document.getElementById("res7").innerHTML = num + "mg";
    document.getElementById("res8").innerHTML = Math.round(num * 0.03) + "g";
  } else {
    alert("Input is invalid. Try again!");
    document.getElementById("in").value = 0;
  }
}
