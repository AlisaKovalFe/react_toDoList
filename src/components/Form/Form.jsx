import React, { useContext, useState } from "react";
import { globalContext } from "../../context/globalContext";

function Form() {

	const { dispatch } = useContext(globalContext)
	const [text, setText] = useState('')

	function handleSubmit(event) {
		event.preventDefault()

		dispatch({
			type: 'ADD_TASK',
			payload: {
				text: text,
				id: Date.now(),
				status: false
			}
		})	
		setText('')
	}


	return (
		<form className="form" onSubmit={handleSubmit}>
			<div className="">
				<label htmlFor="exampleInput" className="form-label fw-semibold fs-4 mb-4">
					Add task {text}
				</label>
				<input
					type="text"
					className="form-control "
					placeholder="add here"
					id="exampleInput"
					aria-describedby="emailHelp"
					onChange={(event) => setText(event.target.value)}
					value={text}
				/>
			</div>

			<div className="btn-wrap">
				<button type="submit" className="btn btn-secondary">Add</button>
			</div>			
							
		</form>
	);
}

export default Form;
