import {Flex, Button, Input} from '@chakra-ui/react'
import './guessinput.css';
import React, {useState} from 'react';
import { useToast } from '@chakra-ui/react'
import { City } from '../../utility/city';

interface Props{
    city: City
}

export function GuessInput(props: Props) {

    let [value, setValue] = React.useState('')
    const updateText = (event: { target: { value: React.SetStateAction<string>; }; }) => setValue(event.target.value)
    const clearText = () => setValue("")
    const toast = useToast()
    

    const handleGuessSubmission = () => {

        console.log(`Entered Text: ${value}`)
        if (props.city.name == null)
        {
            throw Error ("Unable to find City Name")
        }
            
        if (props.city?.name.includes(value)) {
            toast({
                title: 'Correct!',
                description: "Congrats, that was the correct answer!",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
            props.city.updateCity();
        }
        else {
            
            console.log(`WRONG, correct answer was ${props.city?.name}`)
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