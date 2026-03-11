const fs = require("fs");
const restaurent = [];
const image = ["first","second","third","fourth","fifth","sixth","sevonth","eight","ninth"]
const rest_name = [
  "Spice Garden",
  "Tasty Bites",
  "Royal Dhaba",
  "Food Hub",
  "Urban Tandoor",
  "Green Leaf Cafe",
  "The Hungry Point",
  "City Flavors",
  "Golden Spoon",
  "Ocean Delight",
  "Saffron Kitchen",
  "Flame Grill",
  "Taste Town",
  "Red Chili House",
  "Blue Lagoon",
  "Street Food Corner",
  "The Curry Spot",
  "Fresh Feast",
  "Moonlight Diner",
  "Happy Plates"
];
const foodTypes = [
  "Pizza",
  "Burger",
  "Pasta",
  "Biryani",
  "Noodles",
  "Sandwich",
  "Dosa",
  "Paneer Tikka",
  "Salad",
  "Ice Cream"
];
const delhiLocations = [
  "India Gate",
  "Red Fort",
  "Qutub Minar",
  "Lotus Temple",
  "Akshardham Temple",
  "Connaught Place",
  "Chandni Chowk",
  "Humayun's Tomb",
  "Jama Masjid",
  "Raj Ghat"
];
for(let i=0;i<=100;i++){

    const obj = {};
    obj["image"]=image[Math.floor(Math.random()*10)];
    obj["rest_name"]=rest_name[Math.floor(Math.random()*20)];
    obj["rating"]=Math.floor(Math.random()*5+1);
    obj["foodTypes"]=foodTypes[Math.floor(Math.random()*10)];
    obj["prize_for_two"]=Math.floor(Math.random()*2401+100);
    obj["delhilocation"]=delhiLocations[Math.floor(Math.random()*10)];
    obj["distance"]=Math.floor(Math.random()*10+1).toFixed(1 );
    obj["offer"]=Math.floor(Math.random()*30);
    obj["alchohole"]=Math.random()>0.7;
    obj["open_time"]=Math.floor(Math.random()*24);
    obj["close_time"]= ( obj["open_time"]+12)%24;

    restaurent.push(obj);

}
// console.log(restaurent);

const jsonData = JSON.stringify(restaurent, null, 2);
fs.writeFileSync("data.json", jsonData);
console.log(jsonData);