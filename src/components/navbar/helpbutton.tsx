import { SettingsIcon } from "@chakra-ui/icons"
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, useDisclosure } from "@chakra-ui/react"
import GameContext from '../../context/gameContext';
import React, { useContext, useState } from 'react';
import { DIFFICULTY_EASY, DIFFICULTY_HARD, DIFFICULTY_IMPOSSIBLE, DIFFICULTY_MEDIUM } from "../../common/constants";

export function HelpButton() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { difficulty, updateDifficulty } = useContext(GameContext);
    const [ dropdownDifficulty, setDropdownDifficulty ] = useState(difficulty.toString());

    function changeDifficulty (newDifficulty: string) {
      setDropdownDifficulty(newDifficulty);
      updateDifficulty(newDifficulty);
    }

    return (
      <>
        <Button onClick={onOpen}><SettingsIcon/></Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Directions</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              The game is simple. Based on the map provided, guess the city. 
              Each correct answer will add to your streak and any wrong answers will set the 
              streak back to 0. <br/>
            </ModalBody>
            <ModalHeader>Difficulty</ModalHeader>
            <Select value={dropdownDifficulty}  onChange={e => changeDifficulty(e.target.value)} width='80%' margin='auto'>
              <option value={DIFFICULTY_EASY}>Easy</option>
              <option value={DIFFICULTY_MEDIUM}>Medium</option>
              <option value={DIFFICULTY_HARD}>Hard</option>
              <option value={DIFFICULTY_IMPOSSIBLE}>Impossible</option>
            </Select>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }