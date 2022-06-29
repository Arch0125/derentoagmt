import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import CompleteAgmt from './components/CompleteAgmt';
import CreateAgmt from './components/CreateAgmt';
import MyAgmt from './components/MyAgmt';
import SignAgmt from './components/SignAgmt';
import UploadDoc from './components/UploadDoc';
import GetAccount from './hooks/GetAccount';

const Agreement = () => {
    return ( 
        <Flex width={"100vw"} wrap={'wrap'} height={"fit-content"} pb={"40px"} bgColor={'gray.100'} flexDirection={'row'} >
            <Flex flexDirection={"column"}alignItems={'center'} minWidth={"50%"} >
                <CreateAgmt/>
                <UploadDoc/>
            </Flex>
            <Flex minWidth={"50%"} flexDirection={'column'} >
                <MyAgmt/>
                <SignAgmt/>
                <CompleteAgmt/>
            </Flex>
        </Flex>
     );
}
 
export default Agreement;