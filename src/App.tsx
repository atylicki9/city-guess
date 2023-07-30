import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { Logo } from "./Logo"
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
