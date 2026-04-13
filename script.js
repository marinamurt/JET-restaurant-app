const link = "https://uk.api.just-eat.io/discovery/uk/restaurants/enriched/bypostcode/EC4M7RF"

const getRestaurants = async () => {
    console.log("getting restaurants...");
    let response = await fetch(link);
    let restData = await response.json();
    console.log(restData)

}

getRestaurants();