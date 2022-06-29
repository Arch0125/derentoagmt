import logo from './logo.svg';
import './App.css';
import { Button, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex flexDirection={"column"}  justifyContent={"center"} alignItems={'center'} width={"100vw"} height={"100vh"} bgColor={"gray.200"} >
      <Button variant={"solid"} colorScheme={'purple'} mt={"15px"} color={'white'} >Don't have a Crypto Wallet? Continue to Payment</Button>
      <Button variant={"solid"} colorScheme={'purple'} mt={"15px"} color={'white'} >Continue to Sign Agreement</Button>
    </Flex>
  );
}

export default App;
