var ingredients = [
  {name: "tofu", checked: true},
  {name: "riceVinegar", checked: false},
  {name: "soySauce", checked: false},
  {name: "sriracha", checked: false},
  {name: "riceFlour", checked: false},
  {name: "bellPepper", checked: false},
  {name: "greenOnion", checked: false}
];

  
  function validateForm()
  {
  for (var i = 0; i < ingredients.length; i++) 
  {
    var ingredient = ingredients[i];
    ingredient.checked = document.getElementById(ingredient.name).checked;
  }
  
  var missingIngredients = [];
  for (var i = 0; i < ingredients.length; i++) 
  {
    var ingredient = ingredients[i];
      if (!ingredient.checked) 
      {
        missingIngredients.push(ingredient);
      }
  }
  
  for (var i = 0; i < missingIngredients.length; i++) 
  {
    var ingredient = missingIngredients[i];
      if (ingredient.name === "tofu") 
      {
        alert("Tofu Substitution: Paneer");
      } 
      if (ingredient.name === "riceVinegar") 
      {
        alert("Rice Vinegar Substitutions: White Wine, Lemon Juice, Apple Cider Vinegar");
      } 
      if (ingredient.name === "riceFlour") 
      {
        alert("Rice Flour Substitution: Corn Starch, All Purpose Flour");
      } 
      if (ingredient.name === "greenOnion") 
      {
        alert("Green Onion Substitution: Cilantro");
      } 
  }
  
  var allChecked = ingredients.every(function(ingredient) 
  {
    return ingredient.checked;
  });
  
    if (!allChecked) 
    {
    alert("Please double check your fridge/pantry and check all boxes to proceed");
    } 
    else 
    {
      window.location.href = "tofuStep1.html";
    }
  }
  
  
