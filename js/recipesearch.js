// // Get references to the tabs
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




function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
     dropdown.classList.toggle("show");
}

function handleCuisineCheckboxChange(cuisine, isChecked) {
    if (isChecked) {
     alert("Cuisine selected: " + cuisine);
    } else {
        alert("Cuisine unselected: " + cuisine);
        }
}

function performSearch() {
    const searchInput = document.getElementById("searchInput").value;
    alert("Performing search for: " + searchInput);
}

window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
            }
        }
    }
});
const recipes = [
    {
        name: "Spaghetti Bolognese",
        description: "Classic Italian dish with pasta and meat sauce.",
        ingredients: ["Spaghetti", "Ground beef", "Tomato sauce", "Onion", "Garlic"],
        steps: ["Boil water and cook spaghetti according to package instructions.",
        "In a pan, brown ground beef with chopped onion and garlic.",
        "Add tomato sauce and simmer until flavors meld.",
        "Serve meat sauce over cooked spaghetti."],
        cuisine: "italian"
    },
    {
        name: "Chicken Curry",
        description: "Delicious Indian curry with tender chicken and aromatic spices.",
        ingredients: ["Chicken", "Curry spices", "Tomatoes", "Coconut milk"],
        steps: ["Toast spices.",
        "Chop & season chicken breasts.",
        "Cover chicken with coconut milk to marinate a few minutes.",
        "Chop & cook onion, jalapeno, and ginger/garlic.",
        "Add lemon juice, add chicken in coconut milk, add broth.",
        "Thicken sauce & simmer. Then EAT!"],
        cuisine: "indian"
    },
    {
        name: "Tacos",
        description: "Classic Mexican dish with beef or chicken or veggies.",
        ingredients: ["Choice of meat", "Taco seasoning", "Lettuce", "Onion", "Tomato", "Cheese"],
        steps:["Cook meat in 10-inch skillet over medium heat 8 to 10 minutes, stirring occasionally, until fully cooked;",
        "drain.",
        "Stir salsa into meat. Heat to boiling, stirring constantly; reduce heat to medium-low. Cook 5 minutes, stirring occasionally.",
        "Pour beef mixture into large serving bowl.",
        "Heat taco shells as directed on package.", 
        "Serve taco shells with choice of meat, lettuce, tomato and cheese."],
        cuisine: "mexican"
    },
    {
        name: "Grilled Cheese",
        description: "Classic American Traditional comfort dish that pairs well with tomato soup.",
        ingredients: ["bread", "butter", "cheese"],
        steps:[" Butter the bread on one side and place the bread butter-side down on a hot skillet.",
        "Top with cheese, then place another slice of bread on top (butter-side up).",
        "Cook until the bottom slice is lightly browned then flip.",
        "Continue cooking until the cheese is melted."],
        cuisine: "american"
    },
    {
        name: "Quesadilla",
        description: "Classic Mexican comfort dish.",
        ingredients: ["Tortilla", "Choice of cheese", "Peppers", "Sour cream", "Choice of meat", "Rice"],
        steps:["Place half the shredded cheese, pico de gallo, and 1 pinch salt in half of a tortilla, along with any other filling items (be careful not to overstuff).",
        "Fold it over to make a half circle. Repeat with the other tortilla.",
        "Heat a stainless steel or cast iron skillet over medium high heat.",
        "Add a drizzle of olive oil to lightly coat the pan.",
        "Cook for 1 to 2 minutes per side until browned and crisp, pressing gently with a spatula while cooking.",
        "Slice into 4 or 6 wedges and serve immediately with dipping sauces." ],
        cuisine: "mexican"
    },
    {
        name: "Shrimp Pasta",
        description: "Classic Italian dish with shrimp, lemon, and garlic.",
        ingredients: ["Pasta", "Shrimp", "Garlice cloves", "Butter", "Salt", "Pepper", "Lemon zest", "Parsley", "Olive oil", "White wine"],
        steps: ["In a medium-sized saucepan, boil water and salt it.",
        "Add your pasta, and cook according to the package instructions until al dente.",
        "When the pasta is cooked, reserve 1 cup of the pasta water and drain the pasta.",
        "In a skillet over medium heat, melt the butter, and add olive oil.", 
        "Cook the shrimp for a minute, then season with salt, pepper, and Old Bay Seasoning or paprika if using.",
        "Continue to cook the shrimp until it’s pink. Do this in batches if you’re worried that you may overcook the shrimp.",
        "Remove the shrimp onto a plate and set aside.",
        "In the same pan, melt butter and add garlic, cook for 30 seconds or until it’s fragrant.",
        "Add the heavy cream, and with the spatula deglaze the pan.",
        "Add parmesan, let it melt then loosen the sauce with reserved pasta water and allow to simmer for a minute. Taste the sauce and see if more salt and pepper is needed.",
        "Toss the pasta with the sauce until it’s well coated.",
        "Add the shrimp back in to reheat it gently, garnish with freshly chopped parsley and serve."],
        cuisine: "italian"
    },
    {
        name: "Beef Stirfry",
        description: "Classic Chinese dish perfect for beginners.",
        ingredients: ["Light soy sauce", "Sugar", "Dark soy sauce", "Beef", "Vegetable oil", "Garlic clove", "Ginger", "Bok choy stalks", "Mushrooms"],
        steps: ["Cut the peppers, and onions into thin slices and finely chop the garlic cloves.",
        "Cut spring onions into 2 inch pieces.",
        "Combine sauce ingredients in a small bowl and set it aside.",
        "Stir fry the beef.",
        "Heat the large wok/pan over medium-high heat and add 3 tbsp of oil and add the marinated beef.",
        "Flatten the beef and let it sear for 2-3 minutes or until the bottom part is charred.",
        "Then flip the beef and continue to stir fry for another 1-2 minutes or until no longer pink.",
        "Then add chopped garlic and follow the crushed chillies, onions, and bell peppers.",
        "Next, pour the sauce into the wok and continue to stir fry for about 1 minute or until the sauce is glossy.",
        "Add spring onions and make a quick toss.",
        "Finish with toasted sesame seeds and serve immediately with plain rice or noodles."],
        cuisine: "chinese"
    },
    {
        name: "Kung Pao Chicken",
        description: "Classic Chinese dish with a kick of spice.",
        ingredients: ["Chicken breast", "Red chile peppers", "Green onions", "Peanuts", "Vegetable oil", "Garlic clove", "Dark soy sauce", "Sugar", "Rice wine", "Sesame oil", "Cornstarch"],
        steps: ["Gather the ingredients.",
        "Cut the chicken into 1-inch cubes.",  
        "Combine marinade ingredients, adding the cornstarch last.",
        "Marinate the chicken for 25 minutes.",
        "While the chicken is marinating, prepare the sauce and vegetables: In a small bowl, combine the dark soy sauce, rice wine, and sugar. Set aside.",  
        "Cut the chiles in half so that they are approximately the same size as the chicken cubes. Remove the seeds", 
        "Peel and finely chop the garlic.",
        "Cut the green onion on the diagonal into thirds.",
        "Heat the wok over medium-high to high heat. Add 2 tablespoons oil.",               
        "When the oil is hot, add the chicken.",
        "Stir-fry until it turns white and is 80 percent cooked. Remove from the wok.",               
        "Add 2 tablespoons oil. When the oil is hot, add the garlic and stir-fry until aromatic (about 30 seconds).",
        "Add the chile peppers and the Szechuan peppercorn if using.",
        "Stir-fry briefly until they turn dark red.",
        "Add the sauce to the wok. Bring to a boil.",                
        "Add the chicken back into the pan.",
        "Stir in the peanuts and the green onion.",               
        "Remove from the heat and stir in the sesame oil. Serve hot."],
        cuisine: "chinese"
    },
    {
        name: "Chicken Tikka Masala",
        description: "Classic creamy Indian dish for a hearty meal.",
        ingredients: ["Chicken breast", "Salt", "Pepper", "Coriander", "Lime juice", "Garlic clove", "Vegetable oil", "Chili powder", "Red onion", "Ground tumeric", "Ground cumin", "Plain yogurt", "Tomato puree"], 
        steps: ["Gather the ingredients", 
        "In a large stainless steel or glass bowl place the chicken with the ginger, garlic, salt, pepper, chopped coriander, lime juice and zest with 1 tbsp of the oil.",
        "Stir then cover with a clean cloth, leave to one side for 30 minutes.",
        "After 30 mins, heat one tbsp of the oil in a large frying pan or wok add the chicken and cook for 8 to 10 minutes until browned all over.",
        "Remove the chicken from the pan and put to one side.",
        "In the same pan heat the remaining oil and gently cook the onion and chili powder for 5 minutes.",
        "Add the turmeric and ground cumin, stir and cook for another minute.",
        "Stir in the cream and gently simmer for 5 minutes.",
        "Add the chicken and simmer for another 5 minutes.",
        "Add the tomato puree, and stir.",
        "Finally, add the lemon juice.",
        "Cook for one minute more then serve garnished with fresh coriander. Boiled rice, warm naan bread or chapatis are delicious served alongside."],
        cuisine: "indian"
    },
    {
        name: "Mac & Cheese",
        description: "Classic cheesy American Traditional dish for a indlugent meal or side.",
        ingredients: ["Elbow macaroni", "Evaporated milk", "Whole milk", "Butter", "Sharp cheddar cheese", "Salt", "Pepper", "Paprika"],
        steps: ["Preheat the oven to 325 degrees and lightly grease a square baking dish.",
        "Cook the macaroni to al dente, according to package instructions.",
        "Drain and set aside.",
        "Melt the butter in a medium saucepan over medium heat.",
        "Blend in the flour, salt, and pepper. Cook for 2 minutes.",
        "Slowly add the milk and half and half, stirring constantly, and cook over medium-low heat for a few minutes until the mixture has thickened like the consistency of gravy.",
        "Remove from heat and stir in 1 cup shredded cheese, stirring just until melted.",
        "Add the cooked macaroni noodles and toss to coat.",
        "Pour half or the pasta mixture into the prepared baking dish.",
        "Sprinkle ½ cup cheese over the top. Add remaining pasta and sprinkle with remaining cheese.",
        "Bake for 15-20 minutes or until cheese is melted on top."],
        cuisine: "american"
    },
    
];

const filters = {
    cuisine: [],
    ingredient: []
};

window.addEventListener('load', function () {
    updateIngredientCheckbox();
    // Other code...
});

function updateFilter(filterType, checkbox) {
    const value = checkbox.value;
    const isChecked = checkbox.checked;

    if (filterType === 'cuisine') {
        updateCuisineFilter(value, isChecked);
    } else if (filterType === 'ingredient') {
        updateIngredientFilter(value, isChecked);
    }

    performSearch();
}

function updateIngredientFilter(ingredient, isChecked) {
    const ingredientFilters = filters['ingredient'];

    if (isChecked) {
        ingredientFilters.push(ingredient);
    } else {
        const index = ingredientFilters.indexOf(ingredient);
        if (index !== -1) {
            ingredientFilters.splice(index, 1);
        }
    }
}




function updateCuisineFilter(cuisine, isChecked) {
    const cuisineFilters = filters['cuisine'];

    if (isChecked) {
        cuisineFilters.push(cuisine);
    } else {
        const index = cuisineFilters.indexOf(cuisine);
        if (index !== -1) {
            cuisineFilters.splice(index, 1);
        }
    }

    // Remove recipes with unchecked cuisine from the screen
    const recipesToRemove = recipes.filter(recipe => !cuisineFilters.includes(recipe.cuisine));
    recipesToRemove.forEach(recipe => {
        const recipeCard = document.getElementById(`recipe-${recipe.name}`);
        if (recipeCard) {
            recipeCard.remove();
        }
    });
}

        
function performSearch() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();

    const matchingRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(searchInput);
        const filterMatches = Object.entries(filters).every(([filterType, values]) => {
            if (values.length === 0) {
                return true; // No filter applied
            }
            if (filterType === 'ingredient') {
                // Check if any ingredient in the recipe is in the selected ingredient pantry
                const pantryIngredients = getIngredientPantry();
                return recipe.ingredients.some(ingredient => pantryIngredients.includes(ingredient.toLowerCase()));
            }
            return values.includes(recipe[filterType]);
        });
        return nameMatch && filterMatches;
    });

    const recipeContainer = document.getElementById("recipe-container");
    recipeContainer.innerHTML = ""; // Clear previous content

    if (matchingRecipes.length > 0) {
        matchingRecipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.className = "recipe-card";
            recipeCard.innerHTML = `
                <h2>${recipe.name}</h2>
                <p>${recipe.description}</p>
                <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
                <h3>Steps:</h3>
                <ol>
                    ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
                </ol>
            `;
            recipeContainer.appendChild(recipeCard);
        });
    } else {
        recipeContainer.innerHTML = "<p>No matching recipes found.</p>";
    }
}

function getIngredientPantry() {
    const ingredientPantry = localStorage.getItem('pantry'); // Assuming you're storing the pantry in local storage

    if (ingredientPantry) {
        return JSON.parse(ingredientPantry);
    } else {
        return [];
    }
}


window.addEventListener('click', function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});


function clearFilters() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    performSearch();
}

function updateRecipes() {
const searchInput = document.getElementById("searchInput").value.toLowerCase();

const matchingRecipes = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(searchInput);
    const filterMatches = Object.entries(filters).every(([filterType, values]) => {
        if (values.length === 0) {
            return true; // No filter applied
        }
        if (filterType === 'ingredient') {
            // Check if any ingredient in the recipe is in the selected ingredient pantry
            return recipe.ingredients.some(ingredient => values.includes(ingredient));
        }
        return values.includes(recipe[filterType]);
    });
    return nameMatch && filterMatches;
});

const recipeContainer = document.getElementById("recipe-container");
recipeContainer.innerHTML = ""; // Clear previous content

if (matchingRecipes.length > 0) {
    matchingRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";
        recipeCard.innerHTML = `
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
            <h3>Steps:</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>
        `;
        recipeContainer.appendChild(recipeCard);
    });
} else {
    recipeContainer.innerHTML = "<p>No matching recipes found.</p>";
}

// Hide the recipe container if there are no matching recipes
recipeContainer.style.display = matchingRecipes.length > 0 ? "block" : "none";
}

// Update the checkbox dynamically based on the ingredients in the pantry
function updateIngredientCheckbox() {
    const pantryCheckbox = document.getElementById('pantryCheckbox');
    const ingredientPantry = localStorage.getItem('pantry'); // Assuming you're storing the pantry in local storage

    if (ingredientPantry) {
        const ingredients = JSON.parse(ingredientPantry);
        pantryCheckbox.value = ingredients.join(',');
    } else {
        pantryCheckbox.value = '';
    }
}