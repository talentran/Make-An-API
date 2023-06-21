const express = require('express');
const app = express();
const PORT = 3000;

let foodArray = [
    {name: "Pizza", country: "Italy"},
    {name: "Taco", country: "Mexico"},
    {name: "Sushi", country: "Japan"},
    {name: "Poutine", country: "Canada"},
    {name: "Hamburger", country: "USA"},
    {name: "Croissant", country: "France"},
    {name: "Paella", country: "Spain"},
    {name: "Bratwurst", country: "Germany"},
    {name: "Borscht", country: "Ukraine"},
    {name: "Feijoada", country: "Brazil"},
    {name: "Pho", country: "Vietnam"},
    {name: "Peking Duck", country: "China"},
    {name: "Butter Chicken", country: "India"},
    {name: "Baklava", country: "Turkey"},
    {name: "Fish and Chips", country: "England"},
    {name: "Empanada", country: "Argentina"},
    {name: "Pierogi", country: "Poland"},
    {name: "Goulash", country: "Hungary"},
    {name: "Moussaka", country: "Greece"},
    {name: "Bobotie", country: "South Africa"},
    {name: "Ramen", country: "Japan"},
    {name: "Kimchi", country: "Korea"},
    {name: "Fajitas", country: "Mexico"},
    {name: "Couscous", country: "Morocco"},
    {name: "Dim Sum", country: "China"},
    {name: "Biryani", country: "India"},
    {name: "Pavlova", country: "Australia"},
    {name: "Poi", country: "Hawaii"},
    {name: "Gyro", country: "Greece"},
    {name: "Stroopwafel", country: "Netherlands"},
    {name: "Pot-au-feu", country: "France"},
    {name: "Rosti", country: "Switzerland"},
    {name: "Shawarma", country: "Middle East"},
    {name: "Haggis", country: "Scotland"},
    {name: "Rendang", country: "Indonesia"},
    {name: "Ceviche", country: "Peru"},
    {name: "Pad Thai", country: "Thailand"},
    {name: "Balut", country: "Philippines"},
    {name: "Wiener Schnitzel", country: "Austria"},
    {name: "Dolma", country: "Turkey"},
    {name: "Irish Stew", country: "Ireland"},
    {name: "Belgian Waffles", country: "Belgium"},
    {name: "Cabbage Rolls", country: "Romania"},
    {name: "Falafel", country: "Middle East"},
    {name: "Arepa", country: "Venezuela"},
    {name: "Chicken Tikka Masala", country: "United Kingdom"},
    {name: "Halo-Halo", country: "Philippines"},
    {name: "Pelmeni", country: "Russia"},
    {name: "Acaraje", country: "Brazil"},
    {name: "Banh Mi", country: "Vietnam"},
    {name: "Kare-Kare", country: "Philippines"},
    {name: "Tagine", country: "Morocco"},
    {name: "Peking Duck", country: "China"},
    {name: "Bulgogi", country: "Korea"},
    {name: "Jerk Chicken", country: "Jamaica"},
    {name: "Vada Pav", country: "India"},
    {name: "Saltenas", country: "Bolivia"},
    {name: "Ackee and Saltfish", country: "Jamaica"},
    {name: "Pastel de Nata", country: "Portugal"},
    {name: "Pastrami on Rye", country: "USA"},
    {name: "Fufu", country: "Ghana"},
    {name: "Pupusas", country: "El Salvador"},
    {name: "Churrasco", country: "Brazil"},
    {name: "Lobster Roll", country: "USA"},
    {name: "Souvlaki", country: "Greece"},
    {name: "Dumplings", country: "China"},
    {name: "Chimichanga", country: "Mexico"},
    {name: "Currywurst", country: "Germany"},
    {name: "Gazpacho", country: "Spain"},
    {name: "Panettone", country: "Italy"},
    {name: "Black Forest Cake", country: "Germany"},
    {name: "Banh Xeo", country: "Vietnam"},
    {name: "Chili Crab", country: "Singapore"},
    {name: "Satay", country: "Malaysia"},
    {name: "Moules Frites", country: "Belgium"},
    {name: "Bakso", country: "Indonesia"},
    {name: "Pierogi", country: "Poland"},
    {name: "Tteokbokki", country: "Korea"},
    {name: "Sauerbraten", country: "Germany"},
    {name: "Antipasto", country: "Italy"},
    {name: "Mole Poblano", country: "Mexico"},
    {name: "Mango Sticky Rice", country: "Thailand"},
    {name: "Escargot", country: "France"},
    {name: "Tiramisu", country: "Italy"},
    {name: "Lamington", country: "Australia"},
    {name: "Fish Tacos", country: "Mexico"},
    {name: "Danish", country: "Denmark"},
    {name: "Goulash", country: "Hungary"},
    {name: "Kebab", country: "Turkey"},
    {name: "Huevos Rancheros", country: "Mexico"},
    {name: "Pastrami Sandwich", country: "USA"},
    {name: "Pav Bhaji", country: "India"},
    {name: "Cannoli", country: "Italy"},
    {name: "Nasi Goreng", country: "Indonesia"},
    {name: "Tacos al Pastor", country: "Mexico"},
    {name: "Sauerbraten", country: "Germany"},
    {name: "Fondue", country: "Switzerland"},
    {name: "Vindaloo", country: "India"},
    {name: "Eggs Benedict", country: "USA"},
    {name: "Baklava", country: "Turkey"},
    {name: "Katsu Curry", country: "Japan"},
    {name: "Tom Yum Soup", country: "Thailand"},
    {name: "Lobster Bisque", country: "France"},
    {name: "Caviar", country: "Russia"}
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
