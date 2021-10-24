import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    opacity: [0, 1],
    scale: [1, 1.1],
    transition: {
      opacity: {
        reverse: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
      scale: {
        reverse: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      }
    }
  }
}

export function Loading(){
  return (
    <Flex w="100vw" h="100vh" bg="gray.800" align="center" justify="center">
      <motion.div
        variants={loaderVariants}
        animate="animationOne"
      >
        <Text 
          fontFamily="aclonica" 
          fontSize={["7xl","9xl"]} 
          color="yellow.500"
        >
          Drakest
        </Text>
      </motion.div>
    </Flex>
  )
}