import React from 'react';

function TaskEdit({text, id}) {
    return (
        <div>
           <div className="">				
				<input
					type="text"
					className="form-control "
					placeholder="edit here"
					id="exampleInput"
					value={text}
				/>
			</div>
            <button 
				type="button" 
				className="btn btn-secondary btn-save"
                >
					Edit
			</button> 
        </div>
    );
}

export default TaskEdit;