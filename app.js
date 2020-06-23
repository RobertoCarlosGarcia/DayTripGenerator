"use strict";

let destinations = ["San Francisco", "Texas", "Florida", "New York"];

function generateRandomTrip(){
    let randomIndex = Math.floor(Math.random() * Math.floor(destinations.length)); 
    let destination = destinations[randomIndex];
    console.log(destination);
     randomIndex = Math.floor(Math.random() * Math.floor(destinations.length));
}
  generateRandomTrip();