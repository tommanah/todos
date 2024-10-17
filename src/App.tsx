import React, { useState } from 'react';
import './App.css';
import Block from './components/Block';
import Header from './components/Header';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className='all'>
      <Header />
      <Block />
    </div>
  );
}

export default App;
