
// Requires: jquery

var IDEALS = class{
  constructor(CAL_DENSITY, TOTAL_FAT, SAT_FAT, TRANS_FAT, CHOLESTEROL, FIBER, SUGAR, SODIUM) {
    this.CAL_DENSITY = 1.0;   // cal/gram
    this.TOTAL_FAT = 0.15;    // % of total calories
    this.SAT_FAT = 0.05;      // % of total calories
    this.TRANS_FAT = 0;
    this.CHOLESTEROL = 0;     // mgs/day
    this.FIBER = 0.03;        // mgs/cal
    this.SUGAR = 0.05;        // % of total calories
    this.SODIUM = 1;          // mgs/cal
    this.FIBER = 0.03;        // g/cal
  }
}; var ideals = new IDEALS;

var LIMITS = class{
  constructor(MAX_CAL_DENSITY, MAX_TOTAL_FAT, MAX_SAT_FAT, MAX_TRANS_FAT, MAX_CHOLESTEROL, MAX_SODIUM, MAX_SODIUM_CONDIMENT, MAX_SUGAR, MIN_FIBER) {
    this.MAX_CAL_DENSITY = 1.5;
    this.MAX_TOTAL_FAT = 0.2;
    this.MAX_SAT_FAT = 0.07;
    this.MAX_TRANS_FAT = 0;
    this.MAX_CHOLESTEROL = 25;
    this.MAX_SODIUM = 2;
    this.MAX_SODIUM_CONDIMENT = 4;
    this.MAX_SUGAR = 0.05;
    this.MIN_FIBER = 0.02;
  }
}; var limits = new LIMITS;

var User = class{
  constructor(calories, total_fat, sat_fat, trans_fat, cholesterol, fiber, sugar, sodium) {
    this.calories = 0;      // All calculations are based on this
    this.total_fat = 0;
    this.sat_fat = 0;
    this.trans_fat = 0;
    this.cholesterol = 0;
    this.fiber = 0;
    this.sugar = 0;
    this.sodium = 0;
  }
}; var user = new User;

var Placeholders = class{
  constructor(ideal_total_fat, total_fat, ideal_sat_fat, sat_fat, ideal_sodium, sodium, ideal_fiber, fiber, ideal_sugar, sugar, positive_values, null_values) {
    this.ideal_total_fat = 0;
    this.total_fat = 0;
    this.ideal_sat_fat = 0;
    this.sat_fat = 0;
    this.ideal_sodium = 0;
    this.sodium = 0;
    this.ideal_fiber = 0;
    this.fiber = 0;
    this.ideal_sugar = 0;
    this.sugar = 0;
    this.positive_values = true;  // Used to make sure a negative number was not entered
    this.null_values = false;     // Used to make sure that a number was entered to begin with
  }
}; var placeholders = new Placeholders;



function CardGenerate(card_id, food_name, food_calorie_density, food_total_fat, food_saturated_fat, food_trans_fat, food_added_sugars, food_fiber, food_sodium, food_cholesterol, food_flours_and_grains) {
  $.get("searchcard.html", function(data) {
    var card = $('<div />', {html: data}).find('.card');
    $(card).attr("card-id", card_id);
    $(card).find("h4").text(food_name);
    SetCardItemValues(GetCardItem(card, "card-calorie-density"), food_calorie_density, ideals.CAL_DENSITY, limits.MAX_CAL_DENSITY, '%', false);
    SetCardItemValues(GetCardItem(card, "card-total-fat"), food_total_fat, ideals.TOTAL_FAT, limits.MAX_TOTAL_FAT, '%', false);
    SetCardItemValues(GetCardItem(card, "card-saturated-fat"), food_saturated_fat, ideals.SAT_FAT, limits.MAX_SAT_FAT, '%', false);
    SetCardItemValues(GetCardItem(card, "card-trans-fat"), food_trans_fat, ideals.TRANS_FAT, limits.MAX_TRANS_FAT, '%', false);
    SetCardItemValues(GetCardItem(card, "card-added-sugars"), food_added_sugars, ideals.SUGAR, limits.MAX_SUGAR, '%', false);
    SetCardItemValues(GetCardItem(card, "card-fiber"), food_fiber, ideals.FIBER, limits.MIN_FIBER, '%', true);
    SetCardItemValues(GetCardItem(card, "card-sodium"), food_sodium, ideals.SODIUM, limits.MAX_SODIUM, '%', false);
    SetCardItemValues(GetCardItem(card, "card-cholesterol"), food_cholesterol, (ideals.CHOLESTEROL/100), (limits.MAX_CHOLESTEROL/100), 'mg', false);
    $('#card-area').append(card);
  });
  }

  function GetCardItem(card_to_search, class_to_find) {
    classname = '#' + class_to_find;
    return $('<div />', {html: card_to_search}).find(classname);
  }

  function SetCardItemValues(carditem, amount, ideal, limit, unit, isFiber) {
    // "unit" is something like % or mg
    $(carditem).find('.data-amount').append((amount*100).toPrecision(3)+unit);
    $(carditem).find('.data-ideal').append((ideal*100).toPrecision(3)+unit);
    $(carditem).find('.data-limit').append((limit*100).toPrecision(3)+unit);
    SetProgressBar($(carditem).find('.progress-bar'), amount, ideal, limit, isFiber);
  }

  function SetProgressBar(progress_bar, amount, ideal, limit, isFiber) {
    var fill_val;
    var under_ideal, over_ideal;  // Bootstrap color classes
    var not_recommended = "bg-danger";
    
    switch(isFiber) {
      case(true):
        fill_val = amount/ideal;
        under_ideal = "bg-warning";
        over_ideal = "bg-success";
        break;
      default:
        fill_val = amount/limit;
        under_ideal = "bg-success";
        over_ideal = "bg-warning";
    }
    
    $(progress_bar).css("width", fill_val+"%");
    $(progress_bar).css("aria-valuenow", fill_val);
    $(progress_bar).val(fill_val+"%");

    switch(true) {
      case(fill_val < 10):
        
      default:
    }
    $(progress_bar).text(fill_val+"%");
    
    switch(true) {
      case (fill_val < ideal):
        $(progress_bar).addClass(under_ideal);
      case (fill_val > ideal):
        $(progress_bar).addClass(over_ideal);
      default:
        $(progress_bar).addClass(not_recommended);
    }
}