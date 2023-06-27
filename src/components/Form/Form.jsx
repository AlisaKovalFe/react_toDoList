import React from 'react';

function Form({ text, setText, handleSubmit }) {
    return (
        <form className="mb-3 w-50" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInput" className="form-label">Введите задачу: {text}</label>
                <input type="text" className="form-control" id="exampleInput" aria-describedby="emailHelp"
                    onChange={(event) => setText(event.target.value)}
                    value={text} />
            </div>

            <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
    );
}

export default Form;