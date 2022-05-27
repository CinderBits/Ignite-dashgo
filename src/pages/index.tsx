import { Button, Flex, Stack, } from '@chakra-ui/react'
import { Input } from '../components/Form/input'
import { Header } from '../components/Header'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'


type SignInFormData ={
  email:string,
  password:string,
}


const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail Inválido'),
  password: yup.string().required('Senha obrigatória'),


})

export default function Home() {
  const {register, handleSubmit, formState} = useForm({
    resolver: yupResolver(SignInFormSchema)
  })
 const {errors} = formState
  const  handleSignin: SubmitHandler<SignInFormData > = (values)=>{
    console.log(values)
  }

  return (
    <Flex flexFlow={'column'}> 
      <Header/>

  
      <Flex
      w= '100vw'
      h= '100vh'
      align='center'
      justify='center'
      >
        <Flex 
        as='form' 
        width='100%'
        maxWidth={360}
        bg='gray.800'
        padding='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignin)}
        >
          <Stack spacing='4'>
            <Input name='email' type='email' label='E-mail' {...register} error={errors.email} />
            <Input name='password' type='password' label='Password'  {...register('password')} error={errors.password}/>

          </Stack>
          <Button 
          type='submit' 
          mt='6' 
          colorScheme="cyan"
          isLoading={formState.isSubmitting}
          size='lg'>Entrar</Button>
        </Flex>
      </Flex>
    </Flex>
    )
}
