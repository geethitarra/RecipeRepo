var ingredients = [
  {name: "bananas", checked: false},
  {name: "sugar", checked: false},
  {name: "egg", checked: false},
  {name: "butter", checked: false},
  {name: "blueberries", checked: false},
  {name: "soda", checked: false},
  {name: "powder", checked: false},
  {name: "salt", checked: false},
  {name: "flour", checked: false}
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
      if (ingredient.name === "egg") 
      {
        alert("Egg Substitutions: Apple Sauce, Plain Yogurt");
      } 
      else if (ingredient.name === "powder") 
      {
        alert("Baking Powder Substitutions: Baking Soda and Buttermilk Mixture, Baking Soda and Lemon Juice Mixture");
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
        window.location.href = "muffinSteps.html";
      }
  }
  
 