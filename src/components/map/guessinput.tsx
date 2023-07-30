import { Box, Flex, Button, Input, Spacer } from '@chakra-ui/react'

export function GuessInput() {
    return (
        <Flex> 
            <Box width= '25%'/> 
            <Spacer/>
            <Input
            pr='4.5rem'

            placeholder='What city is this?'
            />
            <Spacer/>
            <Box width= '25%'/> 
            <Spacer/>
            <Button>Guess</Button>
            <Box width= '25%'/> 
        </Flex>
    )
  }