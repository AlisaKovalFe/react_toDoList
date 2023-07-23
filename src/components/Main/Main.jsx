import React from 'react';
import { useState } from "react"
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'
import useLocalStorage from '../../hooks/useLS'

let store = []

function Main(props) {

    const [text, setText] = useState('')
    const [list, setList] = useLocalStorage([], 'tasks')
    
    function handleSubmit(event) {
        event.preventDefault()

        const task = {
        text,
        id: Date.now(),
        status: false
        }
        
        setList((prev) => [...prev, task])
        setText('')

        store.push(task)     

        if (localStorage.getItem('task') == null) {
            localStorage.setItem('task', JSON.stringify(store))
        } else if (localStorage.getItem('task') != null) {
            localStorage.setItem('task', JSON.stringify(store))
        }
    } 

    const handlerChange = (event) => {

        let newList = list.map((el, index) => {
        if (el.id.toString() === event.target.value) {
            
            el.status === false ? el.status = true : el.status = false    
            
            if (el.status === true) {
                let storeCopy = [...store]
                storeCopy.splice(index, 1)
                localStorage.setItem('task', JSON.stringify(storeCopy))
            } else {
                localStorage.setItem('task', JSON.stringify(store))
            }
            
        }
        return el
        })

        setList(newList)  
    }


    return (
        <main className="container container-main">
            <Form text={text} setText={setText} handleSubmit={handleSubmit} />
            <TaskList tasks={list} handlerChange={handlerChange} />
        </main>
    );
}

export default Main;