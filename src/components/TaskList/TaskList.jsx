import React from "react";
import Task from "../Task/Task";

function TaskList({ list, setList }) {
	return (
		<div className="tasklist mt-5">
			{list?.map((task) => (
				<div key={task.id} className="form-check ">
					<Task
						text={task.text}
						status={task.status}
                        id={task.id}
						list={list}
						setList={setList}
					/>
				</div>
			))}
		</div>
	);
}

export default TaskList;
