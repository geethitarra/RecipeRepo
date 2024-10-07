

var ingredients = [
  {name: "tomatoes", checked: false},
  {name: "onion", checked: false},
  {name: "jalapeno", checked: false},
  {name: "cilantro", checked: false},
  {name: "tortillas", checked: false},
  {name: "oil", checked: false},
  {name: "salt", checked: false}
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
          if (ingredient.name === "tortillas") 
          {
            alert("Corn Tortilla Substitutions: White Tortilla, Pre-Made Tortilla Chips, Carrot Chips, Kale Chips");
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
      window.location.href = "salsaSteps.html";
    }
  }
  
  
