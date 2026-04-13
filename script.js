const link = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"

const getRestaurants = async () => {
    let response = await fetch(link);

    let data = await response.json();

    data.restaurants.slice(0,10).forEach(restaurant => {
        const name = `<li>${restaurant.name}</li>`;

        document.querySelector('div').insertAdjacentHTML('beforeend', name);

    });
}
getRestaurants();

