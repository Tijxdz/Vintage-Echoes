document.addEventListener("DOMContentLoaded", function() {
    // Get references to the search elements
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");
  
    // Add event listener to the search button
    searchButton.addEventListener("click", function() {
      var searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert to lowercase for case-insensitive search
  
      // Get all the product elements
      var products = document.querySelectorAll(".product");
  
      // Loop through each product and check if it matches the search term
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var albumName = product.querySelector("h3").innerText.toLowerCase(); // Get the album name of the product and convert to lowercase
        var artist = product.querySelector("p:nth-of-type(1)").innerText.toLowerCase(); // Get the artist name of the product and convert to lowercase
  
        // Check if the album name or artist contains the search term
        if (albumName.includes(searchTerm) || artist.includes(searchTerm)) {
          product.style.display = "block"; // Show the product if it matches the search term
        } else {
          product.style.display = "none"; // Hide the product if it doesn't match the search term
        }
      }
    });
  });