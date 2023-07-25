import React, { useContext } from "react";
import Task from "../Task/Task";
import { globalContext } from "../../context/globalContext";

function TaskList() {

	const { state } = useContext(globalContext)

	return (
		<div className="tasklist mt-5">
			{state?.map((task) => (
				<div key={task.id} className="form-check ">
					<Task
						text={task.text}
						status={task.status}
                        id={task.id}
					/>
				</div>
			))}
		</div>
	);
}

export default TaskList;
