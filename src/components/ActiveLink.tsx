import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { Children, cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps{
    children: ReactElement,
    shouldMatchExactRef: boolean
}

export function ActiveLink({children, shouldMatchExactRef = false, ...rest}:ActiveLinkProps){
    let isActive = false

    const {asPath} = useRouter()

    if(shouldMatchExactRef &&(asPath ===rest.href)){
        isActive = true;
    }
    if(!shouldMatchExactRef && (asPath.startsWith(String(rest.href)) )){
        isActive = true;
    }
    return(
        <Link {...rest}>
         {cloneElement(children,{
             color: isActive? 'pink.400' : 'gray.50'
             })}    
        </Link>
    )
}