"use strict";

let destinations = ["San Francisco", "Texas", "Florida", "New York"];
let restaurants = ["Outback", "Roadhouse", "Olive Garden", "Perrys"];
let transportations = ["Train", "Car", "Airplane", "Subway"];



function generateRandomTrip(){
    let randomIndex = Math.floor(Math.random() * Math.floor(destinations.length)); 
    let destination = destinations[randomIndex];
    console.log(destination);
    
randomIndex = Math.floor(Math.random() * Math.floor(restaurants.length));
     let restaurant = restaurants[randomIndex];
     console.log(restaurant);

    randomIndex = Math.floor(Math.random() * Math.floor(transportations.length));
        let transportation = transportations[randomIndex];
        console.log(transportation);

    


}
  

generateRandomTrip();