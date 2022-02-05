const hummus = function (factor) {
  // hummus has a function called "ingredient"
  const ingredient = function (amount, unit, name) {
    //ingredient can access factor argument.
    //ingredientAmount determined by factor and defined ingredient arguments inside hummus function
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  //ingredient function created inside hummus method. also they  called inside hummus method too.
  //DRY principle. ingredient function is a helper method  of hummus function.
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};

hummus(10);
// ingredient(1, "can", "chickpeas"); NOT DEFINED OUTSIDE OF hummus.
