import {Flex, Button, Input} from '@chakra-ui/react'
import './guessinput.css';
import { currentCity  } from '../map/index';
import React, {useState} from 'react';

let text: String;

const handleGuessSubmission = () => {

    console.log(`Entered Text: ${text}`)
    if (currentCity?.name == text) {
        console.log("CORRECT")
    }
    else {
        
        console.log(`WRONG, correct answer was ${currentCity?.name}`)
    }

    text = "";
}

export function GuessInput() {

    const [text, setValue] = React.useState('')
    const handleChange = () => setValue(text)
    
    return (
        <Flex className="inputFlex"> 
            <Input
                value = {text}
                textColor={"white"}
                marginRight={15}
                borderRadius={15}
                backgroundColor={"#1A202C"}
                onChange={handleChange}
            />
            <Button
                backgroundColor={"#1A202C"}
                borderRadius={15}
                onClick={handleGuessSubmission}
            >
                Guess
            </Button>
        </Flex>
    )
  }