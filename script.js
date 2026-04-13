const link = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"

const getRestaurants = async () => {
    let response = await fetch(link);

    let data = await response.json();

    data.restaurants.slice(0,10).forEach(restaurant => {
        const cuisines = restaurant.cuisines.map(cuisine => cuisine.name).join(",  ");

        const details = `
            <div>
                <h2>${restaurant.name}</h2>
                <h4>Rating: ${getStars(restaurant.rating.starRating)} (${restaurant.rating.starRating})</h4>
                <p>Cuisines: ${cuisines}</p>
                <p>Address: ${restaurant.address.firstLine}, ${restaurant.address.city}</p>
            </div>
        `;

        document.querySelector('#restaurants-container').insertAdjacentHTML('beforeend', details);
    });
}
const getStars = (rating) => {
    return '⭐'.repeat(Math.round(rating));
}
getRestaurants();