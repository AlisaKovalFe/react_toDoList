import React from "react";

function Task({ text, status, id, list,  setList}) {
	function changeStatus(id) {
		const newList = [...list];
		newList?.map((el) => {
			if (el.id === id) {
				el.status = !el.status;
			}
		});
		setList(newList);
	}
	return (
		<div className="task">
			<input
				className="form-check-input"
				type="checkbox"
				checked={status}
				value={id}
				id="flexCheckDefault"
				onChange={() => changeStatus(id)}
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
