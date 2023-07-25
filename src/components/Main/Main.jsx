import React from 'react';
import TaskList from '../TaskList/TaskList'
import Form from '../Form/Form'

function Main(props) {

    return (
        <main className="container container-main">
            <Form  />
            <TaskList />
        </main>
    );
}

export default Main;