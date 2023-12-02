document.addEventListener("DOMContentLoaded", function () {
  // Define sample data
  const flights = [
    { name: "Economy Class", cost: 300 },
    { name: "Business Class", cost: 700 },
    // Add more flight options as needed
  ];

  const restaurants = [
    { name: "Casual Dining", cost: 50 },
    { name: "Fine Dining", cost: 100 },
    // Add more restaurant options as needed
  ];

  const hotels = [
    { name: "Budget Hotel", cost: 80 },
    { name: "Luxury Hotel", cost: 200 },
    // Add more hotel options as needed
  ];

  // Budget limit
  const budget = 500;

  // Function to find the best choice within budget
  function findBestChoice(options) {
    return options.reduce(
      (bestChoice, currentOption) => {
        return currentOption.cost <= budget &&
          currentOption.cost > bestChoice.cost
          ? currentOption
          : bestChoice;
      },
      { name: "None", cost: 0 }
    );
  }

  // Find the best choices
  const bestFlight = findBestChoice(flights);
  const bestRestaurant = findBestChoice(restaurants);
  const bestHotel = findBestChoice(hotels);

  // Display the best choices on the webpage
  document.getElementById(
    "flight-details"
  ).innerHTML = `Best Flight: ${bestFlight.name} ($${bestFlight.cost})`;
  document.getElementById(
    "restaurant-details"
  ).innerHTML = `Best Restaurant: ${bestRestaurant.name} ($${bestRestaurant.cost})`;
  document.getElementById(
    "hotel-details"
  ).innerHTML = `Best Hotel: ${bestHotel.name} ($${bestHotel.cost})`;
});
