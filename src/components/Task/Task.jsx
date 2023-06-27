import React from "react";

function Task({ text, status, id, handlerChange }) {
	return (
		<div className="task">
			<input
				className="form-check-input"
				type="checkbox"
				value={id}
				id="flexCheckDefault"
				onChange={handlerChange}
			/>
			<label 
                className={status ? "text-success" : "text-black" }
                htmlFor="flexCheckDefault">
				{text}
			</label>
		</div>
	);
}

export default Task;
