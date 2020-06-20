import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './components/Tasks/Tasks';
import { connect } from 'react-redux';
import { showAddTaskMenu, hideAddTaskMenu, addListItem, removListItem, addTaskItem, removTaskItem, toggleTaskItemCompleted, changeListItemName, setActiveListItem } from './redux/actions';
import { useHistory, Route } from 'react-router-dom';

function App({ setActiveListItem, activeListItem, lists, colors, showAddTaskMenu, hideAddTaskMenu, showMenu, tasks, addListItem, removListItem, addTaskItem, removTaskItem, toggleTaskItemCompleted, changeListItemName }) {

  let history = useHistory();


  const addTaskMenuFunctions = {
    showAddTaskMenu,
    hideAddTaskMenu,
    showMenu,
    addListItem,
  };

  const cardTaskMenu = {
    addTaskItem,
  };


  return (
    <div className="todo">
      <div className="todo__sidebar">
        <Sidebar setActiveListItem={setActiveListItem} activeListItem={activeListItem} history={history} lists={lists} colors={colors} removListItem={removListItem} addTaskMenuFunctions={addTaskMenuFunctions} />
      </div>
      <div className="todo__tasks">
        <Route exact path='/' >
          <Tasks renderAll={true} tasks={tasks} lists={lists} changeListItemName={changeListItemName} toggleTaskItemCompleted={toggleTaskItemCompleted} removTaskItem={removTaskItem} colors={colors} cardTaskMenu={cardTaskMenu} />
        </Route>
        <Route path={`/lists/${activeListItem ? activeListItem : '/'}`}>
          <Tasks renderAll={false} activeListItem={activeListItem} tasks={tasks} lists={lists} changeListItemName={changeListItemName} toggleTaskItemCompleted={toggleTaskItemCompleted} removTaskItem={removTaskItem} colors={colors} cardTaskMenu={cardTaskMenu} />
        </Route>
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
    activeListItem: state.lists.activeList,
  };
}

const mapDispatchToProps = {
  showAddTaskMenu,
  hideAddTaskMenu,
  addListItem,
  removListItem,
  addTaskItem,
  removTaskItem,
  toggleTaskItemCompleted,
  changeListItemName,
  setActiveListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
