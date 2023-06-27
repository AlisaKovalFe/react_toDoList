import React from "react";
import Task from "../Task/Task";

function TaskList({ tasks, handlerChange }) {
	return (
		<div className="mt-5">
			{tasks.map((task) => (
				<div key={task.id} className="form-check ">
					<Task
						text={task.text}
						status={task.status}
                        id={task.id}
						handlerChange={handlerChange}
					/>
				</div>
			))}
		</div>
	);
}

export default TaskList;
