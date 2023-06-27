import React from 'react';
import Task from '../Task/Task'

function TaskList({ tasks, checkstatus }) {
    return (
        <div className="mt-5">
            {
                tasks.map((task) => (
                    <div key={task.id} className="form-check ">
                        <Task text={task.text} check={task.checked} />
                    </div>
                ))
            }
        </div>
    );
}

export default TaskList;