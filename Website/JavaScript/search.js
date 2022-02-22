
// Constants taken from scripts.js; should be imported, not copy-pasted

const IDEAL_TOTAL_FAT_MOD = 0.015;
const IDEAL_SAT_FAT_MOD = 0.005;
const IDEAL_TRANS_FAT = 0;
const IDEAL_CHOLESTORAL = 0;
const IDEAL_FIBER_MOD = 0.03;
const IDEAL_SUGAR_MOD = 0.005;

const MAX_TOTAL_FAT_MOD = 0.02;
const MAX_SAT_FAT_MOD = 0.007;
const MAX_TRANS_FAT = 0;
const MAX_CHOLESTORAL = 25;
const MAX_SODIUM_MOD = 2;
const MAX_SUGAR_MOD = 0.02;
const MIN_FIBER_MOD = 0.02;

const IDEAL_SODIUM_MOD = 1;
const IDEAL_CALORIE_DENSITY = 1.0;
const MAX_CALORIE_DENSITY = 1.5;
const MAX_SODIUM_CONDIMENTS = 4;


function CardItemSetVars(food_calorie_density, food_total_fat, food_saturated_fat, food_trans_fat, food_cholesterol, food_added_sugars, food_sodium, food_flours_and_grains, food_fiber) {
  // This is in dire need of some switch statements

  var calorieDensity = document.getElementById('card-calorie-density').getElementsByClassName('food-data');  // Get list of food-data text elements in the calorie density section
  var totalFat = document.getElementById('card-total-fat').getElementsByClassName('food-data');
  var saturatedFat = document.getElementById('card-saturated-fat').getElementsByClassName('food-data');
  var transFat = document.getElementById('card-trans-fat').getElementsByClassName('food-data');
  var cholesterol = document.getElementById('card-cholesterol').getElementsByClassName('food-data');
  var addedSugars = document.getElementById('card-added-sugars').getElementsByClassName('food-data');
  var sodium = document.getElementById('card-sodium').getElementsByClassName('food-data');
  var floursAndGrains = document.getElementById('card-flours-and-grains').getElementsByClassName('food-data');
  var fiber = document.getElementById('card-fiber').getElementsByClassName('food-data');

  var calorieDensityProgress = document.getElementById('card-calorie-density').getElementsByClassName('progress-bar')[0];  // Select progress bar
  var totalFatProgress = document.getElementById('card-total-fat').getElementsByClassName('progress-bar')[0];
  var saturatedFatProgress = document.getElementById('card-saturated-fat').getElementsByClassName('progress-bar')[0];
  var transFatProgress = document.getElementById('card-trans-fat').getElementsByClassName('progress-bar')[0];
  var cholesterolProgress = document.getElementById('card-cholesterol').getElementsByClassName('progress-bar')[0];
  var addedSugarsProgress = document.getElementById('card-added-sugars').getElementsByClassName('progress-bar')[0];
  var sodiumProgress = document.getElementById('card-sodium').getElementsByClassName('progress-bar')[0];
  var floursAndGrainsProgress = document.getElementById('card-flours-and-grains').getElementsByClassName('progress-bar')[0];
  var fiberProgress = document.getElementById('card-fiber').getElementsByClassName('progress-bar')[0];

  calorieDensity[0].textContent=(`Calorie density: ${food_calorie_density}`);
  calorieDensity[1].textContent=(`Ideal: ${IDEAL_CALORIE_DENSITY}`);
  calorieDensity[2].textContent=(`Max: ${MAX_CALORIE_DENSITY}`);

  totalFat[0].textContent=(`Total fat: ${food_total_fat}`);
  totalFat[1].textContent=(`Ideal: ${IDEAL_TOTAL_FAT_MOD}`);
  totalFat[2].textContent=(`Max: ${MAX_TOTAL_FAT_MOD}`);

  saturatedFat[0].textContent=(`Saturated fat: ${food_saturated_fat}`);
  saturatedFat[1].textContent=(`Ideal: ${IDEAL_SAT_FAT_MOD}`);
  saturatedFat[2].textContent=(`Max: ${MAX_SAT_FAT_MOD}`);

  transFat[0].textContent=(`Trans fat: ${food_trans_fat}`);
  transFat[1].textContent=(`Ideal: ${IDEAL_TRANS_FAT}`);
  transFat[2].textContent=(`Max: ${MAX_TRANS_FAT}`);
  
  cholesterol[0].textContent=(`Cholesterol: ${food_cholesterol}`);
  cholesterol[1].textContent=(`Ideal: ${IDEAL_CHOLESTORAL}`);
  cholesterol[2].textContent=(`Max: ${MAX_CHOLESTORAL}`);
  
  addedSugars[0].textContent=(`Added sugars: ${food_added_sugars}`);
  addedSugars[1].textContent=(`Ideal: ${IDEAL_SUGAR_MOD}`);
  addedSugars[2].textContent=(`Max: ${MAX_SUGAR_MOD}`);
  
  sodium[0].textContent=(`Sodium: ${food_sodium}`);
  sodium[1].textContent=(`Ideal: ${IDEAL_SODIUM_MOD}`);
  sodium[2].textContent=(`Max: ${MAX_SODIUM_MOD}`);
  
  floursAndGrains[0].textContent=(`Flours & Grains: ${food_flours_and_grains}`);
  
  fiber[0].textContent=(`Fiber: ${food_fiber}`);
  fiber[1].textContent=(`Ideal: ${IDEAL_FIBER_MOD}`);
  fiber[2].textContent=(`Min: ${MIN_FIBER_MOD}`);

  calorieDensityProgress.setAttribute('style', "width:10%;");
  calorieDensityProgress.setAttribute('aria-valuenow', "10");
  
  totalFatProgress.setAttribute('style', "width:10%;");
  totalFatProgress.setAttribute('aria-valuenow', "10");
  
  saturatedFatProgress.setAttribute('style', "width:10%;");
  saturatedFatProgress.setAttribute('aria-valuenow', "10");
  
  transFatProgress.setAttribute('style', "width:10%;");
  transFatProgress.setAttribute('aria-valuenow', "10");
  
  cholesterolProgress.setAttribute('style', "width:10%;");
  cholesterolProgress.setAttribute('aria-valuenow', "10");
  
  addedSugarsProgress.setAttribute('style', "width:10%;");
  addedSugarsProgress.setAttribute('aria-valuenow', "10");
  
  sodiumProgress.setAttribute('style', "width:10%;");
  sodiumProgress.setAttribute('aria-valuenow', "10");
  
  floursAndGrainsProgress.setAttribute('style', "width:10%;");
  floursAndGrainsProgress.setAttribute('aria-valuenow', "10");
  
  fiberProgress.setAttribute('style', "width:10%;");
  fiberProgress.setAttribute('aria-valuenow', "10");
}

function CardItemStyle() {
  var cardItems = document.getElementsByClassName('card-item');

  for (i=0; i<cardItems.length; ++i) {
    cardItems[i].setAttribute("style", "margin:0.5em;");
  }
}

function test() {
  CardItemSetVars(0, 0, 0, 0, 0, 0, 0, 0, 0);
  CardItemStyle();
}