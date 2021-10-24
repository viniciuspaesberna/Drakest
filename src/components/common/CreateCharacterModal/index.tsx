import ReactModal from "react-modal";
import React, { useRef, useCallback } from "react";
import { Scope } from "@unform/core";
import { Form } from "@unform/web";

import { Flex, Button } from "@chakra-ui/react";

import Heading from "./components/Heading";
import { AttributesList } from "./components/AttributesList";
import { ProficiencyBonus } from "./components/ProficiencyBonus";
import { InfosComponent } from "./components/InfosComponent";
import { calculateAmplifiers } from "../../../utils/calculateAmplifier";
import { SavingThrowsList } from "./components/SavingThrowsList";
import { SkillsList } from "./components/SkillsList";
import { AttributesInfosSummary } from "./components/AttibutesInforsSummary";

interface CreateCharacterModalProps{
  isOpen: boolean
  onClose: () => void
}

export function CreateCharacterModal({
  isOpen,
  onClose,
}: CreateCharacterModalProps){
  const formRef = useRef(null)

  
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
      
  function handleSubmit(data: any) {
    console.log(data)
  };

  return (
    <ReactModal
    isOpen={isOpen}
    onRequestClose={onClose}
    ariaHideApp={false}
    style={{
      content: {
        maxWidth: "1420px",
        width: "100%",
        margin: '0 auto',
        border: 0,
        borderRadius: "8px",
        backgroundColor: '#353646',
      },
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)"
      },
    }}
    >
      <Heading onRequestClose={onClose} />

      <Form
        ref={formRef}
        onSubmit={handleSubmit}
        >
        <Flex 
          display="flex"
          flexDir="column"
          >
          <InfosComponent />

          <Flex
            mt="4"
          >
            <AttributesList setAttributeAmplifier={setAttributeAmplifier} />

            <Flex
              maxW="18rem"
              flexDir="column"
              mr="6"
            >
              <Scope path="generalAmplifiers">
                <ProficiencyBonus setAttributeAmplifier={setAttributeAmplifier} />
                
                <SavingThrowsList setAttributeAmplifier={setAttributeAmplifier} />
                
                <SkillsList setAttributeAmplifier={setAttributeAmplifier} />
              </Scope>
            </Flex>

            <Flex
              maxW="35rem"
            >
              <Scope path="attributesSummary">
                <AttributesInfosSummary />
              </Scope>
            </Flex>
          </Flex>
        </Flex>
        <Button type="submit">submit</Button>
      </Form>
    </ReactModal>
  )
}