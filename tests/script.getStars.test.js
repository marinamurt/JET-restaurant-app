const { getStars } = require("../script");

describe("getStars.js", () => {

    test("show correct amount of starts: 5", () => {
        expect(getStars(5)).toBe("⭐⭐⭐⭐⭐");

    })

    test("show correct amount of starts: 1", () => {
        expect(getStars(1)).toBe("⭐");

    })

    test("round the rating in starts correctly: less than .5", () => {
        expect(getStars(3.45)).toBe("⭐⭐⭐");

    })

    test("round the rating in starts correctly: more than .5", () => {
        expect(getStars(2.75)).toBe("⭐⭐⭐");

    })

    test("return empty string if rating is 0", () => {
        expect(getStars(0)).toBe("");

    })







})