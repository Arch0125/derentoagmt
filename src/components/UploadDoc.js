import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Input,InputLeftAddon,InputGroup,Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { FileUpload } from 'react-ipfs-uploader';


const UploadDoc = () => {
    const [fileUrl, setFileUrl] = useState('')
    return ( 
        <Flex flexDirection={"column"} width={"80%"} p={'20px'} mt={'8%'} height={'fit-content'} bgColor={'white'} borderWidth={'2px'} rounded={'2xl'} borderColor={'blackAlpha.200'} boxShadow={'xl'}  >
            <Text textAlign={"center"} fontSize={"2xl"} fontWeight={'semibold'} color={'purple.700'} >Upload File</Text>
            <FileUpload setUrl={setFileUrl} />
            FileUrl : <a
                href={fileUrl}
                target='_blank'
                rel='noopener noreferrer'
            >
                {fileUrl}
            </a>
        </Flex>
     );
}
 
export default UploadDoc;