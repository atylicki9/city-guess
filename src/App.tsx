import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { NavBar } from "./components/navbar"
import { Map } from "./components/map"
import { GuessInput } from "./components/input"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <NavBar/>
      <Grid minH="93vh" p={10}>
        <Map/>
        <GuessInput />
      </Grid>
    </Box>
  </ChakraProvider>
)
