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
    {name: "Bobotie", country: "South Africa"}
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
