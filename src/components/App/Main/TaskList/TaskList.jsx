import React, { useContext } from "react";
import { globalContext } from "../../context/globalContext";
import Task from "../Task/Task";

function TaskList() {

	const { state } = useContext(globalContext)


	// const handlerChange = (id) => {

	// 	// state.list.map((id) => {
	// 	// if (el.id.toString() === event.target.value) {			
	// 	// 	el.status === false ? el.status = true : el.status = false    			
	// 	// }
	// 	// return el
	// 	// })

	// 	dispatch({
	// 		type: 'MARK_TASK',
	// 		payload: {
	// 			id: id
	// 		}
	// 	})
	// }


	return (
		<div className="tasklist mt-5">
			{state.list.map((task) => (
				<div key={task.id} className="form-check ">
					<Task
						text={task.text}
						setText={task.setText}
						status={task.status}
                        id={task.id}
					/>
				</div>
			))}
		</div>
	);
}

export default TaskList;
