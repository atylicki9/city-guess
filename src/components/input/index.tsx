import { Box, Flex, Button, Input, Spacer, color, background } from '@chakra-ui/react'
import './guessinput.css';

export function GuessInput() {
    return (
        <Flex className="inputFlex"> 
            <Input
                textColor={"white"}
                marginRight={15}
                borderRadius={15}
                backgroundColor={"#1A202C"}
            />
            <Button
                backgroundColor={"#1A202C"}
                borderRadius={15}
            >
                Guess
            </Button>
        </Flex>
    )
  }