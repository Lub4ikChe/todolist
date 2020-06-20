import React, { useState } from 'react';


function AddTaskForm({ setInputValue, inputValue, listItem, addNewTask }) {

    const [showAddCard, setShowAddCard] = useState(false)

    return (
        <div>
            {showAddCard ?
                <div
                    className="tasks__card__add">
                    <input
                        value={inputValue}
                        onChange={event => setInputValue(event.target.value)}
                        placeholder="Текс завдання"
                        className="tasks__card__add__input"
                    />

                    <button
                        onClick={() => addNewTask(listItem.id, inputValue, false, setShowAddCard)}
                        className="tasks__card__add__addbutton"
                    >Добавити</button>
                    <button onClick={() => {
                        setShowAddCard(false);
                        setInputValue('');
                    }} className="tasks__card__add__addbutton closebutton" >Відмінити</button>
                </div> : <div
                    onClick={() => setShowAddCard(true)} className="tasks__card__add__task">
                    <i>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 1V15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M1 8H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </i>
                    <span>Нова задач </span>
                </div>}
        </div>
    );
}

export default AddTaskForm;
