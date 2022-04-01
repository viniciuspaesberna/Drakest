import { useContext, useEffect, useState } from "react";
import { IoIosRefresh } from "react-icons/io"

import { Icon, SimpleGrid, Spinner } from "@chakra-ui/react";

import { Section, SectionHeading } from "../../../common";
import { AddCharacterButton } from "./AddCharacterButton"
import { api } from "../../../../services/api";
import { AuthContext } from "../../../../contexts/auth";
import { motion, Variants } from "framer-motion";
import { CharacterCard } from "../../../common/CharacterCard";
import { ConfirmModal } from "../../../common/ConfirmModal";
import { useQuery } from "react-query";

interface CharacterSectionProps{
  onOpen: () => void
  user: User
}

const rotateVariants: Variants = {
  rotate: {
    rotate: [0, 1],
    transition: {
      rotate: {
        duration: .5,
        type: "spring",
        ease: "easeInOut",
      },
    }
  },
}

export function CharacterSection({
  onOpen,
  user
}: CharacterSectionProps){
  const { isLoading, isError, data, error, isFetching } = useQuery('characters', async () => {
    return await api.get<any>('characters', {
      params: {
        email: user.email
      }, 
    })
  })

  return (
    <Section
      w="100%"
      flexDir="column"
      mb="1rem"
      bg="gray.800"
      rounded="md"
      position="relative"
    >
      <SectionHeading name="Personagens" mx="auto" />

      <SimpleGrid
        overflow="auto"
        templateColumns={["1fr","1fr 1fr 1fr"]}
        spacing="4"
        w="100%"
        mb="4"
        px="4"
        rounded="md"
        position="relative"
      >
        {isLoading && 
          <Spinner 
            position="absolute"
            right="50%"
            w="10"
            h="10"
          />
        }
        <AddCharacterButton onOpen={onOpen} />
        {
          data?.data.characters.map((character: any) => (
            <CharacterCard 
              key={character.data.id}
              characterId={character.data.id}
              character={character.data.characterSheet}
            />
          ))
        }
      </SimpleGrid>
      
      <motion.div
        whileTap={{ rotate: 360, }}
        style={{
          position: "absolute",
          top: "1.5rem",
          right: "4rem",
          transition: "all .1 ease"
        }}
      >
        <Icon
          as={IoIosRefresh}
          w="6"
          h="6"
          _hover={{
            transform: "scale(1.1)",
            cursor: 'pointer'
          }}
        />
      </motion.div>
    </Section>
  )
}