import { useEffect, useState } from "react"

function getSavedValue(key, defaultValue) {
    // let savedValue = []
    // for (key = 0; localStorage.getItem(key) !== null; key++) {
    //     const item = localStorage.getItem(key)
    //     savedValue.push(item)
    // }
    
    // return savedValue || defaultValue

    let currentValue

        try {
            currentValue = JSON.parse(
                localStorage.getItem(key) || String(defaultValue)
            )
        } catch(err) {
            currentValue = defaultValue
        }
        

        return currentValue
}

export function useLocalStorage(key, initalValue) {
    const [value, setValue] = useState(getSavedValue(key, initalValue))
    useEffect(() => {
        // let str = ''
        // let count = 0

        // value.map((el) => {           
        //     if (el.status === false) {
        //         count++
        //         str += `${count}) ${el.text} `
        //     }
        //     return el           
        // })
        localStorage.setItem(key, JSON.stringify(value)) 
    },  [key, value])
    return [value, setValue]
}


// import { useEffect, useState } from "react"

// export function useLocalStorage(key, defaultValue) {
//     const [value, setValue] = useState(() => {
//         let currentValue

//         try {
//             currentValue = JSON.parse(
//                 localStorage.getItem(key) || String(defaultValue)
//             )
//         } catch(err) {
//             currentValue = defaultValue
//         }

//         return currentValue
//     })

//     useEffect(() => {
//         localStorage.getItem(key, JSON.stringify(value))
//     }, [value, key])

//     return [value, setValue]
// }

