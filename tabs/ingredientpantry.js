// Get references to the tabs
const homeTab = document.getElementById("homeTab");
const openIngredientsTab = document.getElementById("openIngredientsTab");
const recipeTab = document.getElementById("recipeTab");

// Add click event listeners to the tabs
homeTab.addEventListener("click", function () {
    // Navigate to the home page
    window.location.href = "/Users/isabellahall/Downloads/basic-template/tabs/home.html";
});

openIngredientsTab.addEventListener("click", function () {
    // Navigate to the Ingredients Pantry page
    window.location.href = "/Users/isabellahall/Downloads/basic-template/tabs/recipesearch.html";
    window.location.href = "/Users/isabellahall/Downloads/basic-template/tabs/ingredientspantry.html";
});

recipeTab.addEventListener("click", function () {
    // Navigate to the Recipe Search page
    window.location.href = "/Users/isabellahall/Downloads/basic-template/tabs/recipesearch.html";
});



window.addEventListener('load', function () {
  loadIngredients('food-list', 'pantry');
  loadIngredients('fridge-list', 'fridge');
  loadIngredients('spices-list', 'spices');
});


function addPantryItem() {
  // Get the input value
  var foodItemInput = document.getElementById("food-item");
  var foodItemValue = foodItemInput.value.trim();

  // Check if the input is not empty
  if (foodItemValue !== "") {
      // Create a new list item
      var listItem = document.createElement("li");

      // Create a div for the food item text
      var foodItemText = document.createElement("div");
      foodItemText.textContent = foodItemValue;
      foodItemText.className = "food-item-text"; // Add a class for bigger text

      // Create a delete button for the list item
      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button"; // Add a class for styling
      deleteButton.onclick = function () {
          // Remove the clicked item when the delete button is clicked
          listItem.remove();
          // Save the updated list to localStorage
          saveIngredients('food-list', 'pantry');
      };

      // Create an icon element for the delete button
      var icon = document.createElement("i");
      icon.className = "fa-regular fa-square-minus";

      // Append the icon to the delete button
      deleteButton.appendChild(icon);

      // Append the food item text and delete button to the list item
      listItem.appendChild(foodItemText);
      listItem.appendChild(deleteButton);

      // Append the new item to the food list
      var foodList = document.getElementById("food-list");
      foodList.appendChild(listItem);

      // Save the updated list to localStorage
      saveIngredients('food-list', 'pantry');

      // Clear the input field
      foodItemInput.value = "";
  }
}

function addFridgeItem() {
    var foodItemInput = document.getElementById("fridge-item");
    var foodItemValue = foodItemInput.value.trim();
  
    // Check if the input is not empty
    if (foodItemValue !== "") {
        // Create a new list item
        var listItem = document.createElement("li");
  
        // Create a div for the food item text
        var foodItemText = document.createElement("div");
        foodItemText.textContent = foodItemValue;
  
        // Create a delete button for the list item
        var deleteButton = document.createElement("button");
        deleteButton.className = "delete-button"; // Add a class for styling
        deleteButton.onclick = function() {
            // Remove the clicked item when the delete button is clicked
            listItem.remove();
        };

        // Create an icon element for the delete button
        var icon = document.createElement("i");
        icon.className = "fa-regular fa-square-minus";
  
        // Append the food item text and delete button to the list item
        listItem.appendChild(foodItemText);
        listItem.appendChild(deleteButton);
        // Append the icon to the delete button
        deleteButton.appendChild(icon);
  
        // Append the new item to the food list
        var foodList = document.getElementById("fridge-list");
        foodList.appendChild(listItem);
  
        // Clear the input field
        foodItemInput.value = "";
    }

 }

 function addFridgeItem() {
  // Get the input value
  var fridgeItemInput = document.getElementById("fridge-item");
  var fridgeItemValue = fridgeItemInput.value.trim();

  // Check if the input is not empty
  if (fridgeItemValue !== "") {
      // Create a new list item
      var listItem = document.createElement("li");

      // Create a div for the fridge item text
      var fridgeItemText = document.createElement("div");
      fridgeItemText.textContent = fridgeItemValue;
      fridgeItemText.className = "fridge-item-text"; // Add a class for bigger text

      // Create a delete button for the list item
      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button"; // Add a class for styling
      deleteButton.onclick = function () {
          // Remove the clicked item when the delete button is clicked
          listItem.remove();
          // Save the updated list to localStorage
          saveIngredients('fridge-list', 'fridge');
      };

      // Create an icon element for the delete button
      var icon = document.createElement("i");
      icon.className = "fa-regular fa-square-minus";

      // Append the icon to the delete button
      deleteButton.appendChild(icon);

      // Append the fridge item text and delete button to the list item
      listItem.appendChild(fridgeItemText);
      listItem.appendChild(deleteButton);

      // Append the new item to the fridge list
      var fridgeList = document.getElementById("fridge-list");
      fridgeList.appendChild(listItem);

      // Save the updated list to localStorage
      saveIngredients('fridge-list', 'fridge');

      // Clear the input field
      fridgeItemInput.value = "";
  }
}

function addSpiceItem() {
  // Get the input value
  var spiceItemInput = document.getElementById("spices-item");
  var spiceItemValue = spiceItemInput.value.trim();

  // Check if the input is not empty
  if (spiceItemValue !== "") {
      // Create a new list item
      var listItem = document.createElement("li");

      // Create a div for the spice item text
      var spiceItemText = document.createElement("div");
      spiceItemText.textContent = spiceItemValue;
      spiceItemText.className = "spice-item-text"; // Add a class for bigger text

      // Create a delete button for the list item
      var deleteButton = document.createElement("button");
      deleteButton.className = "delete-button"; // Add a class for styling
      deleteButton.onclick = function () {
          // Remove the clicked item when the delete button is clicked
          listItem.remove();
          // Save the updated list to localStorage
          saveIngredients('spices-list', 'spices');
      };

      // Create an icon element for the delete button
      var icon = document.createElement("i");
      icon.className = "fa-regular fa-square-minus";

      // Append the icon to the delete button
      deleteButton.appendChild(icon);

      // Append the spice item text and delete button to the list item
      listItem.appendChild(spiceItemText);
      listItem.appendChild(deleteButton);

      // Append the new item to the spice list
      var spiceList = document.getElementById("spices-list");
      spiceList.appendChild(listItem);

      // Save the updated list to localStorage
      saveIngredients('spices-list', 'spices');

      // Clear the input field
      spiceItemInput.value = "";
  }
}


// Function to save ingredients to localStorage
function saveIngredients(listId, storageKey) {
  const itemList = document.getElementById(listId);
  const items = Array.from(itemList.children).map(li => li.textContent.trim());

  // Save the items to localStorage
  localStorage.setItem(storageKey, JSON.stringify(items));
}

// Function to load ingredients from localStorage
function loadIngredients(listId, storageKey) {
  const savedItems = localStorage.getItem(storageKey);
  if (savedItems) {
      const itemList = document.getElementById(listId);
      const items = JSON.parse(savedItems);

      // Add the saved items to the list
      items.forEach(item => {
          const listItem = document.createElement("li");
          listItem.textContent = item;
          itemList.appendChild(listItem);
      });
  }
}


function clearPantryItem() {
  // Get the food list
  var foodList = document.getElementById("food-list");

  // Remove all list items from the food list
  while (foodList.firstChild) {
      foodList.removeChild(foodList.firstChild);
  }
}


function clearFridgeItem() {
  // Get the food list
  var foodList = document.getElementById("fridge-list");

  // Remove all list items from the food list
  while (foodList.firstChild) {
      foodList.removeChild(foodList.firstChild);
  }
}

function clearSpiceItem() {
  // Get the food list
  var foodList = document.getElementById("spices-list");

  // Remove all list items from the food list
  while (foodList.firstChild) {
      foodList.removeChild(foodList.firstChild);
  }
}

