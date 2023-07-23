import { useEffect, useState } from "react"

export default function useLocalStorage(initialValue, key) {

    const getCurrentValue = () => {
        let result = localStorage.getItem(key) 

        if (result !== null) {
            return JSON.parse(result)
        } else {
            return initialValue
        }
        
    }
    

    const [value, setValue] = useState(getCurrentValue)

    useEffect(()=> {
        localStorage.setItem(key, setValue(JSON.stringify(value)))
    }, [key, value])

    return [key, value]

}