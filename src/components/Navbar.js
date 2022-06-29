import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <Flex flexDirection={"row"} justifyContent={'space-between'} alignItems={"center"} width={"100vw"} height={"fit-content"} p={'10px'} bgColor={'white'} >
            <Text color={"purple.600"} fontWeight={'semibold'} >DeRento Agreement Portal</Text>
            <ConnectButton/>
        </Flex>
     );
}
 
export default Navbar;