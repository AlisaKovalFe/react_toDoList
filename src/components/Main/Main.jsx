import React from 'react';
import { useState } from "react"
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'
import { useLocalStorage } from '../../hooks/useLS';

function Main(props) {

    const [text, setText] = useState('')
    const [list, setList] = useLocalStorage('tasks', ['нет у меня дел'])

    function handleSubmit(event) {
        event.preventDefault()

        const task = {
        text,
        id: Date.now(),
        status: false
        }

        setList((prev) => [...prev, task])
        setText('')
    } 

    const handlerChange = (event) => {

        let newList = list.map((el) => {
        if (el.id.toString() === event.target.value) {
            el.status === false ? el.status = true : el.status = false      
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