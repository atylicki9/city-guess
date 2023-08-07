import citiesJson from '../data/cities.json'

export class City {
    name?: string;
    latitude?: number;
    longitude?: number;

    constructor() {
        this.updateCity()
    }

    updateCity(): void {
        const randomIndex = Math.floor(Math.random() * citiesJson.length);
        let city = citiesJson[randomIndex];

        if (city == null)
        {
            throw new Error("Unable to find City in cities.json")
        }

        this.name = city.name;
        this.latitude = city.latitude;
        this.longitude = city.longitude;
    }
  }
