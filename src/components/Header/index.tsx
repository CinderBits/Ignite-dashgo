import { Flex, Icon, IconButton, useBreakpointValue} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { RiMenuLine } from "react-icons/ri"
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext"

import { Logo } from "./Logo"
import { NotificationsNav } from "./NotificationsNav"
import { Profile } from "./Profile"
import { Search } from "./Search"

export function Header() {
    const {onOpen} = useSidebarDrawer()
    
    const [headerItens, setHeaderItens] = useState(false);
    const isWideVersion =useBreakpointValue({
        base:false,
        lg:true
    })

    useEffect(() => {
          setHeaderItens(isWideVersion);
      }, [isWideVersion]);
    return(
        <Flex 
        as='header'
        w='100%'
        maxWidth={1400}
        h='20'    
        mx='auto'
        mt='4'
        align='center'    
        px='6'
        >
            {!headerItens && (
                <IconButton icon={<Icon as={RiMenuLine}/>}
                    fontSize ={'24'}
                    variant='unstyled'
                    onClick={onOpen}
                    aria-label='Abre navegação'
                    mr='2'
                ></IconButton>
            )}

            <Logo/>
            {headerItens && <Search/>}
            <Flex align={'center'} ml='auto'>
                <NotificationsNav/>
                <Profile showProfileData ={headerItens} />
            </Flex>
        </Flex>
    )
}