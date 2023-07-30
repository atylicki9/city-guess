import './navbar.css';
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Box, Flex, Spacer } from '@chakra-ui/react'

export function NavBar() {
    return (
        <nav className="navbar-container">
            <Flex height="5vh">
                <Box className="navbar-box">
                <h1>City Guesser</h1>
                </Box>
                <Spacer  height={1}/>
                <Box className="navbar-box">
                    <h1>Score: 100/100 </h1>
                </Box>
            </Flex>
        </nav>
    );
  }
  