# City Guess by Aaron Tylicki

## About
App inspired by GeoGuesser that uses street grids and landmarks on a map to make a guessing game for Global Cities.
This app was built using React and Typescript.

## Local Running
### Map Box API 
Create a file titled mapboxConfig.ts in the map component folder:
    `src/components/map/mapboxConfig.ts`

Add the following code with your mapbox api token in it to run locally:
    `export const mapboxApiToken = 'Insert Your API Key Here';`

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

## Future Work 
1. Fix refresh issue in useEffect for the Map. I would only like the map to refresh when the city changes.
2. Add an easy, medium and hard more that provides different levels of detail.
3. Use cookies to make the game into a Wordle style daily game that allows users to track their daily stats and guess a new city every day.
