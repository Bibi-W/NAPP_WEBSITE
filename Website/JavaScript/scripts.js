/*
These constants are used for both calculation and/or comparison
of the ideal/acceptable amounts of each nutrition facts.
*/
const GRAMS_IN_POUND = 453.592;
const IDEAL_CAL_DENSITY = 600;
const IDEAL_TOTAL_FAT_MOD = 0.015;
const IDEAL_SAT_FAT_MOD = 0.005;
const IDEAL_TRANS_FAT = 0;
const IDEAL_CHOLESTORAL = 0;
const IDEAL_FIBER_MOD = 0.03;
const IDEAL_SUGAR_MOD = 0.005;
const MAX_CAL_DENSITY = 800;
const MAX_TOTAL_FAT_MOD = 0.02;
const MAX_SAT_FAT_MOD = 0.007;
const MAX_TRANS_FAT = 0;
const MAX_CHOLESTORAL = 25;
const MAX_SODIUM_MOD = 2;
const MAX_SUGAR_MOD = 0.02;
const MIN_FIBER_MOD = 0.02;

/*
These variables will be the placeholders for calculated data
*/
var cal_density = 0;
var ideal_total_fat = 0;
var total_fat = 0;
var ideal_sat_fat = 0;
var sat_fat = 0;
var ideal_sodium = 0;
var sodium = 0;
var ideal_fiber = 0;
var fiber = 0;
var ideal_sugar = 0;
var sugar = 0;

/*
  These variables store the user's inputs.
*/
var user_grams = 0;
var user_total_fat = 0;
var user_saturated_fat = 0;
var user_trans_fat = 0;
var user_cholesterol = 0;
var user_sodium = 0;
var user_fiber = 0;
var user_sugar = 0;


/*
  The 'calories' variable is of most importance; it
  serves as the base of every calculation done within the
  program.
*/
var calories = 0;

/*
  The following two variables are used as a status check;
  should one of these two fail, the program won't run the
  calculation function, and instead ask the user to complete or
  refill the form.
*/
var positive_values = true;
var null_values = true;

function send_data() {

  let elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    if(elements[i].value >= 0 && elements[i].value != '') {
      null_values = false;
      console.log(elements[i].value);

      switch (elements[i].name) {
        case "Grams":
          user_grams = elements[i].value;
          console.log("Grams per serving: " + user_grams);
          break;
        case "Calories":
          calories = elements[i].value;
          console.log("Calories per serving: " + calories);
          break;
        case "Total Fat":
          user_total_fat = elements[i].value;
          console.log("Total Fat per serving: " + user_total_fat);
          break;
        case "Saturated Fat":
          user_saturated_fat = elements[i].value;
          console.log("Saturated Fat per serving: " + user_saturated_fat);
          break;
        case "Trans Fat":
          user_trans_fat = elements[i].value;
          console.log("Trans Fat per serving: " + user_trans_fat);
          break;
        case "Cholesterol":
          user_cholesterol = elements[i].value;
          console.log("Cholesterol per serving: " + user_cholesterol);
          break;
        case "Sodium":
          user_sodium = elements[i].value;
          console.log("Sodium per serving: " + user_sodium);
          break;
        case "Dietary Fiber":
          user_fiber = elements[i].value;
          console.log("Dietary Fiber per serving: " + user_fiber);
          break;
        case "Added Sugar":
          user_sugar = elements[i].value;
          console.log("Added Sugar per serving: " + user_sugar);
          break;
      }
    }
    else if (elements[i].value != ''){
      null_values = false;
      positive_values = false;
      alert("Invalid input in the " + elements[i].name + " field. Try again!")
    }
    else {
      null_values = true;
      positive_values = false;
    }
  }
  if(positive_values == true) {
    calc_data();
  }
  else if (null_values == true) {
    alert("Form is incomplete. Please fill out form and try again!");
  }
}


function calc_data() {
  cal_density = Math.round((calories / user_grams) * GRAMS_IN_POUND);
  ideal_total_fat = calories * IDEAL_SAT_FAT_MOD;
  total_fat = calories * MAX_TOTAL_FAT_MOD;
  ideal_sat_fat = calories * IDEAL_SAT_FAT_MOD;
  sat_fat = calories * MAX_SAT_FAT_MOD;
  ideal_sodium = calories * MAX_SODIUM_MOD;
  ideal_fiber = calories * IDEAL_FIBER_MOD;
  fiber = calories * MIN_FIBER_MOD;
  ideal_sugar = calories * IDEAL_SUGAR_MOD;
  sugar = calories * MAX_SUGAR_MOD;

  display_results();
}

function display_results() {
  document.getElementById("B2").innerHTML= user_grams;
  document.getElementById("B3").innerHTML = calories;
  document.getElementById("B4").innerHTML = cal_density;
  document.getElementById("C4").innerHTML = IDEAL_CAL_DENSITY;
  document.getElementById("D4").innerHTML = MAX_CAL_DENSITY;
  document.getElementById("E4").innerHTML = compare_data(cal_density, IDEAL_CAL_DENSITY, MAX_CAL_DENSITY);
  document.getElementById("B5").innerHTML = user_total_fat;
  document.getElementById("C5").innerHTML = ideal_total_fat;
  document.getElementById("D5").innerHTML = total_fat;
  document.getElementById("E5").innerHTML = compare_data(user_total_fat, ideal_total_fat, total_fat);
  document.getElementById("B6").innerHTML = user_saturated_fat;
  document.getElementById("C6").innerHTML = ideal_sat_fat;
  document.getElementById("D6").innerHTML = sat_fat;
  document.getElementById("E6").innerHTML = compare_data(user_saturated_fat, ideal_sat_fat, sat_fat);
  document.getElementById("B7").innerHTML = user_trans_fat;
  document.getElementById("C7").innerHTML = IDEAL_TRANS_FAT;
  document.getElementById("D7").innerHTML = MAX_TRANS_FAT;
  document.getElementById("E7").innerHTML = compare_data(user_trans_fat, IDEAL_TRANS_FAT, MAX_TRANS_FAT);
  document.getElementById("B8").innerHTML = user_cholesterol;
  document.getElementById("C8").innerHTML = IDEAL_CHOLESTORAL;
  document.getElementById("D8").innerHTML = MAX_CHOLESTORAL;
  document.getElementById("E8").innerHTML = compare_data(user_cholesterol, IDEAL_CHOLESTORAL, MAX_CHOLESTORAL);
  document.getElementById("B9").innerHTML = user_sodium;
  document.getElementById("C9").innerHTML = ideal_sodium;
  document.getElementById("D9").innerHTML = sodium;
  document.getElementById("E9").innerHTML = compare_data(user_sodium, ideal_sodium, sodium);
  document.getElementById("B10").innerHTML = user_fiber;
  document.getElementById("C10").innerHTML = ideal_fiber;
  document.getElementById("D10").innerHTML = fiber;
  document.getElementById("E10").innerHTML = compare_data(user_fiber, ideal_fiber, fiber);
  document.getElementById("B11").innerHTML = user_sugar;
  document.getElementById("C11").innerHTML = ideal_sugar;
  document.getElementById("D11").innerHTML = sugar;
  document.getElementById("E11").innerHTML = compare_data(user_sugar, ideal_sugar, sugar);

}

function compare_data(user, best, acceptable) {
  if(user <= best) {
    return "Ideal";
  }
  else if (user > best && user <= acceptable) {
    return "Acceptable";
  }
  else {
    return "Not Acceptable";
  }
}

function clear_data() {
  var elements = document.getElementsByTagName("input");
  for(var i = 0; i < elements.length; i++) {
    elements[i].value = '';
  }
}
