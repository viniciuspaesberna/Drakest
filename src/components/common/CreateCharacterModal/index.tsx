import React, { useRef, useCallback, useContext } from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";

import { 
  Flex, 
  Stack,
  Modal,
  ModalOverlay,
  ModalContent
} from "@chakra-ui/react";

import Heading from "./components/Heading";
import { AttributesList } from "./components/AttributesList";
import { ProficiencyBonus } from "./components/ProficiencyBonus";
import { InfosComponent } from "./components/InfosComponent";
import { calculateAmplifiers } from "../../../utils/calculateAmplifier";
import { SavingThrowsList } from "./components/SavingThrowsList";
import { SkillsList } from "./components/SkillsList";
import { AttributesInfosSummary } from "./components/AttibutesInforsSummary";
import { Inventory } from "./components/Inventory";
import { PersonalitySection } from "./components/PersonalitySection";
import { CreateCharacterTextarea } from "./CreateCharacterTextarea";
import { AppearenceGrid } from "./components/AppearenceGrid";
import { CharacterHistory } from "./components/CharacterHistory";
import { Triumph } from "./components/Triumph";
import { SpellsSection } from "./components/SpellsSection";

import { api } from "../../../services/api";
import { AuthContext } from "../../../contexts/auth";
import { v4 } from "uuid";
import axios from "axios";

interface CreateCharacterModalProps{
  isOpen: boolean
  onClose: () => void
  close: () => void
}

export function CreateCharacterModal({
  isOpen,
  onClose,
  close
}: CreateCharacterModalProps){
  const formRef = useRef(null)
  const { user } = useContext(AuthContext)
  
  const setAttributeAmplifier = useCallback((attributeName: string, attributeBased?: string) => {
    const currentProficiencyBonusValue = formRef.current.getFieldValue('generalAmplifiers.proficiencyBonus')
    
    if(attributeBased === "all"){
      const basedsAttributes = [
        {
          name: 'strength',
          skills: ['athletics']
        },
        {
          name: 'dexterity',
          skills: ['acrobatics', 'stealth', 'sleightOfHand']
        },
        {
          name: 'constitution',
          skills: []
        },
        {
          name: 'intelligence',
          skills: ['arcana', 'history', 'investigation', 'nature', 'religion']
        },
        {
          name: 'wisdom',
          skills: ['insight', 'animalHandling', 'medicine', 'perception', 'survival']
        },
        {
          name: 'charisma',
          skills: ['performace', 'deception', 'intimidation', 'persuasion']
        },
      ]
      
      basedsAttributes.forEach(basedAttribute => {
        basedAttribute.skills.forEach(skillName => {
          const isSkillProficiencyActive = formRef.current.getFieldValue(`generalAmplifiers.skills.${skillName}CheckBox`)
          const currentAttributeBasedAmplifier = String(calculateAmplifiers(formRef.current.getFieldValue('attributes.' + basedAttribute.name)))
          
          formRef.current.setFieldValue(
            `generalAmplifiers.skills.${skillName}`,
            isSkillProficiencyActive 
            ? String(Number(currentAttributeBasedAmplifier) + Number(currentProficiencyBonusValue))
              : currentAttributeBasedAmplifier
              )
            })
      })
    }
    
    if(attributeName === "all"){
      const attributesNames = [
        'strength',
        'dexterity',
        'constitution',
        'intelligence',
        'wisdom',
        'charisma'
      ]
      
      for (let index = 0; index <= 5; index++){
        const currentAttributeAmplifier = String(calculateAmplifiers(formRef.current.getFieldValue('attributes.' + attributesNames[index])))
        const isSavingThrowActive = formRef.current.getFieldValue(`generalAmplifiers.savingThrows.${attributesNames[index]}CheckBox`)
        
        formRef.current.setFieldValue(
          `generalAmplifiers.savingThrows.${attributesNames[index]}`,
          isSavingThrowActive 
          ? String(Number(currentAttributeAmplifier) + Number(currentProficiencyBonusValue))
          : currentAttributeAmplifier
          )
        }
      
      return
    }
    
    const currentAttributeAmplifier = String(calculateAmplifiers(formRef.current.getFieldValue('attributes.' + attributeName)))
    const isSavingThrowProficiencyActive = formRef.current.getFieldValue(`generalAmplifiers.savingThrows.${attributeName}CheckBox`)
    
    formRef.current.setFieldValue(
      `attributes.${attributeName}Amplifier`, 
      currentAttributeAmplifier
      )
      
      formRef.current.setFieldValue(
        `generalAmplifiers.savingThrows.${attributeName}`,
        isSavingThrowProficiencyActive 
        ? String(Number(currentAttributeAmplifier) + Number(currentProficiencyBonusValue))
        : currentAttributeAmplifier
        )
  }, [])
      
  async function handleSubmit(data: CharacterSheet) {

    await api.post('characters', {
      data: {
        user,
        characterSheet: {
          ...data,
          appearence: {
            ...data.appearence,
          }
        }
      }
    })
    close()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={close}
    >
      <ModalOverlay bg="rgba(0, 0, 0, 0.6)" />
      <ModalContent
        maxW="1420px"
        width="100%"
        margin="auto"
        border="0"
        p="4"
        my="6"
        borderRadius="8px"
        bg="#353646"
      >
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          style={{
            position: "relative"
          }}
        >
          <Heading onRequestClose={onClose} />

          <Flex 
            mt="14"
            display="flex"
            flexDir="column"
          >
            <InfosComponent />

            <Stack
              mt="4"
              direction="row"
              spacing="4"
            >
              <AttributesList setAttributeAmplifier={setAttributeAmplifier} />

              <Flex
                maxW="18rem"
                flexDir="column"
              >
                <Scope path="generalAmplifiers">
                  <ProficiencyBonus setAttributeAmplifier={setAttributeAmplifier} />
                  
                  <SavingThrowsList setAttributeAmplifier={setAttributeAmplifier} />
                  
                  <SkillsList setAttributeAmplifier={setAttributeAmplifier} />
                </Scope>
              </Flex>

              <Flex
                maxW="32rem"
                flexDir="column"
              >
                <AttributesInfosSummary />
                
                <Inventory />
              </Flex>

              <Flex
                flex="1"
              >
                <PersonalitySection />
              </Flex>
            </Stack>

            <Stack
              spacing="4"
              mt="4"
            >
              <Stack
                w="100%"
                spacing="4"
                direction="row"
              >
                <Scope path="inventory">
                  <CreateCharacterTextarea 
                    name="languagesAndOtherSkills"
                    placeholder="Línguas e outras perícias"
                    w="45%"
                    h="40"
                  />
                </Scope>
                
                <AppearenceGrid />
              </Stack>

              <CharacterHistory />

              <Triumph />

              <SpellsSection />
            </Stack>
          </Flex>
        </Form>
      </ModalContent>
    </Modal>
  )
}