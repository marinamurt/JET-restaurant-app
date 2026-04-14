//below the base API endpoint url
const baseLink = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/{postcode}"

//function to fetch the: restaurant objects and the relevant data endpoints from the API
const getRestaurants = async (postcode) => {
    const link = baseLink.replace("{postcode}", postcode);

    const response = await fetch(link);

    let data = await response.json();
    // clear previous results for the search
    document.querySelector('#restaurants-container').innerHTML = "";

    // for each restaurant object we only get the first 10 results
    data.restaurants.slice(0,10).forEach(restaurant => {
        const cuisines = restaurant.cuisines.map(cuisine => cuisine.name).join(",  ");
        const deals = restaurant.deals.map(deal => deal.description).join(" ");

//make a restaurant card using data from a restaurant object.
        const details = `
            <div class = "details">
            <img class="rest-logo" src=${restaurant.logoUrl} alt="">
            <h3 class = "rest-deals"> ${deals}</h3>
                <h2 class="rest-name">${restaurant.name}</h2>
                <h4 class = "rest-rating">Rating: ${getStars(restaurant.rating.starRating)} (${restaurant.rating.starRating})</h4>
                <p class = "rest-cuisines"><b>Cuisines:</b> ${cuisines}</p>
                <p class = "rest-adress"><b>Address:</b> ${restaurant.address.firstLine}, ${restaurant.address.city}</p>
            </div>
        `;

        document.querySelector('#restaurants-container').insertAdjacentHTML('beforeend', details);
    });
}


//function to get the rating in form of stars (with rounding)
const getStars = (rating) => {
    return '⭐'.repeat(Math.round(rating));
}


if (typeof document !== "undefined") {
// Code for the search bar -- event listener to do the search
    document.addEventListener("DOMContentLoaded", () => {

        const input = document.getElementById("postcode-input");
        const button = document.getElementById("search-button");
        // for click
        button.addEventListener("click", async () => {
            const postcode = input.value.trim(); //remove accidental spaces
            if (postcode) {
                 await getRestaurants(postcode);
            }
        });

        //for Enter
        input.addEventListener("keypress",  async (e) => {
            if (e.key === "Enter") {
                const postcode = input.value.trim();
                if (postcode) {
                   await getRestaurants(postcode);
                }
            }
        });


    });
}

if (typeof module !== "undefined") {
    module.exports = { getRestaurants, getStars };
}