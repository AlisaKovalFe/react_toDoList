import React from 'react';

function Task({ text, checked }) {



    return (
        <div className="task" >
            <input className="form-check-input" type="checkbox" value={text} id="flexCheckDefault"
                checked={checked}
                onChange={(event) => {
                    event.target.checked === false ? text.style.color = 'red' : text.style.color = 'green'
                }}



            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                {text}
            </label>
        </div>
    );
}

export default Task;