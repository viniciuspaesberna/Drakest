import { useEffect, useState } from "react";
import { BsFillPlayFill, BsFillPauseFill, BsFillStopFill } from "react-icons/bs";

import { Flex, HStack, IconButton, Input, Text, useToast } from "@chakra-ui/react";
import useSound from "use-sound";

export function Countdown(){
  const [isPause, setIsPause] = useState(true)
  const [over, setOver] = useState(false)
  
  const [hours, setHours] = useState<number | string>("00")
  const [mins, setMins] = useState<number | string>("00")
  const [sec, setSec] = useState<number | string>("00")

  const toast = useToast()
  const [play] = useSound('/sounds/timeOut.wav')

  useEffect(() => {
    if (hours != 0 || mins != 0 || sec != 0) setOver(false);

    if (hours > 59 || mins > 59 || sec > 59) {
      toast.closeAll()
      toast({
        status: "error",
        title: "Erro",
        description: "Coloque um tempo válido!",
        duration: 3000,
      })
      reset()
    }

    const startCountdown = setInterval(() => tick(), 1000)
    return () => clearInterval(startCountdown);
  }, [isPause, sec, mins, hours])

  const tick = () => {
    if (isPause || over) return 
    
    if (hours == "" || mins == "" || sec == "") reset()
    if (hours == "00" && mins == "00" && sec == "00") {
      play()
      reset()
    }

    else if (mins == "00" && sec == "00") {
      let newNumber: number | string = Number(hours) - 1 

      if (Number(newNumber) < 10) {
        newNumber = "0" + newNumber
      }

      setHours(newNumber)
      setMins("59")
      setSec("59")
    } 

    else if (sec == "00") {
      let newNumber: number | string = Number(mins) - 1 

      if (Number(newNumber) < 10) {
        newNumber = "0" + newNumber
      }

      setMins(newNumber)
      setSec("59")
    } 

    else {
      let newNumber: number | string = Number(sec) - 1 

      if (Number(newNumber) < 10) {
        newNumber = "0" + newNumber
      }

      setSec(newNumber)
    }
  }

  const reset = () => {
    setHours("00")
    setMins("00")
    setSec("00")
    setOver(true)
    setIsPause(true)
  }

  return (
    <Flex
      align="center"
    >
      <Text 
        fontWeight="bold"
      >
        Temporizador:
      </Text>

      <HStack
        ml="6"
      >
        <Input
          type="number"
          value={hours}
          onChange={e => isPause ? setHours(e.target.value) : ""}
          disabled={!isPause}
          mx="0"
          variant="unstyled"
          textAlign="center"
          width="10"
          p="0"
          height="fit-content"
          fontSize="2xl"
        />

        <Text>:</Text>
        
        <Input
          type="number"
          value={mins}
          onChange={e => isPause && setMins(e.target.value)}
          disabled={!isPause}
          mx="0"
          variant="unstyled"
          textAlign="center"
          width="10"
          p="0"
          height="fit-content"
          fontSize="2xl"
        />
        
        <Text>:</Text>
        
        <Input
          type="number"
          value={sec}
          onChange={e => isPause && setSec(e.target.value)}
          disabled={!isPause}
          mx="0"
          variant="unstyled"
          textAlign="center"
          width="10"
          p="0"
          height="fit-content"
          fontSize="2xl"
        />
      </HStack>

      <HStack
        ml="6"
      >
        <IconButton
          aria-label="play/pause"
          colorScheme="yellow"
          _focus={{}}
          onClick={() => {
            setIsPause(!isPause)
          }}
        > 
          { isPause 
              ? <BsFillPlayFill size="24" />
              : <BsFillPauseFill size="24" />
          }
        </IconButton>

        <IconButton
          aria-label="stop"
          colorScheme="yellow"
          _focus={{}}
          onClick={reset}
        > 
          <BsFillStopFill size="24" />
        </IconButton>
      </HStack>
    </Flex>
  )
}