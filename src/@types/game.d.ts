import { City } from "./city";

export interface IGame {
    city: City?;
    score: number;
    updateScore: (additionalPoints: number) => void?;
    updateCity: () => void?;
}