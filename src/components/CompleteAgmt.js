import React, { useState } from 'react';
import { Button, Divider, Flex,Text,Box,Link } from '@chakra-ui/react';
import GetContract from '../hooks/GetContract';
import GetAccount from '../hooks/GetAccount';

const CompleteAgmt = () => {

    const contract = GetContract();

    const[agmts,setAgmts]=useState([]);

    const account = GetAccount();

    const showAgmt = async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        console.log(parselist)
        setAgmts([]);
        for(let i =1;i<=parselist;i++){
            var agmt = await contract.getAgreements(i);
            if((JSON.stringify(agmt.lender) === JSON.stringify(account)) || (JSON.stringify(agmt.tenant) === JSON.stringify(account))){
                setAgmts((agmts)=>[...agmts,agmt])
            }
        }
        console.log(agmts)
    }

    return ( 
        <Flex flexDirection={"column"} width={"95%"} p={'20px'} mt={'8%'} height={'fit-content'} bgColor={'white'} borderWidth={'2px'} rounded={'2xl'} borderColor={'blackAlpha.200'} boxShadow={'xl'}  >
            <Text fontSize={"2xl"} fontWeight={"semibold"} color={'purple.700'} textAlign={'center'} mb={"20px"} >Signed Agreements</Text>
            <Button onClick={showAgmt} variant={"solid"} colorScheme={'purple'} >Show List</Button>
            <Divider/>
            <Flex flexDirection={'column-reverse'} >
            {
                 Object.keys(agmts).map((agmt, index) => (
                     
                    <Flex color={"blackAlpha.800"} flex={"1"} flexDirection={"row"} width={"100%"} height={"fit-content"} padding={"20px"} bgColor={"gray.50"} mt={"15px"} rounded={"2xl"} borderWidth={"1.5px"} borderColor={"gray.100"} >
                        
                        <Text>Agreement ID#{(agmts[index].agmtid).toString()} &nbsp; </Text>
                        <Box width={"50%"}>
                            <Text>Lender : {(agmts[index].lender).substring(0,7)}</Text>
                            <Text>Tenant : {(agmts[index].tenant).substring(0,7)}</Text>
                            <Text>Amount : {agmts[index].duration}</Text>
                            <Text>Product ID : {agmts[index].productid}</Text>
                        </Box>
                        <Box  >
                        <Text>Duration : {(agmts[index].duration)}</Text>
                        <Text>Status : {agmts[index].status}</Text>
                        <Link href={agmts[index].document} isExternal>View Document</Link>
                        </Box>
                        
                    </Flex>
                 ))
            }
            </Flex> 
        </Flex>
     );
}
 
export default CompleteAgmt;