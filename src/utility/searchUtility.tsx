import { City } from "./city";

// linear search O(n), will iterate through each item once
export function FindCities(citiesArray: City[], userInput: string): City[] 
{
    var foundCities = new Array;
    citiesArray.forEach(city => {
        if (city.name?.toUpperCase().includes(userInput.toUpperCase())) {
            foundCities.push(city.name)
        }
    });

    return foundCities;
}