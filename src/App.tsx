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

export const citiesArray = GetCitiesArray();
export let currentCity = new City();

export const App = () => {

  const [streak, setStreak] = useState(getInitialStreak());

  function getInitialStreak(): number
  {
    if(!localStorage.getItem("CityGuessStreak"))
      {
        localStorage.setItem("CityGuessStreak", "0")
        return 0;
      }
    return Number(localStorage.getItem("CityGuessStreak"));
  }

  const updateStreak = (additionalPoints: number) => {
    const newStreak: number = ((streak  * additionalPoints) + additionalPoints);
    setStreak(newStreak); // will reset to 0 if wrong answer, otherwise will add 1
    localStorage.setItem("CityGuessStreak", newStreak.toString());
  };

  const [city, setCity] = useState(new City());
  const updateCity = () => city.updateCity();
  
  const [difficulty, setDifficulty] = useState("Hard");
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
