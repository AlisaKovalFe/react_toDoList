import './App.css';
import { useState } from "react"
import TaskList from './components/TaskList/TaskList'
import Form from './components/Form/Form'

function App() {

  const [text, setText] = useState('')
  const [list, setList] = useState([{
    text: '1я задача',
    id: 1
  }])

  function handleSubmit(event) {
    event.preventDefault()

    const task = {
      text,
      id: Date.now(),
    }

    setList((prev) => [...prev, task])
    setText('')
  }

  function checkstatus(list) {
    list.map((el) => {
      if (!el.checked) {
        el.checked = false
      }
      return el
    })
  }

  console.log(list)
  return (
    <>
      <main className="container my-5">
        <Form text={text} setText={setText} handleSubmit={handleSubmit} />
        <TaskList tasks={list} checkstatus={checkstatus} />
      </main>

    </>

  );
}

export default App;
