import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Aside(){
  const [sec, setSec] = useState(3)
  const [min, setMin] = useState(0)

  useEffect(() => {
    setTimeout(updateCountdown, 1000)
  }, [sec, min])

  const updateCountdown = () => {

    if(sec > 0){
      setSec((sec - 1))
    } else if (sec === 0){
      setSec(59)
    } 

    if(min > 0 && sec === 0){
      setMin(min - 1)
    } else if (min === 0 && sec === 0){
      setMin(15)
      setSec(0)
    } 
  }

  


  return (
    <Flex
      as="aside"
      bg="gray.900"
      w="25rem"
      h=""
      ml="2rem"
      my="2rem"
    >
      <Text>Min {min}</Text>
      <Text>Sec {sec}</Text>
    </Flex>
  )
}