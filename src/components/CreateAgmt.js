import { Button, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Input,InputLeftAddon,InputGroup,Stack } from '@chakra-ui/react';
import { useState } from 'react';
import GetContract from '../hooks/GetContract';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const CreateAgmt = () => {

    const[tenant,setTenant]=useState('');
    const[lmail,setLmail]=useState('');
    const[tmail,setTmail]=useState('');
    const[amount,setAmount]=useState(0);
    const[duration,setDuration]=useState('');
    const[productid,setProductid]=useState('');
    const[ipfshash,setIpfshash]=useState('');
    const[tosend,setTosend]=useState([]);

    const contract = GetContract();
    const form = useRef();

    const createagmt=async()=>{
        await contract.addAgreement(tenant,lmail,tmail,amount,duration,productid,ipfshash)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_zexdado', 'template_peblt5r', form.current, 'uCXyLxudrrEnzzx90')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };



    return ( 
        <Flex flexDirection={"column"} width={"80%"} p={'20px'} mt={'8%'} height={'fit-content'} bgColor={'white'} borderWidth={'2px'} rounded={'2xl'} borderColor={'blackAlpha.200'} boxShadow={'xl'}  >
            <Text fontWeight={"semibold"} fontSize={'2xl'} textAlign={"center"} color={"purple.800"} >Create Agreement</Text>
            <form ref={form} onSubmit={sendEmail} > 
            <Stack spacing={4} >
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Tenant Address</InputLeftAddon>
                    <Input onChange={e=>setTenant(e.target.value)} color={"blackAlpha.700"} borderColor={'gray.400'} />
                </InputGroup>
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Your Mail</InputLeftAddon>
                    <Input onChange={e=>setLmail(e.target.value)} color={"blackAlpha.700"} borderColor={'gray.400'} />
                </InputGroup>
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Tenant Mail</InputLeftAddon>
                    <Input onChange={e=>setTmail(e.target.value)} color={"blackAlpha.700"} name='user_email' borderColor={'gray.400'} />
                </InputGroup>
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Amount</InputLeftAddon>
                    <Input onChange={e=>setAmount(e.target.value)} color={"blackAlpha.700"} borderColor={'gray.400'} />
                </InputGroup>
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Duration</InputLeftAddon>
                    <Input onChange={e=>setDuration(e.target.value)} color={"blackAlpha.700"} borderColor={'gray.400'} />
                </InputGroup>
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Product ID</InputLeftAddon>
                    <Input onChange={e=>setProductid(e.target.value)} color={"blackAlpha.700"} borderColor={'gray.400'} />
                </InputGroup>
                <InputGroup mt={"20px"}>
                    <InputLeftAddon bgColor={'gray.500'} >Document</InputLeftAddon>
                    <Input onChange={e=>setIpfshash(e.target.value)} color={"blackAlpha.700"} borderColor={'gray.400'} />
                </InputGroup>
            </Stack>
            <Button onClick={createagmt} width={"100%"} type='submit' variant={"solid"} colorScheme={'purple'} color={'white'} mt={"40px"} >Publish on Blockchain 🚀</Button>
            </form>
        </Flex>
     );
}
 
export default CreateAgmt;