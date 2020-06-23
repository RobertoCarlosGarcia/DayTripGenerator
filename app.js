"use strict";

let destinations = ["San Francisco", "Texas", "Florida", "New York"];
let restaurants = ["Outback", "Roadhouse", "Olive Garden", "Perrys"];

function generateRandomTrip(){
    let randomIndex = Math.floor(Math.random() * Math.floor(destinations.length)); 
    let destination = destinations[randomIndex];
    console.log(destination);
    
    randomIndex = Math.floor(Math.random() * Math.floor(restaurants.length));
     let restaurant = restaurants[randomIndex];
     console.log(restaurant);
}
  generateRandomTrip();