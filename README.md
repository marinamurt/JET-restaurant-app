# JET Restaurant App

Made a small frontend Webapp that fetches and displays restaurant data (name, cuisine, address and rating -- were required) from the Just Eat Discovery API by postcode (only UK version).

## Prerequisites

- Node.js (LTS recommended)
- npm
- Modern browser (Chrome/Edge/Firefox)

## Frameworks / Environment (from package.json)

- App: vanilla JavaScript, HTML, and CSS (no frontend framework)
- Runtime/environment: Node.js + npm
- Test framework: Jest
- Test environment: jsdom (`jest-environment-jsdom`)

## Build / Compile / Run

This project is a plain HTML/CSS/JavaScript app:

- **Install (terminal commands):**
  1. Install Node.js (LTS), which includes npm: [https://nodejs.org/](https://nodejs.org/)
  2. Install project dependencies from the root:
     ```bash
     npm install
     ```
  3. If needed when setting up from scratch, install test dependencies explicitly:
     ```bash
     npm install --save-dev jest jest-environment-jsdom
     ```
- **Build:** no build step is required.
- **Compile:** no compile/transpile step is required.
- **Run locally:**
  1. Start a local static server (for example, VS Code Live Server), then open `index.html`.
  2. Enter a UK formatted postcode and click **Search** (or press Enter).

## Tests

Run:

```bash
npm test
```

## Assumptions / Unclear Points

- the fetching and displaying is only done to the first 10 restaurants.
- Was assumed filtering based on postcode was necessary so i made it with the search bar.
- Was assumed direct client-side calls to the Discovery API were allowed.
- At the beggining i got some CORS errors in the browser and used a browser CORS extension to view the web app instead of other options.
- It was not fully clear whether a backend proxy was expected to handle API requests and avoid browser CORS restrictions.
- Was assumed that i could use other data points from the restaurant object. Not only the 4 that were required.
- Was unsure if unit tests were required or not since in the assignment pdf it was not specified.

## Improvements I Would Make

- Add a small backend proxy (Node/Express) so API calls do not rely on a browser CORS extension.
- Add loading, empty state, and error UI messages for better UX.
- Add more options to the filter on the search bar or add some separate filtering options. Could be based on city, rating or cousine.
- Load more restaurant items instead of only slicing it to the first 10.
- Make more unit or integration tests for better coverage (API error handling, rendering behavior, input edge cases).
- improve the overall look of the WEbapp.
- Make the webapp mobile friendly (i tested different mobile views and it didnt look that good).