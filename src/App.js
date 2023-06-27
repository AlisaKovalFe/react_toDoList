import './App.css';
import { useState } from "react"
import TaskList from './components/TaskList/TaskList'
import Form from './components/Form/Form'

function App() {

  const [text, setText] = useState('')
  const [list, setList] = useState([])

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

    list.forEach((el) => {
      if (el.id.toString() === event.target.value) {
        el.status === false ? el.status = true : el.status = false
        return el
      }
    })

    setList((prev) => [...prev])
  }

  return (
    <>
      <main className="container my-5">
        <Form text={text} setText={setText} handleSubmit={handleSubmit} />
        <TaskList tasks={list} handlerChange={handlerChange} />
      </main>

    </>

  );
}

export default App;
