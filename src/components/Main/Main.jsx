import React from 'react';
import { useState } from "react"
import { useLocalStorage } from "../../hooks/useLS"
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'

function Main() {

    const [text, setText] = useState('')
    const [list, setList] = useLocalStorage([], "plan")
    
    function handleSubmit(event) {
        event.preventDefault()

        const newTask = {
        text,
        id: Date.now(),
        status: false
        }
        
        setList((prev) => [newTask, ...prev])
        setText('')
    } 

    return (
        <main className="container container-main">
            <Form text={text} setText={setText} handleSubmit={handleSubmit} />
            <TaskList list={list} setList={setList} />
        </main>
    );
}

export default Main;