

const restaurents = [
  {
    "image": "fourth",
    "rest_name": "Happy Plates",
    "rating": 2,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2197,
    "delhilocation": "Qutub Minar",
    "distance": "9.0",
    "offer": 21,
    "alchohole": false,
    "open_time": 19,
    "close_time": 7
  },
  {
    "image": "second",
    "rest_name": "Fresh Feast",
    "rating": 4,
    "foodTypes": "Biryani",
    "prize_for_two": 1004,
    "delhilocation": "Connaught Place",
    "distance": "5.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 7,
    "close_time": 19
  },
  {
    "image": "third",
    "rest_name": "City Flavors",
    "rating": 1,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2438,
    "delhilocation": "Akshardham Temple",
    "distance": "8.0",
    "offer": 2,
    "alchohole": true,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "sixth",
    "rest_name": "Moonlight Diner",
    "rating": 1,
    "foodTypes": "Dosa",
    "prize_for_two": 1189,
    "delhilocation": "Humayun's Tomb",
    "distance": "8.0",
    "offer": 18,
    "alchohole": true,
    "open_time": 18,
    "close_time": 6
  },
  {
    "image": "first",
    "rest_name": "Urban Tandoor",
    "rating": 3,
    "foodTypes": "Noodles",
    "prize_for_two": 1741,
    "delhilocation": "Raj Ghat",
    "distance": "8.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "first",
    "rest_name": "Food Hub",
    "rating": 3,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1990,
    "delhilocation": "India Gate",
    "distance": "6.0",
    "offer": 5,
    "alchohole": true,
    "open_time": 11,
    "close_time": 23
  },
  {
    "image": "sixth",
    "rest_name": "Blue Lagoon",
    "rating": 2,
    "foodTypes": "Pasta",
    "prize_for_two": 2095,
    "delhilocation": "Jama Masjid",
    "distance": "5.0",
    "offer": 27,
    "alchohole": true,
    "open_time": 18,
    "close_time": 6
  },
  {
    "image": "sevonth",
    "rest_name": "Happy Plates",
    "rating": 3,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1257,
    "delhilocation": "Lotus Temple",
    "distance": "1.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 13,
    "close_time": 1
  },
  {
    "image": "fourth",
    "rest_name": "Saffron Kitchen",
    "rating": 5,
    "foodTypes": "Pizza",
    "prize_for_two": 2329,
    "delhilocation": "Humayun's Tomb",
    "distance": "8.0",
    "offer": 24,
    "alchohole": false,
    "open_time": 23,
    "close_time": 11
  },
  {
    "image": "first",
    "rest_name": "Street Food Corner",
    "rating": 3,
    "foodTypes": "Dosa",
    "prize_for_two": 1728,
    "delhilocation": "Humayun's Tomb",
    "distance": "9.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 22,
    "close_time": 10
  },
  {
    "image": "eight",
    "rest_name": "Blue Lagoon",
    "rating": 2,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1337,
    "delhilocation": "Chandni Chowk",
    "distance": "1.0",
    "offer": 24,
    "alchohole": false,
    "open_time": 21,
    "close_time": 9
  },
  {
    "image": "eight",
    "rest_name": "Spice Garden",
    "rating": 4,
    "foodTypes": "Sandwich",
    "prize_for_two": 548,
    "delhilocation": "Jama Masjid",
    "distance": "10.0",
    "offer": 9,
    "alchohole": true,
    "open_time": 3,
    "close_time": 15
  },
  {
    "image": "fourth",
    "rest_name": "Saffron Kitchen",
    "rating": 1,
    "foodTypes": "Pizza",
    "prize_for_two": 1728,
    "delhilocation": "Red Fort",
    "distance": "5.0",
    "offer": 29,
    "alchohole": false,
    "open_time": 16,
    "close_time": 4
  },
  {
    "image": "fifth",
    "rest_name": "Saffron Kitchen",
    "rating": 5,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1159,
    "delhilocation": "Red Fort",
    "distance": "7.0",
    "offer": 26,
    "alchohole": false,
    "open_time": 18,
    "close_time": 6
  },
  {
    "image": "eight",
    "rest_name": "Taste Town",
    "rating": 1,
    "foodTypes": "Salad",
    "prize_for_two": 433,
    "delhilocation": "Humayun's Tomb",
    "distance": "10.0",
    "offer": 22,
    "alchohole": false,
    "open_time": 22,
    "close_time": 10
  },
  {
    "image": "eight",
    "rest_name": "Ocean Delight",
    "rating": 4,
    "foodTypes": "Biryani",
    "prize_for_two": 1989,
    "delhilocation": "Lotus Temple",
    "distance": "4.0",
    "offer": 12,
    "alchohole": false,
    "open_time": 5,
    "close_time": 17
  },
  {
    "image": "sevonth",
    "rest_name": "Taste Town",
    "rating": 4,
    "foodTypes": "Sandwich",
    "prize_for_two": 2132,
    "delhilocation": "Jama Masjid",
    "distance": "10.0",
    "offer": 11,
    "alchohole": false,
    "open_time": 14,
    "close_time": 2
  },
  {
    "image": "fourth",
    "rest_name": "Flame Grill",
    "rating": 2,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2382,
    "delhilocation": "Lotus Temple",
    "distance": "7.0",
    "offer": 7,
    "alchohole": false,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "sixth",
    "rest_name": "City Flavors",
    "rating": 3,
    "foodTypes": "Noodles",
    "prize_for_two": 879,
    "delhilocation": "Lotus Temple",
    "distance": "3.0",
    "offer": 19,
    "alchohole": false,
    "open_time": 13,
    "close_time": 1
  },
  {
    "rest_name": "Taste Town",
    "rating": 4,
    "foodTypes": "Noodles",
    "prize_for_two": 1203,
    "delhilocation": "Red Fort",
    "distance": "2.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "eight",
    "rest_name": "Golden Spoon",
    "rating": 4,
    "foodTypes": "Sandwich",
    "prize_for_two": 584,
    "delhilocation": "Lotus Temple",
    "distance": "3.0",
    "offer": 17,
    "alchohole": false,
    "open_time": 3,
    "close_time": 15
  },
  {
    "image": "first",
    "rest_name": "Fresh Feast",
    "rating": 1,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 1591,
    "delhilocation": "Chandni Chowk",
    "distance": "2.0",
    "offer": 13,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "third",
    "rest_name": "Green Leaf Cafe",
    "rating": 3,
    "foodTypes": "Ice Cream",
    "prize_for_two": 849,
    "delhilocation": "Chandni Chowk",
    "distance": "5.0",
    "offer": 22,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "eight",
    "rest_name": "Moonlight Diner",
    "rating": 1,
    "foodTypes": "Biryani",
    "prize_for_two": 1187,
    "delhilocation": "Akshardham Temple",
    "distance": "4.0",
    "offer": 21,
    "alchohole": true,
    "open_time": 20,
    "close_time": 8
  },
  {
    "image": "fourth",
    "rest_name": "Spice Garden",
    "rating": 2,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 2301,
    "delhilocation": "Red Fort",
    "distance": "5.0",
    "offer": 1,
    "alchohole": false,
    "open_time": 22,
    "close_time": 10
  },
  {
    "image": "sixth",
    "rest_name": "The Hungry Point",
    "rating": 1,
    "foodTypes": "Salad",
    "prize_for_two": 1507,
    "delhilocation": "Lotus Temple",
    "distance": "10.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "sixth",
    "rest_name": "Flame Grill",
    "rating": 2,
    "foodTypes": "Pasta",
    "prize_for_two": 1170,
    "delhilocation": "Qutub Minar",
    "distance": "5.0",
    "offer": 6,
    "alchohole": false,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "third",
    "rest_name": "Green Leaf Cafe",
    "rating": 5,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2248,
    "delhilocation": "India Gate",
    "distance": "8.0",
    "offer": 18,
    "alchohole": false,
    "open_time": 11,
    "close_time": 23
  },
  {
    "image": "sevonth",
    "rest_name": "City Flavors",
    "rating": 4,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2228,
    "delhilocation": "Lotus Temple",
    "distance": "6.0",
    "offer": 5,
    "alchohole": false,
    "open_time": 5,
    "close_time": 17
  },
  {
    "image": "third",
    "rest_name": "Saffron Kitchen",
    "rating": 2,
    "foodTypes": "Burger",
    "prize_for_two": 1487,
    "delhilocation": "Jama Masjid",
    "distance": "3.0",
    "offer": 7,
    "alchohole": false,
    "open_time": 11,
    "close_time": 23
  },
  {
    "rest_name": "Taste Town",
    "rating": 4,
    "foodTypes": "Dosa",
    "prize_for_two": 2367,
    "delhilocation": "India Gate",
    "distance": "3.0",
    "offer": 10,
    "alchohole": true,
    "open_time": 13,
    "close_time": 1
  },
  {
    "image": "first",
    "rest_name": "Taste Town",
    "rating": 4,
    "foodTypes": "Biryani",
    "prize_for_two": 593,
    "delhilocation": "Akshardham Temple",
    "distance": "1.0",
    "offer": 20,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "eight",
    "rest_name": "The Hungry Point",
    "rating": 1,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 2066,
    "delhilocation": "Akshardham Temple",
    "distance": "8.0",
    "offer": 6,
    "alchohole": false,
    "open_time": 21,
    "close_time": 9
  },
  {
    "image": "sevonth",
    "rest_name": "Urban Tandoor",
    "rating": 4,
    "foodTypes": "Pizza",
    "prize_for_two": 1945,
    "delhilocation": "Lotus Temple",
    "distance": "1.0",
    "offer": 12,
    "alchohole": false,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "sixth",
    "rest_name": "Urban Tandoor",
    "rating": 2,
    "foodTypes": "Sandwich",
    "prize_for_two": 943,
    "delhilocation": "Lotus Temple",
    "distance": "6.0",
    "offer": 20,
    "alchohole": false,
    "open_time": 8,
    "close_time": 20
  },
  {
    "image": "fourth",
    "rest_name": "Royal Dhaba",
    "rating": 3,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2256,
    "delhilocation": "Raj Ghat",
    "distance": "4.0",
    "offer": 24,
    "alchohole": true,
    "open_time": 5,
    "close_time": 17
  },
  {
    "image": "eight",
    "rest_name": "Blue Lagoon",
    "rating": 4,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2326,
    "delhilocation": "Lotus Temple",
    "distance": "7.0",
    "offer": 14,
    "alchohole": false,
    "open_time": 9,
    "close_time": 21
  },
  {
    "image": "third",
    "rest_name": "Green Leaf Cafe",
    "rating": 3,
    "foodTypes": "Noodles",
    "prize_for_two": 1773,
    "delhilocation": "Chandni Chowk",
    "distance": "9.0",
    "offer": 12,
    "alchohole": false,
    "open_time": 17,
    "close_time": 5
  },
  {
    "image": "first",
    "rest_name": "Urban Tandoor",
    "rating": 4,
    "foodTypes": "Pizza",
    "prize_for_two": 2065,
    "delhilocation": "Red Fort",
    "distance": "9.0",
    "offer": 10,
    "alchohole": false,
    "open_time": 11,
    "close_time": 23
  },
  {
    "image": "fifth",
    "rest_name": "Happy Plates",
    "rating": 2,
    "foodTypes": "Pizza",
    "prize_for_two": 1997,
    "delhilocation": "Red Fort",
    "distance": "3.0",
    "offer": 21,
    "alchohole": false,
    "open_time": 15,
    "close_time": 3
  },
  {
    "image": "ninth",
    "rest_name": "Ocean Delight",
    "rating": 3,
    "foodTypes": "Biryani",
    "prize_for_two": 1739,
    "delhilocation": "Akshardham Temple",
    "distance": "3.0",
    "offer": 7,
    "alchohole": true,
    "open_time": 8,
    "close_time": 20
  },
  {
    "image": "sixth",
    "rest_name": "Tasty Bites",
    "rating": 4,
    "foodTypes": "Biryani",
    "prize_for_two": 1574,
    "delhilocation": "Akshardham Temple",
    "distance": "7.0",
    "offer": 11,
    "alchohole": false,
    "open_time": 16,
    "close_time": 4
  },
  {
    "image": "third",
    "rest_name": "Ocean Delight",
    "rating": 4,
    "foodTypes": "Biryani",
    "prize_for_two": 1113,
    "delhilocation": "Raj Ghat",
    "distance": "3.0",
    "offer": 16,
    "alchohole": true,
    "open_time": 17,
    "close_time": 5
  },
  {
    "image": "fifth",
    "rest_name": "Taste Town",
    "rating": 2,
    "foodTypes": "Noodles",
    "prize_for_two": 2166,
    "delhilocation": "Akshardham Temple",
    "distance": "8.0",
    "offer": 7,
    "alchohole": false,
    "open_time": 18,
    "close_time": 6
  },
  {
    "image": "eight",
    "rest_name": "Urban Tandoor",
    "rating": 4,
    "foodTypes": "Pizza",
    "prize_for_two": 1545,
    "delhilocation": "Akshardham Temple",
    "distance": "3.0",
    "offer": 1,
    "alchohole": false,
    "open_time": 8,
    "close_time": 20
  },
  {
    "image": "sixth",
    "rest_name": "Street Food Corner",
    "rating": 3,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 1360,
    "delhilocation": "Chandni Chowk",
    "distance": "5.0",
    "offer": 21,
    "alchohole": true,
    "open_time": 20,
    "close_time": 8
  },
  {
    "image": "fifth",
    "rest_name": "Urban Tandoor",
    "rating": 3,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 2303,
    "delhilocation": "India Gate",
    "distance": "1.0",
    "offer": 2,
    "alchohole": true,
    "open_time": 22,
    "close_time": 10
  },
  {
    "image": "second",
    "rest_name": "Spice Garden",
    "rating": 4,
    "foodTypes": "Noodles",
    "prize_for_two": 1014,
    "delhilocation": "Raj Ghat",
    "distance": "9.0",
    "offer": 13,
    "alchohole": false,
    "open_time": 15,
    "close_time": 3
  },
  {
    "image": "eight",
    "rest_name": "The Curry Spot",
    "rating": 5,
    "foodTypes": "Dosa",
    "prize_for_two": 890,
    "delhilocation": "Akshardham Temple",
    "distance": "1.0",
    "offer": 13,
    "alchohole": true,
    "open_time": 20,
    "close_time": 8
  },
  {
    "image": "first",
    "rest_name": "Ocean Delight",
    "rating": 1,
    "foodTypes": "Pasta",
    "prize_for_two": 2113,
    "delhilocation": "Lotus Temple",
    "distance": "8.0",
    "offer": 29,
    "alchohole": false,
    "open_time": 14,
    "close_time": 2
  },
  {
    "image": "eight",
    "rest_name": "Spice Garden",
    "rating": 1,
    "foodTypes": "Noodles",
    "prize_for_two": 697,
    "delhilocation": "Akshardham Temple",
    "distance": "5.0",
    "offer": 18,
    "alchohole": true,
    "open_time": 22,
    "close_time": 10
  },
  {
    "rest_name": "Saffron Kitchen",
    "rating": 1,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1826,
    "delhilocation": "Chandni Chowk",
    "distance": "7.0",
    "offer": 10,
    "alchohole": true,
    "open_time": 16,
    "close_time": 4
  },
  {
    "image": "third",
    "rest_name": "Golden Spoon",
    "rating": 3,
    "foodTypes": "Biryani",
    "prize_for_two": 2485,
    "delhilocation": "Raj Ghat",
    "distance": "1.0",
    "offer": 6,
    "alchohole": false,
    "open_time": 6,
    "close_time": 18
  },
  {
    "image": "sevonth",
    "rest_name": "Red Chili House",
    "rating": 2,
    "foodTypes": "Noodles",
    "prize_for_two": 943,
    "delhilocation": "Qutub Minar",
    "distance": "2.0",
    "offer": 3,
    "alchohole": true,
    "open_time": 7,
    "close_time": 19
  },
  {
    "image": "third",
    "rest_name": "Urban Tandoor",
    "rating": 3,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1073,
    "delhilocation": "Connaught Place",
    "distance": "10.0",
    "offer": 15,
    "alchohole": true,
    "open_time": 9,
    "close_time": 21
  },
  {
    "image": "second",
    "rest_name": "Moonlight Diner",
    "rating": 1,
    "foodTypes": "Salad",
    "prize_for_two": 1167,
    "delhilocation": "Jama Masjid",
    "distance": "9.0",
    "offer": 23,
    "alchohole": true,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "first",
    "rest_name": "The Hungry Point",
    "rating": 2,
    "foodTypes": "Noodles",
    "prize_for_two": 1481,
    "delhilocation": "Akshardham Temple",
    "distance": "10.0",
    "offer": 23,
    "alchohole": false,
    "open_time": 22,
    "close_time": 10
  },
  {
    "image": "sixth",
    "rest_name": "Golden Spoon",
    "rating": 4,
    "foodTypes": "Biryani",
    "prize_for_two": 1949,
    "delhilocation": "Humayun's Tomb",
    "distance": "3.0",
    "offer": 26,
    "alchohole": true,
    "open_time": 9,
    "close_time": 21
  },
  {
    "image": "fourth",
    "rest_name": "City Flavors",
    "rating": 1,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 2035,
    "delhilocation": "Qutub Minar",
    "distance": "4.0",
    "offer": 17,
    "alchohole": true,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "first",
    "rest_name": "Blue Lagoon",
    "rating": 2,
    "foodTypes": "Biryani",
    "prize_for_two": 571,
    "delhilocation": "Akshardham Temple",
    "distance": "10.0",
    "offer": 28,
    "alchohole": false,
    "open_time": 23,
    "close_time": 11
  },
  {
    "image": "fourth",
    "rest_name": "Saffron Kitchen",
    "rating": 5,
    "foodTypes": "Ice Cream",
    "prize_for_two": 2424,
    "delhilocation": "Lotus Temple",
    "distance": "9.0",
    "offer": 16,
    "alchohole": false,
    "open_time": 8,
    "close_time": 20
  },
  {
    "image": "first",
    "rest_name": "Blue Lagoon",
    "rating": 4,
    "foodTypes": "Salad",
    "prize_for_two": 2415,
    "delhilocation": "Lotus Temple",
    "distance": "10.0",
    "offer": 6,
    "alchohole": false,
    "open_time": 21,
    "close_time": 9
  },
  {
    "image": "sevonth",
    "rest_name": "Red Chili House",
    "rating": 1,
    "foodTypes": "Dosa",
    "prize_for_two": 1902,
    "delhilocation": "Raj Ghat",
    "distance": "3.0",
    "offer": 19,
    "alchohole": false,
    "open_time": 11,
    "close_time": 23
  },
  {
    "image": "third",
    "rest_name": "Moonlight Diner",
    "rating": 5,
    "foodTypes": "Pasta",
    "prize_for_two": 1535,
    "delhilocation": "Akshardham Temple",
    "distance": "6.0",
    "offer": 19,
    "alchohole": false,
    "open_time": 6,
    "close_time": 18
  },
  {
    "image": "first",
    "rest_name": "Fresh Feast",
    "rating": 3,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 439,
    "delhilocation": "Chandni Chowk",
    "distance": "6.0",
    "offer": 1,
    "alchohole": false,
    "open_time": 15,
    "close_time": 3
  },
  {
    "image": "ninth",
    "rest_name": "Urban Tandoor",
    "rating": 2,
    "foodTypes": "Burger",
    "prize_for_two": 613,
    "delhilocation": "India Gate",
    "distance": "10.0",
    "offer": 4,
    "alchohole": false,
    "open_time": 15,
    "close_time": 3
  },
  {
    "image": "fifth",
    "rest_name": "Ocean Delight",
    "rating": 1,
    "foodTypes": "Pasta",
    "prize_for_two": 465,
    "delhilocation": "Qutub Minar",
    "distance": "3.0",
    "offer": 27,
    "alchohole": false,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "sevonth",
    "rest_name": "Moonlight Diner",
    "rating": 4,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1396,
    "delhilocation": "Lotus Temple",
    "distance": "1.0",
    "offer": 7,
    "alchohole": false,
    "open_time": 19,
    "close_time": 7
  },
  {
    "image": "sixth",
    "rest_name": "The Curry Spot",
    "rating": 5,
    "foodTypes": "Burger",
    "prize_for_two": 947,
    "delhilocation": "Humayun's Tomb",
    "distance": "10.0",
    "offer": 15,
    "alchohole": true,
    "open_time": 2,
    "close_time": 14
  },
  {
    "image": "first",
    "rest_name": "Spice Garden",
    "rating": 4,
    "foodTypes": "Burger",
    "prize_for_two": 2497,
    "delhilocation": "Chandni Chowk",
    "distance": "1.0",
    "offer": 7,
    "alchohole": false,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "eight",
    "rest_name": "Fresh Feast",
    "rating": 1,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 1253,
    "delhilocation": "Connaught Place",
    "distance": "4.0",
    "offer": 23,
    "alchohole": false,
    "open_time": 3,
    "close_time": 15
  },
  {
    "image": "third",
    "rest_name": "Red Chili House",
    "rating": 3,
    "foodTypes": "Ice Cream",
    "prize_for_two": 1657,
    "delhilocation": "Humayun's Tomb",
    "distance": "10.0",
    "offer": 9,
    "alchohole": false,
    "open_time": 21,
    "close_time": 9
  },
  {
    "image": "first",
    "rest_name": "Tasty Bites",
    "rating": 3,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 1670,
    "delhilocation": "Qutub Minar",
    "distance": "2.0",
    "offer": 17,
    "alchohole": false,
    "open_time": 12,
    "close_time": 0
  },
  {
    "image": "third",
    "rest_name": "Moonlight Diner",
    "rating": 3,
    "foodTypes": "Pasta",
    "prize_for_two": 1034,
    "delhilocation": "Jama Masjid",
    "distance": "5.0",
    "offer": 4,
    "alchohole": false,
    "open_time": 17,
    "close_time": 5
  },
  {
    "image": "sevonth",
    "rest_name": "Moonlight Diner",
    "rating": 4,
    "foodTypes": "Burger",
    "prize_for_two": 2305,
    "delhilocation": "Red Fort",
    "distance": "2.0",
    "offer": 5,
    "alchohole": false,
    "open_time": 13,
    "close_time": 1
  },
  {
    "image": "eight",
    "rest_name": "Royal Dhaba",
    "rating": 3,
    "foodTypes": "Pasta",
    "prize_for_two": 1450,
    "delhilocation": "Qutub Minar",
    "distance": "5.0",
    "offer": 13,
    "alchohole": false,
    "open_time": 19,
    "close_time": 7
  },
  {
    "image": "sixth",
    "rest_name": "Red Chili House",
    "rating": 1,
    "foodTypes": "Salad",
    "prize_for_two": 2232,
    "delhilocation": "Humayun's Tomb",
    "distance": "6.0",
    "offer": 12,
    "alchohole": false,
    "open_time": 10,
    "close_time": 22
  },
  {
    "image": "first",
    "rest_name": "Spice Garden",
    "rating": 3,
    "foodTypes": "Burger",
    "prize_for_two": 1121,
    "delhilocation": "Lotus Temple",
    "distance": "3.0",
    "offer": 7,
    "alchohole": true,
    "open_time": 9,
    "close_time": 21
  },
  {
    "image": "eight",
    "rest_name": "Food Hub",
    "rating": 5,
    "foodTypes": "Sandwich",
    "prize_for_two": 745,
    "delhilocation": "Qutub Minar",
    "distance": "1.0",
    "offer": 16,
    "alchohole": false,
    "open_time": 18,
    "close_time": 6
  },
  {
    "rest_name": "The Curry Spot",
    "rating": 5,
    "foodTypes": "Salad",
    "prize_for_two": 1402,
    "delhilocation": "Qutub Minar",
    "distance": "6.0",
    "offer": 20,
    "alchohole": false,
    "open_time": 20,
    "close_time": 8
  },
  {
    "image": "second",
    "rest_name": "Happy Plates",
    "rating": 5,
    "foodTypes": "Sandwich",
    "prize_for_two": 1252,
    "delhilocation": "Humayun's Tomb",
    "distance": "1.0",
    "offer": 17,
    "alchohole": false,
    "open_time": 7,
    "close_time": 19
  },
  {
    "image": "eight",
    "rest_name": "City Flavors",
    "rating": 2,
    "foodTypes": "Dosa",
    "prize_for_two": 1293,
    "delhilocation": "Connaught Place",
    "distance": "3.0",
    "offer": 12,
    "alchohole": false,
    "open_time": 0,
    "close_time": 12
  },
  {
    "image": "second",
    "rest_name": "Flame Grill",
    "rating": 2,
    "foodTypes": "Sandwich",
    "prize_for_two": 945,
    "delhilocation": "Chandni Chowk",
    "distance": "7.0",
    "offer": 28,
    "alchohole": false,
    "open_time": 15,
    "close_time": 3
  },
  {
    "image": "fourth",
    "rest_name": "Ocean Delight",
    "rating": 5,
    "foodTypes": "Sandwich",
    "prize_for_two": 2158,
    "delhilocation": "Connaught Place",
    "distance": "8.0",
    "offer": 15,
    "alchohole": true,
    "open_time": 14,
    "close_time": 2
  },
  {
    "rest_name": "Ocean Delight",
    "rating": 4,
    "foodTypes": "Dosa",
    "prize_for_two": 822,
    "delhilocation": "Raj Ghat",
    "distance": "7.0",
    "offer": 1,
    "alchohole": false,
    "open_time": 5,
    "close_time": 17
  },
  {
    "image": "sevonth",
    "rest_name": "Happy Plates",
    "rating": 5,
    "foodTypes": "Burger",
    "prize_for_two": 878,
    "delhilocation": "Chandni Chowk",
    "distance": "3.0",
    "offer": 29,
    "alchohole": false,
    "open_time": 18,
    "close_time": 6
  },
  {
    "image": "third",
    "rest_name": "City Flavors",
    "rating": 3,
    "foodTypes": "Sandwich",
    "prize_for_two": 1093,
    "delhilocation": "Jama Masjid",
    "distance": "7.0",
    "offer": 0,
    "alchohole": false,
    "open_time": 3,
    "close_time": 15
  },
  {
    "image": "eight",
    "rest_name": "Red Chili House",
    "rating": 1,
    "foodTypes": "Noodles",
    "prize_for_two": 349,
    "delhilocation": "Raj Ghat",
    "distance": "8.0",
    "offer": 5,
    "alchohole": false,
    "open_time": 14,
    "close_time": 2
  },
  {
    "image": "first",
    "rest_name": "The Hungry Point",
    "rating": 2,
    "foodTypes": "Pizza",
    "prize_for_two": 469,
    "delhilocation": "India Gate",
    "distance": "9.0",
    "offer": 20,
    "alchohole": true,
    "open_time": 14,
    "close_time": 2
  },
  {
    "rest_name": "Royal Dhaba",
    "rating": 4,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 835,
    "delhilocation": "Akshardham Temple",
    "distance": "7.0",
    "offer": 15,
    "alchohole": true,
    "open_time": 11,
    "close_time": 23
  },
  {
    "image": "sixth",
    "rest_name": "Moonlight Diner",
    "rating": 1,
    "foodTypes": "Dosa",
    "prize_for_two": 432,
    "delhilocation": "India Gate",
    "distance": "7.0",
    "offer": 16,
    "alchohole": false,
    "open_time": 20,
    "close_time": 8
  },
  {
    "image": "first",
    "rest_name": "City Flavors",
    "rating": 5,
    "foodTypes": "Paneer Tikka",
    "prize_for_two": 664,
    "delhilocation": "Qutub Minar",
    "distance": "7.0",
    "offer": 3,
    "alchohole": false,
    "open_time": 20,
    "close_time": 8
  },
  {
    "image": "fifth",
    "rest_name": "The Curry Spot",
    "rating": 2,
    "foodTypes": "Noodles",
    "prize_for_two": 2234,
    "delhilocation": "Connaught Place",
    "distance": "5.0",
    "offer": 28,
    "alchohole": false,
    "open_time": 17,
    "close_time": 5
  },
  {
    "image": "eight",
    "rest_name": "Food Hub",
    "rating": 3,
    "foodTypes": "Salad",
    "prize_for_two": 1251,
    "delhilocation": "Humayun's Tomb",
    "distance": "6.0",
    "offer": 14,
    "alchohole": true,
    "open_time": 21,
    "close_time": 9
  },
  {
    "image": "second",
    "rest_name": "Tasty Bites",
    "rating": 2,
    "foodTypes": "Biryani",
    "prize_for_two": 629,
    "delhilocation": "Humayun's Tomb",
    "distance": "1.0",
    "offer": 8,
    "alchohole": true,
    "open_time": 6,
    "close_time": 18
  },
  {
    "image": "eight",
    "rest_name": "Green Leaf Cafe",
    "rating": 5,
    "foodTypes": "Pizza",
    "prize_for_two": 863,
    "delhilocation": "Chandni Chowk",
    "distance": "5.0",
    "offer": 29,
    "alchohole": false,
    "open_time": 8,
    "close_time": 20
  },
  {
    "image": "sixth",
    "rest_name": "The Hungry Point",
    "rating": 4,
    "foodTypes": "Burger",
    "prize_for_two": 225,
    "delhilocation": "Connaught Place",
    "distance": "3.0",
    "offer": 9,
    "alchohole": false,
    "open_time": 16,
    "close_time": 4
  },
  {
    "rest_name": "Royal Dhaba",
    "rating": 3,
    "foodTypes": "Dosa",
    "prize_for_two": 283,
    "delhilocation": "India Gate",
    "distance": "4.0",
    "offer": 19,
    "alchohole": false,
    "open_time": 4,
    "close_time": 16
  },
  {
    "image": "fifth",
    "rest_name": "Golden Spoon",
    "rating": 2,
    "foodTypes": "Dosa",
    "prize_for_two": 1723,
    "delhilocation": "Humayun's Tomb",
    "distance": "9.0",
    "offer": 18,
    "alchohole": true,
    "open_time": 16,
    "close_time": 4
  },
  {
    "image": "third",
    "rest_name": "Ocean Delight",
    "rating": 1,
    "foodTypes": "Salad",
    "prize_for_two": 1981,
    "delhilocation": "Lotus Temple",
    "distance": "7.0",
    "offer": 3,
    "alchohole": false,
    "open_time": 14,
    "close_time": 2
  },
  {
    "image": "fifth",
    "rest_name": "Red Chili House",
    "rating": 5,
    "foodTypes": "Biryani",
    "prize_for_two": 2282,
    "delhilocation": "India Gate",
    "distance": "4.0",
    "offer": 14,
    "alchohole": true,
    "open_time": 0,
    "close_time": 12
  }
]

function getrestaurent(restaurents) {

  const root = document.getElementById('root');

  restaurents.forEach(restaurent => {

    const card = document.createElement('div');
    card.classList.add('card');

    const image = document.createElement('img');
    image.src = restaurent.image
      ? `image/${restaurent.image}.webp`
      : `image/default.webp`;

    const card_content = document.createElement('div');
    card_content.classList.add('card-content');

    const card_header = document.createElement('div');
    card_header.classList.add('card-header');

    const h3 = document.createElement('h3');
    h3.textContent = restaurent.rest_name;

    const rate = document.createElement('span');
    rate.textContent = restaurent.rating;
    rate.classList.add('rating');

    card_header.appendChild(h3);
    card_header.appendChild(rate);

    const card_footer = document.createElement('div');
    card_footer.classList.add('card-footer');

    const food = document.createElement('span');
    food.textContent = restaurent.foodTypes;

    const price = document.createElement('span');
    price.textContent = "₹" + restaurent.prize_for_two;

    card_footer.appendChild(food);
    card_footer.appendChild(price);

    const card_location = document.createElement('div');
    card_location.classList.add('card-location');

    const location = document.createElement('span');
    location.textContent = restaurent.delhilocation;

    const distance = document.createElement('span');
    distance.textContent = restaurent.distance + " km";

    card_location.appendChild(location);
    card_location.appendChild(distance);

    card_content.appendChild(card_header);
    card_content.appendChild(card_footer);
    card_content.appendChild(card_location);

    card.appendChild(image);
    card.appendChild(card_content);

    root.appendChild(card);

  });
}

// document.addEventListener("DOMContentLoaded", function(){
getrestaurent(restaurents);
// });
document.getElementById("alcohol").addEventListener('click', () => {

  const result = restaurents.filter((obj) => obj.alchohole);
  document.getElementById('root').innerHTML = " ";//in this also use replacechildren()
  getrestaurent(result);

})
document.getElementById("rating").addEventListener('click', () => {

  const resu = restaurents.filter((obj) => obj.rating > 4.5);
  document.getElementById('root').innerHTML = " ";//in this also use replacechildren()
  getrestaurent(resu);


})
document.getElementById("filter").addEventListener('click', () => {
  document.getElementById('filterSort').classList.remove("hidden");

})
document.getElementById("applyBtn").addEventListener('click', () => {
  const element = document.querySelector('input[name="sort"]:checked');//select in basis of attribute
  const answer = element.value;

  if (answer === "rating") {
    restaurents.sort((a,b)=>b.rating-a.rating);
  }
  else if(answer === "highToLow"){
    restaurents.sort((a,b)=>b.prize_for_two-a.prize_for_two);
  }

   else if(answer === "lowToHigh"){
    restaurents.sort((a,b)=>a.prize_for_two-b.prize_for_two);
  }
   else if(answer === "distance"){
    restaurents.sort((a,b)=>a.distance-b.distance);
  }
   document.getElementById('root').innerHTML = " ";//in this also use replacechildren()
     document.getElementById('filterSort').classList.add("hidden");
  getrestaurent(restaurents);
})