import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { NavBar } from "./components/navbar"
import MapboxMap from "./components/map"
import { GuessInput } from "./components/input"
import { City } from "./utility/city";

export let currentCity = new City();
export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <NavBar/>
      <Grid minH="93vh" p={10}>
        <MapboxMap city={currentCity}/>
        <GuessInput city={currentCity}/>
      </Grid>
    </Box>
  </ChakraProvider>
)
