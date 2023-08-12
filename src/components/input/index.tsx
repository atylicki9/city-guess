import {Flex, Button, Input} from '@chakra-ui/react'
import './guessinput.css';
import React, {useContext, useState} from 'react';
import { useToast } from '@chakra-ui/react'
import { City } from '../../utility/city';
import GameContext from '../../context/gameContext';

export function GuessInput() {

    const { city, score, updateCity, updateScore } = useContext(GameContext);

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
            
        if (city?.name.includes(value)) {
            toast({
                title: 'Correct! +1000 points.',
                description: "Congrats, that was the correct answer!",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            updateCity();
            updateScore(1000)
        }
        else {
            
            console.log(`WRONG, correct answer was ${city?.name}`)
            toast({
                title: 'Wrong. -100 points',
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
            <Button
                backgroundColor={"#1A202C"}
                borderRadius={15}
                variant={'solid'}
                onClick={handleGuessSubmission}
            >
                Guess
            </Button>
        </Flex>
    )
  }