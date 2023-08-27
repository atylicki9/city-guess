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
  const [streak, setStreak] = useState(0);
  const updateStreak = (additionalPoints: number) => {
    setStreak((streak  * additionalPoints) + additionalPoints); // will reset to 0 if wrong answer, otherwise will add 1
  };

  const [city, setCity] = useState(new City());
  const updateCity = () => {
    city.updateCity();
  };

  return (
    <ChakraProvider theme={theme}>
      <GameContext.Provider value={{
        city: city,
        streak: streak,
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
