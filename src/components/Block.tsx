import React, { useState } from 'react';
import "./Block.css";

interface FooterProps{
    itemCount: number;
    filter: string;
    setFilter: (filter: string) => void;
    clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({itemCount, filter, setFilter, clearCompleted}) => {
    return (
        <div className='footer'>
            <span style={{background: '#f3f3f3'}}>
                <div className='itemCount'>{itemCount} items left</div>
            </span>
            <span style={{background: '#f3f3f3'}}>
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'all' : ''}>All</button>
                <button onClick={() => setFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
                <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'completed' : ''}>Completed</button>
            </span>
            <button onClick={clearCompleted} className='clear'>Clear completed</button>
        </div>
    )
}

interface TODO {
    text: string;
    completed: boolean;
}

const ItemList: React.FC<{todo: TODO, onToggle: () => void}> = ({todo, onToggle}) => {
    return (
        <div className='itemList'>
            <label className='item'>
                <input type='checkbox' checked={todo.completed} onChange={onToggle}></input>
                <div className='checkbox'></div>
                <div style={{ textDecoration: todo.completed ? 'line-through' : 'none'}} className='itemText'>{todo.text}</div>
            </label>
        </div>
    )
}

const Block = () => {
    const [todos, setTodos] = useState<TODO[]>([]);
    const [inputValue, setInputValue] = useState<string>('');
    const [filter, setFilter] = useState<string>('all');

    const addTask = () => {
        const newTask: TODO = {text: inputValue, completed: false};
        setTodos([...todos, newTask]);
        setInputValue(''); 
    }

    const toggleItem = (index: number) => {
        const updatedItem = todos.map((todo, i) => {
            return i === index ? {...todo, completed: !todo.completed} : todo
        });
        setTodos(updatedItem);
    }
    
    const filteredList = () => {
        switch(filter) {
            case 'active':
                return todos.filter(todo => !todo.completed);
            case 'completed':
                return todos.filter(todo => todo.completed);
            default:
                return todos;
        }
    }

    const clearList = () => {
        setTodos(todos.filter(todo => !todo.completed))
    }

    return (
        <div className='mainBlock'>
            <input 
                type='text' 
                placeholder='what you need to do?'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {if (e.key === 'Enter') addTask();}}></input>
            {/* тут выводится список List какой-нибудь */}
            {filteredList().length > 0 && (
                <div>
                    {filteredList().map((todo, index) => (
                        <ItemList 
                            key={index} 
                            todo={todo}
                            onToggle={() => toggleItem(index)}/>
                    ))}
                </div>
            )}
            <Footer itemCount={filteredList().length} filter={filter} setFilter={setFilter} clearCompleted={clearList}/>
        </div>
    );
};

export default Block;