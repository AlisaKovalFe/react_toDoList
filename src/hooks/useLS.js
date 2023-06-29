import { useEffect, useState } from "react"

function getSavedValue(key, defaultValue) {
    let savedValue = []
    for (key = 0; localStorage.getItem(key) !== null; key++) {
        const item = localStorage.getItem(key)
        savedValue.push(item)
    }
    
    return savedValue || defaultValue
}

export function useLocalStorage(key, initalValue) {
    const [value, setValue] = useState(getSavedValue(key, initalValue))
    useEffect(() => {
        let str = ''
        
        value.map((el) => {
            if (el.status === false) {
                str += `${el.text}, `
            }
            return el           
        })
        localStorage.setItem(key, str) 
    },  [key, value])
    return [value, setValue]
}