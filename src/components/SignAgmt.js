import React, { useState } from 'react';
import { Button, Divider, Flex,Text,Box,Link } from '@chakra-ui/react';
import GetContract from '../hooks/GetContract';
import GetAccount from '../hooks/GetAccount';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const SignAgmt = () => {

    const contract = GetContract();

    const[agmts,setAgmts]=useState([]);

    const account = GetAccount();

    const form = useRef();

    const showAgmt = async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        console.log(parselist)
        setAgmts([]);
        for(let i =1;i<=parselist;i++){
            var agmt = await contract.getAgreements(i);
            console.log(agmt.status)
            if((JSON.stringify(agmt.tenant) === JSON.stringify(account))&&(agmt.status != 'Signed')){
                setAgmts((agmts)=>[...agmts,agmt])
            }
        }
        console.log(agmts)
    }

    const signAgmt=async(index)=>{
        await contract.signAgreement(index);
     }

     const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current)
        emailjs.sendForm('service_zexdado', 'template_8q94tnl', form.current, 'uCXyLxudrrEnzzx90')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return ( 
        <Flex  flexDirection={"column"} width={"95%"} p={'20px'} mt={'8%'} height={'fit-content'} bgColor={'white'} borderWidth={'2px'} rounded={'2xl'} borderColor={'blackAlpha.200'} boxShadow={'xl'}  >
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={'purple.700'} textAlign={'center'} mb={"20px"} >Agreements Received</Text>
            <Button onClick={showAgmt} variant={"solid"} colorScheme={'purple'} >Show List</Button>
            <Divider/>
            {
                Object.keys(agmts).map((agmt, index) => (
                    <Flex color={"blackAlpha.800"} flex={"1"} flexDirection={"row"} width={"100%"} height={"fit-content"} padding={"20px"} bgColor={"gray.50"} mt={"15px"} rounded={"2xl"} borderWidth={"1.5px"} borderColor={"gray.100"} >
                        
                        
                        <Text>Agreement ID #{(agmts[index].agmtid).toString()} &nbsp; </Text>
                        <Box width={"50%"}>
                            <Text>Lender : {(agmts[index].lender).substring(0,7)}</Text>
                            <Text>Amount : {agmts[index].duration}</Text>
                            <Link isExternal href={agmts[index].document} >View Document</Link>
                        </Box>
                        <Box  >
                        <Text>Duration : {(agmts[index].duration)}</Text>
                        <form ref={form} onSubmit={sendEmail}>
                            <input type={'hidden'} name='lender' value={agmts[index].lender} />
                            <input type={'hidden'} name='tenant' value={agmts[index].tenant} />
                            <input type={'hidden'} name='agmtid' value={(agmts[index].agmtid)} />
                            <input type={'hidden'} name='lmail' value={agmts[index].lmail} />
                            <input type={'hidden'} name='tmail' value={agmts[index].tmail} />
                        <Button onClick={() => signAgmt((agmts[index].agmtid).toString())} type={'submit'} variant={"solid"} colorScheme={"purple"} mt={'5px'} >Sign Agreement</Button>
                        </form>
                        </Box>
                    </Flex>
                ))
            }
        </Flex>
     );
}
 
export default SignAgmt;