import { City } from "./city";

export interface IGame {
    difficulty: string
    city: City?;
    streak: number;
    updateStreak: (additionalPoints: number) => void?;
    updateDifficulty: (newDifficulty: string) => void?;
    updateCity: () => void?;
}