import {Flex, Button, Input} from '@chakra-ui/react'
import './guessinput.css';
import MapboxMap, { currentCity  } from '../map/index';
import React, {useState} from 'react';
import { useToast } from '@chakra-ui/react'

export function GuessInput() {

    let [value, setValue] = React.useState('')
    const updateText = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value)
    const clearText = () => setValue("")
    const toast = useToast()
    

    const handleGuessSubmission = () => {

        console.log(`Entered Text: ${value}`)
        if (currentCity?.name.includes(value)) {
            toast({
                title: 'Correct!',
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            window.location.reload() // figure out how to rerender map
        }
        else {
            
            console.log(`WRONG, correct answer was ${currentCity?.name}`)
            toast({
                title: 'Wrong.',
                description: "Read a book loser.",
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
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