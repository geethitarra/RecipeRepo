var ingredients = [
  {name: "cucumbers", checked: false},
  {name: "salt", checked: false},
  {name: "sugar", checked: false},
  {name: "garlic", checked: false},
  {name: "riceVinegar", checked: false},
  {name: "sesameOil", checked: false},
  {name: "chiliOil", checked: false}
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
      if (ingredient.name === "riceVinegar") 
      {
        alert("Rice Vinegar Substitutions: White Wine, Lemon Juice, Apple Cider Vinegar");
      } 
      else if (ingredient.name === "sesameOil") 
      {
        alert("Sesame Oil Substitutions: Olive Oil, Sunflower Oil, Avocado Oil");
      } 
      else if (ingredient.name === "chiliOil") 
      {
        alert("Chili Oil Substitution: Simmer chili flakes on medium heat with Canola Oil (5 mins)");
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
      window.location.href = "cucumberStep1.html";
    }
  }