import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';
import { connect } from 'react-redux';
import { showAddTaskMenu, hideAddTaskMenu, showAddCard, hideAddCard, addListItem, removListItem } from './redux/actions';


function App({ lists, colors, showAddTaskMenu, hideAddTaskMenu, showMenu, tasks, showAddCard, hideAddCard, showAddCardMenu, addListItem, removListItem }) {

  const addTaskMenuFunctions = {
    showAddTaskMenu,
    hideAddTaskMenu,
    showMenu,
    addListItem,
  };

  const cardTaskMenu = {
    showAddCardMenu,
    hideAddCard,
    showAddCard,
  };

  return (
    <div className="todo">
      <div className="todo__sidebar">
        <Sidebar lists={lists} colors={colors} removListItem={removListItem} addTaskMenuFunctions={addTaskMenuFunctions} />
      </div>
      <div className="todo__tasks">
        <Tasks tasks={tasks} lists={lists} colors={colors} cardTaskMenu={cardTaskMenu} />
      </div>
    </div>
  );
}


const mapStateToProps = state => {
  return {
    lists: state.lists.lists,
    showMenu: state.lists.showAddTaskMenu,
    colors: state.colors.colors,
    tasks: state.tasks.tasks,
    showAddCardMenu: state.tasks.showAddCard,
  };
}

const mapDispatchToProps = {
  showAddTaskMenu,
  hideAddTaskMenu,
  showAddCard,
  hideAddCard,
  addListItem,
  removListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
