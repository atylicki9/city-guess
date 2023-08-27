import { City } from "./city";

export interface IGame {
    city: City?;
    streak: number;
    updateStreak: (additionalPoints: number) => void?;
    updateCity: () => void?;
}