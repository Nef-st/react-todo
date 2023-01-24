import React from 'react';

const TodoList = ({ list, remove }) => {
    return (
        <>
            {list?.length > 0 ? (
                <ul className="todo-list">
                    {list.map((item, index) => (
                        <div className="Item">
                            <li key={index}> {item} </li>
                            <button
                                className="delete-button"
                                onClick={() => {
                                    remove(item);
                                }}>
                                Delete
                            </button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div className="empty">
                    <p>No Item In List</p>
                </div>
            )}
        </>
    );
};

export default TodoList;
