function redirect()
{
  var textValue =  document.querySelector('input[name="food_choice"]:checked').value;
  const form = document.querySelector('form');

    if (textValue == "chips") 
      {
      document.location.href = 'salsaIngredients.html';
      } 
      else if (textValue == "muffin") 
      {
      document.location.href = 'bananaIngredients.html';
      }
      else if (textValue == "tofu") 
      {
      document.location.href = 'tofuIngredients.html';
      }
      else
      {
       document.location.href = 'cucumberIngredients.html';
      }
}