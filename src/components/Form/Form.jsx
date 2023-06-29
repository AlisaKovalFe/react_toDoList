import React from "react";

function Form({ text, setText, handleSubmit }) {
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
