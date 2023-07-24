import { useEffect, useState } from "react"

export default function useLocalStorage(initialValue, key) {

    const getCurrentValue = () => {
        let result = localStorage.getItem(key) 

        if (result !== null) {
            return JSON.parse(result)
        } else {
            return initialValue
        }

        g
        
    }
    

    const [value, setValue] = useState(getCurrentValue)

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]

}