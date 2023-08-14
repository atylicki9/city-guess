import {Flex, Input} from '@chakra-ui/react'
import './guessinput.css';
import React, { useContext } from 'react';
import { useToast } from '@chakra-ui/react'
import GameContext from '../../context/gameContext';

export function GuessInput() {

    const { city, updateCity, updateScore } = useContext(GameContext);

    let [value, setValue] = React.useState('')
    const updateText = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value)
    const clearText = () => setValue("")
    const toast = useToast()

    const handleGuessSubmission = () => {

        console.log(`Entered Text: ${value}`)
        if (city.name == null)
        {
            throw Error ("Unable to find City Name")
        }

        if (value.trim() != "" && city?.name.includes(value)) {
            toast({
                title: '+1000 points.',
                description: "Correct!, that was the correct answer!",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            updateCity();
            updateScore(1000)
        }
        else {
            toast({
                title: '-100 points',
                description: "Read a book loser.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
              updateScore(-100)
        }

        clearText();
    }

    return (
        <Flex className="inputFlex"> 
            <Input
                value={value}
                textColor={"white"}
                marginRight={15}
                borderRadius={15}
                backgroundColor={"#1A202C"}
                onChange={updateText}

            />
            <button
                className="guessButton"
                onClick={handleGuessSubmission}
            >
                Guess
            </button>
        </Flex>
    )
  }
  