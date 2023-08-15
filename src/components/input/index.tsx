import {Flex, Input} from '@chakra-ui/react'
import './guessinput.css';
import React, { useContext, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import GameContext from '../../context/gameContext';
import { citiesArray } from '../../App';
import { FindCities } from '../../utility/city';

export function GuessInput() {

    const { city, updateCity, updateScore } = useContext(GameContext);

    let [value, setValue] = useState('');
    const [result, setResult] = useState(new Array);

    const onItemSelection: any = (event: { target: { innerText: React.SetStateAction<string>; }; }) => {
        setValue(event.target.innerText);
        setResult([]);
     };

    const updateText = (event: { target: { value: any; }; }) => {
        const userInput = event.target.value;
        setValue(userInput);
       // search cities json
       if (citiesArray == null)
       {
           throw Error ("City array is empty");
       }
       var foundCities = FindCities(citiesArray, userInput.toString());
       userInput.trim() != "" ? setResult(foundCities) : setResult([]);
    };
    
    const clearText = () => setValue("")
    const toast = useToast()

    const handleGuessSubmission = () => {

        console.log(`Entered Text: ${value}`)
        if (city.name == null)
        {
            throw Error ("Unable to find City Name")
        }

        if (value.trim() != "" && city?.name.toUpperCase().includes(value.toUpperCase())) {
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
        <div className='wrapper'>
            <Input
                value={value}
                textColor={"white"}
                marginRight={15}
                borderRadius={15}
                backgroundColor={"#1A202C"}
                onChange={updateText}

            />
            <div className="list">
            {result.map((item, index) => (
                <div className="list-item"
                    key={index}
                    id={`list-item-${index}`}
                    onClick={onItemSelection}
                >
                {item}
                </div>
   ))}
            </div>
        </div>
            <button
                className="guessButton"
                onClick={handleGuessSubmission}
            >
                Guess
            </button>
        </Flex>
    )
  }
  