import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { NavBar } from "./components/navbar"
import MapboxMap from "./components/map"
import { GuessInput } from "./components/input"
import GameContext from "./context/gameContext";
import { City, GetCitiesArray } from "./utility/city";
import { useState } from "react";
import { DIFFICULTY_HARD, STREAK_LOCAL_STORAGE_ITEM } from "./common/constants";

export const citiesArray = GetCitiesArray();
export let currentCity = new City();

export const App = () => {

  const [streak, setStreak] = useState(getInitialStreak());

  function getInitialStreak(): number
  {
    if(!localStorage.getItem(STREAK_LOCAL_STORAGE_ITEM))
      {
        localStorage.setItem(STREAK_LOCAL_STORAGE_ITEM, "0")
        return 0;
      }
    return Number(localStorage.getItem(STREAK_LOCAL_STORAGE_ITEM));
  }

  const updateStreak = (additionalPoints: number) => {
    const newStreak: number = ((streak  * additionalPoints) + additionalPoints);
    setStreak(newStreak); // will reset to 0 if wrong answer, otherwise will add 1
    localStorage.setItem(STREAK_LOCAL_STORAGE_ITEM, newStreak.toString());
  };

  const [city, setCity] = useState(new City());
  const updateCity = () => city.updateCity();
  
  const [difficulty, setDifficulty] = useState(DIFFICULTY_HARD);
  const updateDifficulty = (newDifficulty: string) => {
    setDifficulty(newDifficulty);
  }

  return (
    <ChakraProvider theme={theme}>
      <GameContext.Provider value={{
        difficulty: difficulty,
        city: city,
        streak: streak,
        updateDifficulty: (newDifficulty: string) => updateDifficulty(newDifficulty),
        updateCity: () => updateCity(),
        updateStreak: (additionalPoints: number) => updateStreak(additionalPoints)
      }}>
        <Box textAlign="center" fontSize="xl">
          <NavBar/>
          <Grid minH="93vh" p={10}>
            <MapboxMap />
            <GuessInput />
          </Grid>
        </Box>
      </GameContext.Provider>
    </ChakraProvider>
  )
}
