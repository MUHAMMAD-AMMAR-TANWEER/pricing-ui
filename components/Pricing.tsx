
import { Box, Button, Flex, Heading, HStack, StackProps, Text, Icon, Stack } from '@chakra-ui/react';
import {CheckIcon } from '../icons/icon';

export const ListItem = (props: StackProps) =>{
  const {children, ...rest} = props;
  return (
    <HStack as="li" spacing="5" {...rest}>
      <Icon as={CheckIcon} w="22px" h="22px"/>
      <Text textAlign={["left","left","center"]}>{children}</Text>
    </HStack>
  )
}



export default function Pricing() {
  return (
    <Box mx='6' as='section'>
    <Box maxW="994px" margin="auto" mt="-256px" borderRadius="12px" overflow="hidden" boxShadow='0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)' textAlign='center'>
    <Flex direction={['column', 'column', 'row']}>
      <Box bg='#F0EAFB' p='60px'>
        <Text fontSize='24px' fontWeight='800'>
          Premium PRO
        </Text>
        <Heading as='h3' fontSize={["5xl","5xl","6xl"]} mt='16px'>
          $329
        </Heading>
        <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px'>
          billed just once
        </Text>
        <Button as="button" colorScheme='purple' size='lg' w='282px' mt='24px'>
          Get Started
        </Button>
      </Box>
      <Box p="60px" fontSize="18px" bg="white">
        <Text textAlign="left">
          Access these features when you get the Pricing package.
        </Text>
        <Stack as="ul" spacing="20px" pt="24px" >
          <ListItem>I am the first line</ListItem>
          <ListItem>I am the second line </ListItem>
          <ListItem>I am the third line</ListItem>
          <ListItem>I am the forth line</ListItem>
        </Stack>
      </Box>
    </Flex>
    </Box>
    </Box>
  );
}
