import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';



function App() {

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <Sidebar />
      </div>
      <div className="todo__tasks">
        <Tasks />
      </div>
    </div>
  );
}

export default App;
