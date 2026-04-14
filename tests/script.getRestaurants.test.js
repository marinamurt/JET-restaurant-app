const {getRestaurants} = require("../script.js");

describe("getRestaurants", () => {

    beforeEach(() => {
        //to reset DOM before each test
        document.body.innerHTML = `<div id="restaurants-container"></div>`;
        global.fetch = jest.fn();

    });
    test("fetching and rendering restaurants correctly", async () => {

        // API response mock
        fetch.mockResolvedValue({
            json: () => Promise.resolve({
                restaurants: [
                    {name: "Mock Restaurant",
                        cuisines: [{ name: "Asian" }, { name: "Chinese" }, { name: "Indian" }],
                        deals: [{ description: "50% off selected items" }, { description: "1 + 1 free on selected items" }],
                        logoUrl: "logo.jpg",
                        rating: { starRating: 3.55 },
                        address: {
                            firstLine: "Mock 34a Street",
                            city: "Liverpool"
                        }
                    }
                ]
            })
        });

        // the call function
        await getRestaurants("CT12EH");

        const container = document.querySelector("#restaurants-container");



        // tests where i see if all the components of the card are there (with expect)
        expect(fetch).toHaveBeenCalled(); // API called
        expect(container.innerHTML).toContain("Mock Restaurant");
        expect(container.innerHTML).toContain("Cuisines");
        expect(container.innerHTML).toContain("Asian");
        expect(container.innerHTML).toContain("Chinese");
        expect(container.innerHTML).toContain("Indian");
        expect(container.innerHTML).toContain("50% off selected items");
        expect(container.innerHTML).toContain("1 + 1 free on selected items");
        expect(container.innerHTML).toContain("logo.jpg");

        expect(container.innerHTML).toContain("Rating");

        expect(container.innerHTML).toContain("⭐⭐⭐⭐");






        expect(container.innerHTML).toContain("Mock 34a Street");
        expect(container.innerHTML).toContain("Liverpool");
        expect(container.innerHTML).toContain("Address");

    });



})