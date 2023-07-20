import React from "react";
import  { useContext } from "react";
import { globalContext } from "../../context/globalContext";
import { useState } from "react"

function Task({ text, status, id }) {

	const { dispatch } = useContext(globalContext)
	const [editedTask, setEditedTask] = useState(text)
	const [isShow, setIsShow] = useState(false)

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
			{
				isShow ? (
					<input className="input_edit"
						value={editedTask}
						onChange={(e) => setEditedTask(e.target.value)}/>
				) :
					(
					<div className="task_areaShow">
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
								{editedTask}
							</label>
						</div>			
						<button 
							type="button" 
							className="btn btn-secondary btn-delete"
							onClick={() => deleteTask(id)}>
								Delete
						</button>
					</div>
				)
			}
			
		
			<button 
				type="submit" 
				className="btn btn-secondary btn-invert"
				onClick={() => setIsShow(!isShow)}
				>
					{ isShow ? 'Save' : 'Edit'}
			</button>
		</div>
	);
}

export default Task;
