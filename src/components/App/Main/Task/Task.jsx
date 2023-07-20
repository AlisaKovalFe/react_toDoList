import React from "react";
import  { useContext } from "react";
import { globalContext } from "../../context/globalContext";
import TaskEdit from '../TaskEdit/TaskEdit'

function Task({ text, status, id }) {

	const { dispatch } = useContext(globalContext)
	const handlerChange = (id) => {
		dispatch({
			type: 'MARK_TASK',
			payload: {
				id: id
			}
		})
	}
	
	const deleteTask = (id) => {
		dispatch({
			type: 'DELETE_TASK',
			payload: {			
				id: id,
			}
		})
	}

	// const invert = (id) => {				
	// 	dispatch({
	// 		type: 'INVERT_TASK',
	// 		payload: {			
	// 			id: id,
	// 			text: text
	// 		}
	// 	})
	// }

	return (
		<div className="task_area">
			<div className="task">
				<input
					className="form-check-input"
					type="checkbox"
					value={id}
					id="flexCheckDefault"
					onChange={() => handlerChange(id)}
				/>
				<label 
					className={status ? "form-check-label text-decoration-line-through" : "form-check-label" }
					htmlFor="flexCheckDefault">
					{text}
				</label>
			</div>			
			<button 
				type="button" 
				className="btn btn-secondary btn-delete"
				onClick={() => deleteTask(id)}>
					Delete
			</button>
			<button 
				type="submit" 
				className="btn btn-secondary btn-invert"
				onClick={(id) => {			
					return (
						<TaskEdit />
					)
				}}
				>
					Invert
			</button>
		</div>
	);
}

export default Task;