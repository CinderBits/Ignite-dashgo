import { Box, useBreakpointValue, Drawer, DrawerOverlay, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerBody} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

export function Sidebar(){

    const {isOpen, onClose} = useSidebarDrawer()

    const [floatingSide, setFloatingSide] = useState(true)

    const isFloatingSidebar = useBreakpointValue({
        base:true,
        lg:false
    })

    useEffect(()=>{
            setFloatingSide(isFloatingSidebar)
    },[isFloatingSidebar])


    if(floatingSide)
    {return(
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent bg='gray.800' p='4'>
                    <DrawerCloseButton mt={'6'}/>
                    <DrawerHeader>Navegação</DrawerHeader>
                    <DrawerBody>
                        <SidebarNav/>
                    </DrawerBody>

                </DrawerContent>
            </DrawerOverlay>        
        </Drawer>
    )}
    return(
       <Box as='aside' width={['48','48','64']} mr={['6','8']}>
          <SidebarNav/>
       </Box>
    )
}