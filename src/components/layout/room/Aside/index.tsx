import { VStack } from "@chakra-ui/react";
import { TimersSection } from "../TimersSection";
import { DicesSection } from "../DicesSection";
import { motion } from "framer-motion"

interface AsideProps{
  isOpen: boolean
}

const appearVariants = {
  visible: {
    opacity: [0, 1],
    scale: [.8, 1],
    x: [-500, 0],
    width: "30rem",
    transition: {
      x: {
        duration: .5,
        ease: "easeInOut",
      },
      opacity: {
        duration: 1,
        ease: "easeInOut",
      },
      scale: {
        duration: .5,
        ease: "easeInOut",
      }
    }
  },
  hidden: {
    opacity: [1, 0],
    scale: [1, .8],
    x: [0, -500],
    width: 0,
    transition: {
      x: {
        duration: .5,
        ease: "easeInOut",
      },
      opacity: {
        duration: .5,
        ease: "easeInOut",
      },
      scale: {
        duration: .5,
        ease: "easeInOut",
      },
      width: {
        duration: .5,
        ease: "easeInOut"
      }
    }
  }
}

export function Aside({
  isOpen
}: AsideProps){
  return (
    <VStack
      as={motion.div}
      variants={appearVariants}
      animate={isOpen ? "visible" : "hidden"}
      h="100%"
      bg="gray.900"
      rounded="3xl"
      spacing="2"
      mb="4"
      px="2"
    >
      <DicesSection />

      <TimersSection />
    </VStack>
  )
}