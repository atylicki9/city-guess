import './navbar.css';
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Box, Flex, Spacer, Button } from '@chakra-ui/react'

export function NavBar() {

    const refreshPage = ( () =>  { window.location.reload() })

    return (
        <nav className="navbar-container">
            <Flex height="5vh">
                <Box className="navbar-box">
                    <h1 onClick={refreshPage}>City Guesser</h1>
                </Box>
                <Spacer  height={1}/>
                <Box className="navbar-box">
                    <h1>0 Points</h1>
                </Box>
            </Flex>
        </nav>
    );
  }
  