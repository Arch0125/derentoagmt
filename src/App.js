import logo from './logo.svg';
import './App.css';
import { Button, Flex, Link, Text } from '@chakra-ui/react';

function App() {
  return (
    <Flex flexDirection={"column"}  justifyContent={"center"} alignItems={'center'} width={"100%"} height={"100vh"} bgColor={"gray.200"} >
      <Text color={"purple.700"} fontSize={"4xl"} fontWeight={'extrabold'} >Welcome to DeRento OnChain Agreement Signer</Text>
      <Text color={"purple.700"} fontSize={"4xl"} fontWeight={'extrabold'} mb={'50px'} >Create, Publish & Sign your Agreements with the security of Blockchain</Text>
      <Link href='/Agreement' ><Button variant={"solid"} colorScheme={'purple'} mt={"15px"} color={'white'} >Continue to Sign Agreement</Button></Link>
      <Button variant={"solid"} colorScheme={'purple'} mt={"15px"} color={'white'} >Don't have a Crypto Wallet? Continue to Payment</Button>
    </Flex>
  );
}

export default App;
