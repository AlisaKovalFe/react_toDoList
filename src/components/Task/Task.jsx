import React, { useContext, useState } from "react";
import { globalContext } from "../../context/globalContext";

function Task({ text, status, id }) {

	const { dispatch } = useContext(globalContext)
	const [ isShow, setIsShow ] = useState(false)
	const [ editedTask, setEditedTask ] =useState(text)

	const handlerChange = (id) => {
		dispatch({
			type: 'MARK_TASK',
			payload: {
				id: id
			}
		})
	}
	
	function deleteTask(id) {
		dispatch({
			type: 'DELETE_TASK',
			payload: {
				id: id
			}
		})
	}

	function editTask(id) {
		dispatch({
			type: 'EDITED_TASK',
			payload: {
				text: editedTask
			}
		})
	}

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
								checked={status}
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
				onClick={() => {
					setIsShow(!isShow)
					editTask(id)
				}}
				>
					{ isShow ? 'Save' : 'Edit'}
			</button>
		</div>	
	);
}

export default Task;
