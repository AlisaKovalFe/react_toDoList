import React from 'react';
import { useState } from "react"
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'
import useLocalStorage from '../../hooks/useLS'

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
        
        setList((prev) => [task, ...prev])
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