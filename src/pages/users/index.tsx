import { Text , Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList(){
    let [isWide,setIsWide]= useState(false)
    const isWideVersion = useBreakpointValue({
        base: false,
        lg:true
    })

    useEffect(()=>{
        setIsWide(isWideVersion)
    },[isWideVersion])

    return(
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW={1400} mx='auto' px='6'>
                <Sidebar />     

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' alignItems='center'>
                        <Heading size='lg' fontWeight={'normal'}>Usuários</Heading>

                        <Link href='/users/create' passHref>
                            <Button 
                            as={'a'} 
                            size='sm' 
                            fontSize={'sm'} 
                            colorScheme='cyan'
                            leftIcon={<Icon as={RiAddLine} fontSize='20'/>}
                            >
                                Criar usuário
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme={'whiteAlpha'}>
                        <Thead>
                            <Tr>
                                <Th px={['4','4','6']} color='gray.300' width={'8'}>
                                    <Checkbox colorScheme={'cyan'}/>
                                </Th>
                                <Th>Usuario</Th>
                                {isWide && <Th>Data de cadastro</Th>}
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={['4','4','6']}>
                                    <Checkbox colorScheme={'cyan'}/>
                                </Td>
                                <Td>
                                    <Text fontWeight={'bold'}>
                                        Paulo Mazakina
                                    </Text>
                                    <Text fontWeight={'bold'} fontSize='sm' color='gray.300'>
                                        8.mazakina@gmail.com
                                    </Text>
                                </Td>
                                {isWide &&<Td>
                                    14 de Maio, 2022
                                </Td>}
                                <Td>
                                    <Button 
                                    as={'a'} 
                                    size='sm' 
                                    fontSize={'sm'} 
                                    colorScheme='green'
                                    leftIcon={<Icon as={RiPencilLine} fontSize='16'/>}
                                    >
                                        {isWide? 'Editar': ''}
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>           
            </Flex>
        </Box>
    )
}