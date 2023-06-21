const express = require('express');
const app = express();
const PORT = 3000;

let foodArray = [
    {name: "Pizza", country: "Italy", main_ingredients: ["Dough", "Tomato Sauce", "Cheese", "Toppings"]},
    {name: "Taco", country: "Mexico", main_ingredients: ["Tortilla", "Meat", "Cheese", "Salsa"]},
    {name: "Sushi", country: "Japan", main_ingredients: ["Sushi Rice", "Nori", "Fish", "Vegetables"]},
    {name: "Poutine", country: "Canada", main_ingredients: ["Fries", "Cheese Curds", "Gravy"]},
    {name: "Hamburger", country: "USA", main_ingredients: ["Ground Beef", "Bun", "Lettuce", "Tomato", "Onion", "Pickles"]},
    {name: "Croissant", country: "France", main_ingredients: ["Flour", "Butter", "Yeast", "Milk"]},
    {name: "Paella", country: "Spain", main_ingredients: ["Rice", "Saffron", "Chicken", "Seafood"]},
    {name: "Bratwurst", country: "Germany", main_ingredients: ["Pork", "Beef", "Veal"]},
    {name: "Borscht", country: "Ukraine", main_ingredients: ["Beetroot", "Cabbage", "Potatoes", "Carrots"]},
    {name: "Feijoada", country: "Brazil", main_ingredients: ["Black Beans", "Pork", "Beef", "Sausage"]},
    {name: "Pho", country: "Vietnam", main_ingredients: ["Rice Noodles", "Beef", "Herbs", "Broth"]},
    {name: "Peking Duck", country: "China", main_ingredients: ["Duck", "Hoisin Sauce", "Cucumbers", "Scallions"]},
    {name: "Butter Chicken", country: "India", main_ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"]},
    {name: "Baklava", country: "Turkey", main_ingredients: ["Phyllo Dough", "Nuts", "Honey", "Sugar"]},
    {name: "Fish and Chips", country: "England", main_ingredients: ["Fish", "Potatoes", "Flour", "Oil"]},
    {name: "Empanada", country: "Argentina", main_ingredients: ["Dough", "Meat", "Olives", "Onions"]},
    {name: "Pierogi", country: "Poland", main_ingredients: ["Dough", "Potato", "Cheese", "Onions"]},
    {name: "Goulash", country: "Hungary", main_ingredients: ["Beef", "Onions", "Peppers", "Paprika"]},
    {name: "Moussaka", country: "Greece", main_ingredients: ["Eggplant", "Potato", "Minced Meat", "Béchamel Sauce"]},
    {name: "Bobotie", country: "South Africa", main_ingredients: ["Minced Meat", "Bread Crumbs", "Milk", "Curry Powder", "Jam"]},
    {name: "Ramen", country: "Japan", main_ingredients: ["Noodles", "Broth", "Pork", "Scallions"]},
    {name: "Kimchi", country: "Korea", main_ingredients: ["Napa Cabbage", "Korean Radish", "Chili Pepper Flakes", "Garlic"]},
    {name: "Fajitas", country: "Mexico", main_ingredients: ["Beef", "Bell Peppers", "Onions", "Tortillas"]},
    {name: "Couscous", country: "Morocco", main_ingredients: ["Couscous", "Vegetables", "Meat"]},
    {name: "Dim Sum", country: "China", main_ingredients: ["Flour", "Various Fillings"]},
    {name: "Biryani", country: "India", main_ingredients: ["Rice", "Spices", "Meat"]},
    {name: "Pavlova", country: "Australia", main_ingredients: ["Egg Whites", "Caster Sugar", "Fruit"]},
    {name: "Poi", country: "Hawaii", main_ingredients: ["Taro"]},
    {name: "Gyro", country: "Greece", main_ingredients: ["Pita", "Meat", "Sauce", "Tomatoes", "Onions"]},
    {name: "Stroopwafel", country: "Netherlands", main_ingredients: ["Butter", "Brown Sugar", "Flour", "Syrup"]},
    {name: "Pot-au-feu", country: "France", main_ingredients: ["Beef", "Vegetables"]},
    {name: "Rosti", country: "Switzerland", main_ingredients: ["Potatoes"]},
    {name: "Shawarma", country: "Middle East", main_ingredients: ["Meat", "Tahini", "Garlic", "Vegetables"]},
    {name: "Haggis", country: "Scotland", main_ingredients: ["Sheep's Pluck", "Oatmeal", "Onions", "Spices"]},
    {name: "Rendang", country: "Indonesia", main_ingredients: ["Meat", "Coconut Milk", "Spices"]},
    {name: "Ceviche", country: "Peru", main_ingredients: ["Raw Fish", "Citrus Juices", "Onions", "Chili Peppers"]},
    {name: "Pad Thai", country: "Thailand", main_ingredients: ["Rice Noodles", "Eggs", "Tofu", "Bean Sprouts", "Peanuts"]},
    {name: "Balut", country: "Philippines", main_ingredients: ["Fertilized Duck Egg"]},
    {name: "Wiener Schnitzel", country: "Austria", main_ingredients: ["Veal", "Breadcrumbs", "Eggs"]},
    {name: "Dolma", country: "Turkey", main_ingredients: ["Grape Leaves", "Rice", "Onions", "Spices"]},
    {name: "Irish Stew", country: "Ireland", main_ingredients: ["Lamb", "Potatoes", "Carrots", "Onions"]},
    {name: "Belgian Waffles", country: "Belgium", main_ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Yeast"]},
    {name: "Cabbage Rolls", country: "Romania", main_ingredients: ["Cabbage", "Minced Meat", "Rice", "Onions"]},
    {name: "Falafel", country: "Middle East", main_ingredients: ["Chickpeas", "Onion", "Herbs", "Spices"]},
    {name: "Arepa", country: "Venezuela", main_ingredients: ["Cornmeal", "Water", "Salt"]},
    {name: "Chicken Tikka Masala", country: "United Kingdom", main_ingredients: ["Chicken", "Yogurt", "Spices", "Tomato Sauce"]},
    {name: "Halo-Halo", country: "Philippines", main_ingredients: ["Shaved Ice", "Evaporated Milk", "Various Fruits", "Sweet Preserves", "Leche Flan"]},
    {name: "Pelmeni", country: "Russia", main_ingredients: ["Dough", "Meat"]},
    {name: "Acaraje", country: "Brazil", main_ingredients: ["Black-eyed Peas", "Shrimp", "Onion", "Palm Oil"]},
    {name: "Banh Mi", country: "Vietnam", main_ingredients: ["Bread", "Meat", "Pickled Vegetables"]},
    {name: "Kare-Kare", country: "Philippines", main_ingredients: ["Oxtail", "Vegetables", "Peanut Sauce"]},
    {name: "Tagine", country: "Morocco", main_ingredients: ["Meat", "Vegetables", "Dried Fruits", "Spices"]},
    {name: "Peking Duck", country: "China", main_ingredients: ["Duck", "Cucumbers", "Scallions", "Hoisin Sauce"]},
    {name: "Bulgogi", country: "Korea", main_ingredients: ["Beef", "Soy Sauce", "Sugar", "Garlic", "Sesame Oil"]},
    {name: "Jerk Chicken", country: "Jamaica", main_ingredients: ["Chicken", "Jerk Spice"]},
    {name: "Vada Pav", country: "India", main_ingredients: ["Bun", "Potato Fritter", "Chutney"]},
    {name: "Saltenas", country: "Bolivia", main_ingredients: ["Dough", "Meat", "Vegetables", "Sweet-Spicy Sauce"]},
    {name: "Ackee and Saltfish", country: "Jamaica", main_ingredients: ["Saltfish", "Ackee", "Onion", "Tomatoes", "Spices"]},
    {name: "Pastel de Nata", country: "Portugal", main_ingredients: ["Egg Yolks", "Sugar", "Milk", "Flour"]},
    {name: "Pastrami on Rye", country: "USA", main_ingredients: ["Rye Bread", "Pastrami", "Mustard"]},
    {name: "Fufu", country: "Ghana", main_ingredients: ["Cassava", "Green Plantains", "Water"]},
    {name: "Pupusas", country: "El Salvador", main_ingredients: ["Cornmeal", "Cheese", "Beans", "Meat"]},
    {name: "Churrasco", country: "Brazil", main_ingredients: ["Beef", "Garlic", "Salt"]},
    {name: "Lobster Roll", country: "USA", main_ingredients: ["Lobster", "Mayonnaise", "Bun", "Butter"]},
    {name: "Souvlaki", country: "Greece", main_ingredients: ["Pork", "Olive Oil", "Lemon", "Garlic", "Oregano"]},
    {name: "Dumplings", country: "China", main_ingredients: ["Dough", "Pork", "Cabbage"]},
    {name: "Chimichanga", country: "Mexico", main_ingredients: ["Tortilla", "Rice", "Beans", "Cheese", "Meat"]},
    {name: "Currywurst", country: "Germany", main_ingredients: ["Bratwurst", "Curry Ketchup"]},
    {name: "Gazpacho", country: "Spain", main_ingredients: ["Tomatoes", "Cucumbers", "Bell Peppers", "Garlic", "Olive Oil", "Vinegar"]},
    {name: "Panettone", country: "Italy", main_ingredients: ["Flour", "Eggs", "Butter", "Sugar", "Candied Fruits"]},
    {name: "Black Forest Cake", country: "Germany", main_ingredients: ["Chocolate Cake", "Cherries", "Whipped Cream", "Kirsch"]},
    {name: "Banh Xeo", country: "Vietnam", main_ingredients: ["Rice Flour", "Turmeric", "Pork", "Shrimp", "Bean Sprouts"]},
    {name: "Chili Crab", country: "Singapore", main_ingredients: ["Mud Crabs", "Chilli Sauce"]},
    {name: "Satay", country: "Malaysia", main_ingredients: ["Meat", "Peanut Sauce"]},
    {name: "Moules Frites", country: "Belgium", main_ingredients: ["Mussels", "Fries"]},
    {name: "Bakso", country: "Indonesia", main_ingredients: ["Beef", "Beef Broth", "Noodles", "Vegetables"]},
    {name: "Pierogi", country: "Poland", main_ingredients: ["Dough", "Potato", "Cheese", "Onions"]},
    {name: "Tteokbokki", country: "Korea", main_ingredients: ["Rice Cakes", "Fish Cakes", "Spicy Sauce"]},
    {name: "Sauerbraten", country: "Germany", main_ingredients: ["Beef", "Vinegar", "Sugar", "Spices"]},
    {name: "Antipasto", country: "Italy", main_ingredients: ["Assorted Meats", "Cheeses", "Olives", "Artichokes", "Pickled Vegetables"]},
    {name: "Mole Poblano", country: "Mexico", main_ingredients: ["Chicken", "Mole Sauce"]},
    {name: "Mango Sticky Rice", country: "Thailand", main_ingredients: ["Sticky Rice", "Coconut Milk", "Mango"]},
    {name: "Escargot", country: "France", main_ingredients: ["Snails", "Garlic", "Butter"]},
    {name: "Tiramisu", country: "Italy", main_ingredients: ["Ladyfingers", "Mascarpone", "Coffee", "Egg Yolks", "Sugar"]},
    {name: "Lamington", country: "Australia", main_ingredients: ["Sponge Cake", "Chocolate Icing", "Desiccated Coconut"]},
    {name: "Fish Tacos", country: "Mexico", main_ingredients: ["Fish", "Tortillas", "Slaw", "Cream Sauce"]},
    {name: "Danish", country: "Denmark", main_ingredients: ["Puff Pastry", "Fruit", "Custard"]},
    {name: "Goulash", country: "Hungary", main_ingredients: ["Beef", "Onions", "Paprika", "Tomatoes"]},
    {name: "Kebab", country: "Turkey", main_ingredients: ["Meat", "Vegetables", "Flatbread", "Yogurt Sauce"]},
    {name: "Huevos Rancheros", country: "Mexico", main_ingredients: ["Eggs", "Tortillas", "Beans", "Ranchero Sauce"]},
    {name: "Pastrami Sandwich", country: "USA", main_ingredients: ["Pastrami", "Rye Bread", "Mustard"]},
    {name: "Pav Bhaji", country: "India", main_ingredients: ["Mixed Vegetables", "Butter", "Bread", "Spices"]},
    {name: "Cannoli", country: "Italy", main_ingredients: ["Fried Pastry Dough", "Sweet Ricotta"]},
    {name: "Nasi Goreng", country: "Indonesia", main_ingredients: ["Fried Rice", "Prawn", "Chicken", "Egg"]},
    {name: "Tacos al Pastor", country: "Mexico", main_ingredients: ["Pork", "Tortillas", "Pineapple", "Coriander", "Onions"]},
    {name: "Sauerbraten", country: "Germany", main_ingredients: ["Pot Roast", "Vinegar", "Sugar"]},
    {name: "Fondue", country: "Switzerland", main_ingredients: ["Cheese", "Wine", "Garlic", "Bread"]},
    {name: "Vindaloo", country: "India", main_ingredients: ["Pork", "Vinegar", "Chilies", "Spices"]},
    {name: "Eggs Benedict", country: "USA", main_ingredients: ["English Muffin", "Ham", "Poached Eggs", "Hollandaise Sauce"]},
    {name: "Baklava", country: "Turkey", main_ingredients: ["Phyllo Dough", "Nuts", "Honey"]},
    {name: "Katsu Curry", country: "Japan", main_ingredients: ["Pork", "Rice", "Curry Sauce"]},
    {name: "Tom Yum Soup", country: "Thailand", main_ingredients: ["Shrimp", "Lemongrass", "Chilies", "Lime Leaves", "Fish Sauce"]},
    {name: "Empanada", country: "Spain", main_ingredients: ["Dough", "Meat", "Cheese", "Vegetables"]},
    {name: "Poutine", country: "Canada", main_ingredients: ["Fries", "Cheese Curds", "Gravy"]}
  ];

app.get('/', (req, res) => {
  res.json(foodArray);
});

app.get('/random', (req, res) => {
  let randomFood = foodArray[Math.floor(Math.random()*foodArray.length)];
  res.json(randomFood);
});

app.get('/search/:name', (req, res) => {
  let searchTerm = req.params.name;
  let searchResult = foodArray.find(food => food.name.toLowerCase() === searchTerm.toLowerCase());
  
  if (!searchResult) {
    res.status(404).json({error: "Food not found"});
  } else {
    res.json(searchResult);
  }
});

app.get('/country/:country', (req, res) => {
  let searchTerm = req.params.country;
  let searchResult = foodArray.filter(food => food.country.toLowerCase() === searchTerm.toLowerCase());
  
  if (searchResult.length === 0) {
    res.status(404).json({error: "No food found from this country"});
  } else {
    res.json(searchResult);
  }
});

app.get('/ingredient/:ingredient', (req, res) => {
  const ingredient = req.params.ingredient.toLowerCase();

  const result = foodArray.filter(food => 
    food.main_ingredients.map(item => item.toLowerCase()).includes(ingredient)
  );
  
  if(result.length) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: `No foods found with ingredient: ${ingredient}` });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
