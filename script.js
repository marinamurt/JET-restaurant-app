const link = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"

const getRestaurants = async () => {
    let response = await fetch(link);

    let data = await response.json();

    data.restaurants.slice(0,10).forEach(restaurant => {
        const cuisines = restaurant.cuisines.map(cuisine => cuisine.name).join(",  ");

        const details = `
            <div class = "details">
                <h2 class="rest-name">${restaurant.name}</h2>
                <h4 class = "rest-rating">Rating: ${getStars(restaurant.rating.starRating)} (${restaurant.rating.starRating})</h4>
                <p class = "rest-cuisines"><b>Cuisines:</b> ${cuisines}</p>
                <p class = "rest-adress"><b>Address:</b> ${restaurant.address.firstLine}, ${restaurant.address.city}</p>
            </div>
        `;

        document.querySelector('#restaurants-container').insertAdjacentHTML('beforeend', details);
    });
}
const getStars = (rating) => {
    return '⭐'.repeat(Math.round(rating));
}
getRestaurants();