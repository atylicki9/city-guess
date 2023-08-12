import './navbar.css';
import { Box, Flex, Spacer } from '@chakra-ui/react'
import GameContext from '../../context/gameContext';
import { useContext } from 'react';

export function NavBar() {

    const refreshPage = ( () =>  { window.location.reload() })
    const { score } = useContext(GameContext);
    return (
        <nav className="navbar-container">
            <Flex height="5vh">
                <Box className="navbar-box">
                    <h1 onClick={refreshPage}>City Guesser</h1>
                </Box>
                <Spacer  height={1}/>
                <Box className="navbar-box">
                    <h1>{score} Points</h1>
                </Box>
            </Flex>
        </nav>
    );
  }
  