import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const [input, setInput] = useState(''); // Changed variable names for clarity
  const [items, setItems] = useState([]); // Changed variable names for clarity

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const addNewItem = () => {
    if (input.trim() !== '') {
      setItems((oldItems) => [...oldItems, input]);
      setInput(''); // Clear the input field after adding an item
    }
  };

  const deleteItem = (id) => {
    setItems((oldItems) => oldItems.filter((_, index) => index !== id));
  };

  return (
    <div className="App">
      <div className="main">
        <div className="centerdiv">
          <h1>To-Do List</h1>
          <input type="text" value={input} onChange={handleChange} />
          <button className="btn btn-primary" onClick={addNewItem}>
            Add Item
          </button>
          <div>
            {items.map((item, index) => (
              <div className="todo" key={index}>
                <TodoList text={item} id={index} onSelect={deleteItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
