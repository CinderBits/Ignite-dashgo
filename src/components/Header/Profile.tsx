import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps{
    showProfileData?:boolean;
}

export function Profile({showProfileData = true}:ProfileProps){
    return(
        <Flex align={'center'}>
            { showProfileData &&  
            <Box mr='4' textAlign={'right'}>
                <Text>Paulo Mazakina</Text> 
                <Text color={`gray.300` } fontSize='small'>
                    paulomzknbueno@gmail.com</Text>
            </Box>}

            <Avatar size={'md'} name='Paulo Mazakina' src='https://avatars.githubusercontent.com/u/74946900?s=400&u=4a73b97cc0f910641565ee7cb363c70b19d43801&v=4' />
        </Flex> 
    )
}