

import { Flex, VStack } from "@chakra-ui/react";

import { SectionHeading } from "../../../common";
import { Countdown } from "./Countdown";

export function TimersSection(){
  return (
		<Flex
			w="100%"
			flexDir="column"
		>
			<SectionHeading name="Timers" />
			
			<VStack 

			>
				<Countdown />
			</VStack>
		</Flex>
	)
}