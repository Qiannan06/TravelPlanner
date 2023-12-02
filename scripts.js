// script.js

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the sections and content elements
  const flightSection = document.querySelector("#flight-section");
  const restaurantSection = document.querySelector("#restaurant-section");
  const hotelSection = document.querySelector("#hotel-section");
  const flightContent = document.querySelector("#flight-content");
  const restaurantContent = document.querySelector("#restaurant-content");
  const hotelContent = document.querySelector("#hotel-content");
  const costRangeContent = document.querySelector("#cost-range-content");

  // Get user input (replace this with your input mechanism)
  const destination = prompt("Enter your destination:");
  const country = prompt("Enter the country:");

  // Function to update section content based on user input
  function updateContent() {
    // Update Flight Details
    flightContent.innerHTML = `
      <img src="path/to/${country}_airline.jpg" alt="${country} Airline" id="flight-image">
      <p id="flight-cost">$171</p>
    `;

    // Update Restaurant Information
    restaurantContent.innerHTML = `
      <img src="path/to/${country}_restaurant.jpg" alt="${country} Restaurant" id="restaurant-image">
      <p id="restaurant-cost">$5</p>
    `;

    // Update Hotel Details
    hotelContent.innerHTML = `
      <img src="path/to/${country}_hotel.jpg" alt="${country} Hotel" id="hotel-image">
      <p id="hotel-cost">$300</p>
    `;

    // Update Cost Range Section
    costRangeContent.textContent = `Cost range for your trip to ${destination} in ${country}: $176 - $476`;
  }

  // Call the function to update content
  updateContent();
});
