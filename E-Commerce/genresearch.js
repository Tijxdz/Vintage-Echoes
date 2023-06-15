document.addEventListener("DOMContentLoaded", function () {
    // Get references to the search elements
    var searchInput = document.getElementById("search-input");
    var searchButton = document.getElementById("search-button");

    searchButton.addEventListener("click", function () {
        var searchTerm = searchInput.value.toLowerCase(); // Get the search term and convert to lowercase for case-insensitive search

        var genres = document.querySelectorAll(".genre");

        // Loop through each product and check if it matches the search term
        for (var i = 0; i < genres.length; i++) {
            var genre = genres[i];
            var genreName = genre.querySelector("h3").innerText.toLowerCase();

            // Check if the album name or artist contains the search term
            if (genreName.includes(searchTerm)) {
                genre.style.display = "block";
            } else {
                genre.style.display = "none";
            }
        }
    });
});