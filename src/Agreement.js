import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CreateAgmt from './components/CreateAgmt';
import UploadDoc from './components/UploadDoc';
import GetAccount from './hooks/GetAccount';

const Agreement = () => {
    return ( 
        <Flex width={"100vw"} wrap={'wrap'} height={"fit-content"} pb={"40px"} bgColor={'gray.100'} flexDirection={'row'} >
            <Flex flexDirection={"column"}alignItems={'center'} minWidth={"50%"} >
                <CreateAgmt/>
                <UploadDoc/>
            </Flex>
            <Flex minWidth={"50%"} >

            </Flex>
        </Flex>
     );
}
 
export default Agreement;