import React from "react";

function Task({ text, status, id, list, setList }) {

	const handlerChange = (id) => {
		setList(list?.map((el) => {
			if (el.id === id) {
				el.status = !el.status;
			}
			return el
		}));
	}

	return (
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
	);
}

export default Task;
