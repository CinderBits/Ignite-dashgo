import { Box,  Button,  Divider,  Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData ={
    name:string,
    email:string,
    password:string,
    password_confirmation:string
  }

const CreateUserFormSchema = yup.object().shape({
    name:yup.string().required('Nome obrigatorio'),
    email:yup.string().required('Nome obrigatorio').email('E-mail invalido'),
    password:yup.string().required('Senha obrigatoria').min(6, 'No mínimo 6 caracteres'),
    password_confirmation:yup.string().oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
})

export default function CreateUser(){
    const { register, handleSubmit, formState} =useForm({
        resolver: yupResolver(CreateUserFormSchema)
    }) 
    const handleCreateUser:SubmitHandler<CreateUserFormData> = (values)=>{
        console.log(values)
    }

    const {errors} = formState
    return(
        <Box>
            <Header />
            <Flex w='100%' my='6' maxW={1400} mx='auto' px='6'>
                <Sidebar />     

                <Box as='form' 
                flex='1' 
                borderRadius={8} 
                bg='gray.800' 
                p={['6','8']}
                onSubmit={handleSubmit(handleCreateUser)}
                >
                   <Heading size={'large'} fontWeight='normal'>Criar usuário</Heading>

                   <Divider my='6' borderColor={'gray.700'} />

                   <VStack>
                       <SimpleGrid minChildWidth={'240px'} spacing={['6','8']} w='100%' >
                        <Input 
                            name={'name'} 
                            label='Nome completo' 
                            error= {errors.name}
                            {...register('name')}
                        />
                        <Input
                          name={'email'}
                          type='email'
                          label='E-mail'
                          error= {errors.email}
                          {...register('email')} />
                       </SimpleGrid>
                       
                       <SimpleGrid minChildWidth={'240px'} spacing={['6','8']} w='100%' >
                        <Input
                          name={'password'}
                          type='password'
                          label='Senha'
                          error= {errors.password}
                          {...register('password')} />
                        <Input
                          name={'password_confirmation'}
                          type='password'
                          label='Confirmação da senha'
                          error= {errors.password_confirmation}
                          {...register('password_confirmation')} />
                       </SimpleGrid>
                   </VStack>

                   <Flex mt={'8'} justifyContent='flex-end'>
                       <HStack spacing='4'>
                           <Link href='/users' passHref>
                            <Button as='a' colorScheme={'whiteAlpha'}>Cancelar</Button>
                           </Link>
                           <Button type="submit" isLoading={formState.isSubmitting} colorScheme={'cyan'}>Salvar</Button>
                       </HStack>

                   </Flex>
                </Box>           
            </Flex>
        </Box>
    )
}