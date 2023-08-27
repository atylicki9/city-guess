import { createContext } from 'react';
import { IGame } from '../@types/game';

const newGameState: IGame =
{
    city: null,
    streak: 0,
    updateStreak: function (additionalPoints: number): void | null {
        throw new Error('Function not implemented.');
    },
    updateCity: function (): void | null {
        throw new Error('Function not implemented.');
    }
}

const GameContext = createContext<IGame>(newGameState);

export default GameContext;