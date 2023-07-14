import { useEffect, useRef } from "react"

export const useFocus = () =>{
    const ref = useRef<HTMLInputElement>(null)

    useEffect(() => {
        //Le damos focus automatico al primer input cuando la pagina se renderiza por
        //primera vez
       ref.current?.focus() 
    }, []);
    
    return ref
}