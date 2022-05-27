import { Button } from "@chakra-ui/react";

interface PaginationItemProps{
    isCurrent?:boolean,
    number:number
}

export function PaginationItem({isCurrent = false, number}:PaginationItemProps){

    if (isCurrent) {
        return(
            <Button
                size={'small'}
                fontSize='xs'
                width= '1.5rem'
                height={'1.5rem'}
                colorScheme={`cyan`}
                disabled
                
                _disabled={{
                    bgColor: 'cyan.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }
    return(
        <Button
            size={'small'}
            fontSize='xs'
            width= '1.5rem'
            height={'1.5rem'}
            bgColor={'gray.700'}
            _hover={{
                bg:'gray.500'
            }}
        >
            {number}
        </Button>
    )
}