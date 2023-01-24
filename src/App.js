import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([]);

    const addItems = () => {
        if (item !== '') {
            setItems([...items, item]);
            setItem('');
        }
    };

    const deleteItem = (dItem) => {
        const newItems = items.filter((item) => {
            return item !== dItem;
        });
        setItems(newItems);
    };

    return (
        <div className="App">
            <h1>ToDo List</h1>

            <TodoInput todo={item} setTodo={setItem} addTodo={addItems} />

            <TodoList list={items} remove={deleteItem} />
        </div>
    );
}

export default App;
