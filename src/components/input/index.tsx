import {Flex, Input} from '@chakra-ui/react'
import './guessinput.css';
import React, { useContext, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import GameContext from '../../context/gameContext';
import { citiesArray } from '../../App';
import { FindCities } from '../../utility/searchUtility';
import { AreCloseEnough } from '../../utility/stringSimilarityUtility';

export function GuessInput() {
    const { city, updateCity, updateStreak } = useContext(GameContext);
    const [value, setValue] = useState('');
    const [result, setResult] = useState(new Array);

    const onItemSelection: any = (event: { target: { innerText: React.SetStateAction<string>; }; }) => {
        setValue(event.target.innerText);
        setResult([]);
     };

    const updateText = (event: { target: { value: any; }; }) => {
        const userInput = event.target.value;
        setValue(userInput);
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

        if (value.trim() != "" && AreCloseEnough(city?.name.toUpperCase(),value.toUpperCase())) {
            toast({
                title: 'Correct!',
                description: "That was the right answer!",
                status: 'success',
                duration: 4000,
                isClosable: true,
              })
            updateCity();
            updateStreak(1)
        }
        else {
            toast({
                title: 'Wrong',
                description: "Sorry! Please try again.",
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
              updateStreak(0)
        }

        clearText();
        setResult([]);
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
  